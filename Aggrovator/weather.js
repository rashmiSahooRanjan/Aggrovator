const API_KEY = 'd56183d14de0b954afcb2229ed5857a4'; // Replace with your API key
        let currentLat, currentLon;
        let map;
        let weatherLayer;
        let marker;

        async function getCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        currentLat = position.coords.latitude;
                        currentLon = position.coords.longitude;
                        fetchWeatherByCoords(currentLat, currentLon);
                    },
                    error => {
                        showError('Unable to get your location. Please search for a city.');
                        fetchWeatherByCity('London');
                    }
                );
            } else {
                showError('Geolocation is not supported by your browser.');
                fetchWeatherByCity('London');
            }
        }

        async function searchWeather() {
            const city = document.getElementById('cityInput').value.trim();
            if (city) {
                fetchWeatherByCity(city);
            }
        }

        document.getElementById('cityInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchWeather();
            }
        });

        async function fetchWeatherByCity(city) {
            showLoading();
            try {
                const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
                const geoRes = await fetch(geoUrl);
                const geoData = await geoRes.json();

                if (geoData.length === 0) {
                    throw new Error('City not found');
                }

                currentLat = geoData[0].lat;
                currentLon = geoData[0].lon;
                fetchWeatherByCoords(currentLat, currentLon);
            } catch (error) {
                showError('City not found. Please try again.');
                hideLoading();
            }
        }

        async function fetchWeatherByCoords(lat, lon) {
            try {
                const [current, forecast, airQuality] = await Promise.all([
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`).then(r => r.json()),
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`).then(r => r.json()),
                    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(r => r.json())
                ]);

                displayWeather(current, forecast, airQuality);
                hideLoading();
            } catch (error) {
                showError('Unable to fetch weather data. Please check your API key.');
                hideLoading();
            }
        }

        function displayWeather(current, forecast, airQuality) {
            document.getElementById('locationInfo').innerHTML = `📍 ${current.name}, ${current.sys.country}`;
            
            document.getElementById('mainTemp').textContent = `${Math.round(current.main.temp)}°`;
            document.getElementById('mainDesc').textContent = current.weather[0].description;
            document.getElementById('mainWeatherIcon').src = `https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`;
            
            document.getElementById('feelsLike').textContent = `${Math.round(current.main.feels_like)}°`;
            document.getElementById('humidity').textContent = `${current.main.humidity}%`;
            document.getElementById('windSpeed').textContent = `${Math.round(current.wind.speed * 3.6)} km/h`;
            document.getElementById('pressure').textContent = `${current.main.pressure} hPa`;
            document.getElementById('visibility').textContent = `${(current.visibility / 1000).toFixed(1)} km`;
            document.getElementById('uvIndex').textContent = 'N/A';

            displayHourlyForecast(forecast);
            displayDailyForecast(forecast);
            displayAirQuality(airQuality);
            displaySunTimes(current);
            initializeMap(currentLat, currentLon);

            document.getElementById('weatherContent').style.display = 'block';
        }

        function displayHourlyForecast(forecast) {
            const hourlyDiv = document.getElementById('hourlyForecast');
            hourlyDiv.innerHTML = '';

            for (let i = 0; i < Math.min(24, forecast.list.length); i += 3) {
                const item = forecast.list[i];
                const time = new Date(item.dt * 1000);
                
                hourlyDiv.innerHTML += `
                    <div class="hourly-item">
                        <div class="hourly-time">${time.getHours()}:00</div>
                        <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="${item.weather[0].description}">
                        <div class="hourly-temp">${Math.round(item.main.temp)}°</div>
                        <div style="font-size: 12px; color: #666;">${item.weather[0].main}</div>
                    </div>
                `;
            }
        }

        function displayDailyForecast(forecast) {
            const dailyDiv = document.getElementById('dailyForecast');
            dailyDiv.innerHTML = '';

            const dailyData = {};
            forecast.list.forEach(item => {
                const date = new Date(item.dt * 1000).toLocaleDateString();
                if (!dailyData[date]) {
                    dailyData[date] = {
                        temps: [],
                        weather: item.weather[0],
                        dt: item.dt
                    };
                }
                dailyData[date].temps.push(item.main.temp);
            });

            Object.entries(dailyData).slice(0, 10).forEach(([date, data]) => {
                const day = new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
                const maxTemp = Math.round(Math.max(...data.temps));
                const minTemp = Math.round(Math.min(...data.temps));

                dailyDiv.innerHTML += `
                    <div class="daily-item">
                        <div class="daily-day">${day}</div>
                        <div class="daily-condition">
                            <img src="https://openweathermap.org/img/wn/${data.weather.icon}@2x.png" alt="${data.weather.description}">
                            <span>${data.weather.main}</span>
                        </div>
                        <div class="daily-temps">
                            <span class="temp-high">${maxTemp}°</span>
                            <span class="temp-low">${minTemp}°</span>
                        </div>
                    </div>
                `;
            });
        }

        function displayAirQuality(airQuality) {
            const aqDiv = document.getElementById('airQuality');
            const aqi = airQuality.list[0].main.aqi;
            const components = airQuality.list[0].components;

            const aqiLabels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
            const aqiClasses = ['aqi-good', 'aqi-good', 'aqi-moderate', 'aqi-unhealthy', 'aqi-poor'];

            aqDiv.innerHTML = `
                <div class="aqi-card">
                    <div class="detail-label">Air Quality Index</div>
                    <div class="aqi-value ${aqiClasses[aqi - 1]}">${aqi}</div>
                    <div>${aqiLabels[aqi - 1]}</div>
                </div>
                <div class="aqi-card">
                    <div class="detail-label">PM2.5</div>
                    <div class="aqi-value">${components.pm2_5.toFixed(1)}</div>
                    <div>μg/m³</div>
                </div>
                <div class="aqi-card">
                    <div class="detail-label">PM10</div>
                    <div class="aqi-value">${components.pm10.toFixed(1)}</div>
                    <div>μg/m³</div>
                </div>
                <div class="aqi-card">
                    <div class="detail-label">O₃ (Ozone)</div>
                    <div class="aqi-value">${components.o3.toFixed(1)}</div>
                    <div>μg/m³</div>
                </div>
            `;
        }

        function displaySunTimes(current) {
            const sunDiv = document.getElementById('sunTimes');
            const sunrise = new Date(current.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            const sunset = new Date(current.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

            sunDiv.innerHTML = `
                <div class="sun-card">
                    <div class="sun-icon">🌅</div>
                    <div class="detail-label">Sunrise</div>
                    <div class="sun-time">${sunrise}</div>
                </div>
                <div class="sun-card">
                    <div class="sun-icon">🌇</div>
                    <div class="detail-label">Sunset</div>
                    <div class="sun-time">${sunset}</div>
                </div>
            `;
        }

        function showLoading() {
            document.getElementById('loadingMessage').style.display = 'block';
            document.getElementById('weatherContent').style.display = 'none';
            document.getElementById('errorMessage').innerHTML = '';
        }

        function hideLoading() {
            document.getElementById('loadingMessage').style.display = 'none';
        }

        function showError(message) {
            document.getElementById('errorMessage').innerHTML = `<div class="error">${message}</div>`;
        }

        // Map Functions
        function initializeMap(lat, lon) {
            if (map) {
                map.remove();
            }

            // Small delay to ensure container is ready
            setTimeout(() => {
                map = L.map('map', {
                    center: [lat, lon],
                    zoom: 10,
                    zoomControl: true,
                    scrollWheelZoom: true
                });

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors',
                    maxZoom: 19
                }).addTo(map);

                marker = L.marker([lat, lon]).addTo(map)
                    .bindPopup('Current Location')
                    .openPopup();

                // Force map to resize properly
                setTimeout(() => {
                    map.invalidateSize();
                }, 100);

                changeMapLayer('temp');
            }, 100);
        }

        function changeMapLayer(layerType) {
            if (!map) return;

            if (weatherLayer) {
                map.removeLayer(weatherLayer);
            }

            document.querySelectorAll('.map-controls button').forEach(btn => {
                btn.classList.remove('active');
            });

            const layerMap = {
                'clouds': 'clouds_new',
                'precipitation': 'precipitation_new',
                'temp': 'temp_new',
                'wind': 'wind_new'
            };

            const layer = layerMap[layerType];
            
            weatherLayer = L.tileLayer(
                `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${API_KEY}`,
                {
                    attribution: 'Weather data © OpenWeatherMap',
                    opacity: 0.6,
                    maxZoom: 19
                }
            ).addTo(map);

            document.getElementById(`btn${layerType.charAt(0).toUpperCase() + layerType.slice(1)}`).classList.add('active');
        }

        // Initialize with user's location
        getCurrentLocation();