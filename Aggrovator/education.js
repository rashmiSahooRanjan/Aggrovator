
// Education Hub JavaScript
class EducationHub {
    constructor() {
        this.currentTab = 'videos';
        this.currentVideoFilter = 'all';
        this.currentGalleryFilter = 'all';
        this.videos = [];
        this.photos = [];
        this.courses = [];
        this.init();
    }

    init() {
        this.loadEducationData();
        this.setupEventListeners();
        this.initializeFilters();
        this.setupVideoPlayer();
        this.setupPhotoGallery();
    }

    loadEducationData() {
        // Mock data for videos
        this.videos = [
            {
                id: 1,
                title: 'Drip Irrigation System Setup',
                description: 'Complete guide to installing drip irrigation',
                category: 'irrigation',
                duration: '8:30',
                views: 8542,
                likes: 234,
                thumbnail: '../assets/images/drip-irrigation.jpg',
                videoUrl: '../assets/videos/drip-irrigation.mp4'
            },
            {
                id: 2,
                title: 'Sprinkler Irrigation Techniques',
                description: 'Optimize water usage with sprinkler systems',
                category: 'irrigation',
                duration: '10:15',
                views: 6789,
                likes: 189,
                thumbnail: '../assets/images/sprinkler-irrigation.jpg',
                videoUrl: '../assets/videos/sprinkler-irrigation.mp4'
            },
            {
                id: 3,
                title: 'Organic Pest Control Methods',
                description: 'Natural solutions for pest management',
                category: 'pest-control',
                duration: '15:20',
                views: 12456,
                likes: 345,
                thumbnail: '../assets/images/organic-pest-control.jpg',
                videoUrl: '../assets/videos/organic-pest-control.mp4'
            },
            {
                id: 4,
                title: 'Drone Technology in Agriculture',
                description: 'Aerial monitoring and precision spraying',
                category: 'technology',
                duration: '18:45',
                views: 9876,
                likes: 287,
                thumbnail: '../assets/images/drone-farming.jpg',
                videoUrl: '../assets/videos/drone-farming.mp4'
            },
            {
                id: 5,
                title: 'IoT Sensors for Smart Farming',
                description: 'Real-time monitoring with smart sensors',
                category: 'technology',
                duration: '14:30',
                views: 7234,
                likes: 198,
                thumbnail: '../assets/images/iot-sensors.jpg',
                videoUrl: '../assets/videos/iot-sensors.mp4'
            },
            {
                id: 6,
                title: 'Composting Techniques for Farmers',
                description: 'Natural soil enrichment methods',
                category: 'organic',
                duration: '12:00',
                views: 5678,
                likes: 156,
                thumbnail: '../assets/images/composting.jpg',
                videoUrl: '../assets/videos/composting.mp4'
            }
        ];

        // Mock data for photos
        this.photos = [
            {
                id: 1,
                title: 'Proper Seed Planting Technique',
                description: 'Learn correct depth and spacing for optimal germination',
                category: 'planting',
                imageUrl: '../assets/images/seed-planting.jpg'
            },
            {
                id: 2,
                title: 'Tractor Maintenance Guide',
                description: 'Keep your equipment running smoothly with regular maintenance',
                category: 'equipment',
                imageUrl: '../assets/images/tractor-maintenance.jpg'
            },
            {
                id: 3,
                title: 'Optimal Harvesting Time',
                description: 'Identify the right time to harvest for maximum yield',
                category: 'harvesting',
                imageUrl: '../assets/images/crop-harvesting.jpg'
            },
            {
                id: 4,
                title: 'Soil Preparation Methods',
                description: 'Prepare your field for planting season',
                category: 'planting',
                imageUrl: '../assets/images/soil-preparation.jpg'
            }
        ];

        // Mock data for courses
        this.courses = [
            {
                id: 1,
                title: 'Sustainable Farming Mastery',
                description: 'Master organic farming, crop rotation, soil health, and water conservation',
                category: 'organic',
                level: 'beginner',
                duration: '6 weeks',
                rating: 4.8,
                reviews: 234,
                price: 1499,
                originalPrice: 2999,
                features: ['25 Video Lessons', 'Downloadable Resources', 'Certificate', 'Mobile Access'],
                topics: ['Organic Farming', 'Crop Rotation', 'Soil Health', 'Water Conservation'],
                imageUrl: '../assets/images/sustainable-farming-course.jpg',
                progress: 0
            }
        ];
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabName = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.showEducationTab(tabName);
            });
        });

        // Video filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.filterVideos(filter);
            });
        });

        // Gallery filters
        document.querySelectorAll('.gallery-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.filterGallery(filter);
            });
        });

        // Course enrollment
        document.querySelectorAll('.course-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.enrollInCourse(e.target.closest('.course-card'));
            });
        });
    }

    initializeFilters() {
        this.filterVideos('all');
        this.filterGallery('all');
    }

    setupVideoPlayer() {
        const mainVideo = document.getElementById('main-video');
        const videoOverlay = document.getElementById('video-overlay');
        
        if (videoOverlay) {
            videoOverlay.addEventListener('click', () => {
                this.playFeaturedVideo();
            });
        }
    }

    setupPhotoGallery() {
        // Initialize photo gallery with lazy loading
        this.observeImages();
    }

    observeImages() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    showEducationTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.education-tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Show selected tab
        const selectedTab = document.getElementById(`${tabName}-tab`);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }

        // Update navigation
        document.querySelectorAll('.tab-nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        const activeBtn = document.querySelector(`[onclick="showEducationTab('${tabName}')"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        this.currentTab = tabName;

        // Load tab-specific content
        this.loadTabContent(tabName);
    }

    loadTabContent(tabName) {
        switch (tabName) {
            case 'videos':
                this.renderVideos();
                break;
            case 'technology':
                this.renderTechnology();
                break;
            case 'courses':
                this.renderCourses();
                break;
            case 'resources':
                this.renderResources();
                break;
        }
    }

    renderVideos() {
        const videosGrid = document.getElementById('videos-grid');
        if (!videosGrid) return;

        const filteredVideos = this.currentVideoFilter === 'all' 
            ? this.videos 
            : this.videos.filter(video => video.category === this.currentVideoFilter);

        videosGrid.innerHTML = filteredVideos.map(video => `
            <div class="video-card" data-category="${video.category}" onclick="loadVideo('${video.id}', '${video.title}', '${video.description}')">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                    <div class="video-duration">${video.duration}</div>
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-details">
                    <h4>${video.title}</h4>
                    <p>${video.description}</p>
                    <div class="video-meta">
                        <span><i class="fas fa-eye"></i> ${this.formatNumber(video.views)}</span>
                        <span><i class="fas fa-thumbs-up"></i> ${video.likes}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Add animation
        this.animateElements('.video-card');
    }

    renderTechnology() {
        // Technology content is static in HTML, but we can add interactive features
        this.setupTechnologyInteractions();
    }

    renderCourses() {
        const coursesGrid = document.querySelector('.courses-grid');
        if (!coursesGrid) return;

        coursesGrid.innerHTML = this.courses.map(course => `
            <div class="course-card premium">
                <div class="course-badge">Premium</div>
                <div class="course-image">
                    <img src="${course.imageUrl}" alt="${course.title}" loading="lazy">
                    <div class="course-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${course.progress}%"></div>
                        </div>
                        <span>${course.progress}% Complete</span>
                    </div>
                </div>
                <div class="course-content">
                    <h3>${course.title}</h3>
                    <div class="course-meta">
                        <span class="duration"><i class="fas fa-clock"></i> ${course.duration}</span>
                        <span class="level ${course.level}">${this.capitalize(course.level)}</span>
                        <span class="rating"><i class="fas fa-star"></i> ${course.rating} (${course.reviews})</span>
                    </div>
                    <p>${course.description}</p>
                    
                    <div class="course-features">
                        ${course.features.map(feature => `
                            <div class="feature">
                                <i class="fas fa-check"></i> ${feature}
                            </div>
                        `).join('')}
                    </div>

                    <div class="course-topics">
                        ${course.topics.map(topic => `
                            <span class="topic-tag">${topic}</span>
                        `).join('')}
                    </div>
                    
                    <div class="course-price">
                        <span class="original-price">₹${this.formatNumber(course.originalPrice)}</span>
                        <span class="current-price">₹${this.formatNumber(course.price)}</span>
                    </div>
                    
                    <button class="btn btn-primary course-btn" data-course-id="${course.id}">
                        <i class="fas fa-play"></i> Start Learning
                    </button>
                </div>
            </div>
        `).join('');

        // Add animation
        this.animateElements('.course-card');
    }

    renderResources() {
        // Resources content can be dynamically loaded here
        console.log('Loading resources...');
    }

    filterVideos(category) {
        this.currentVideoFilter = category;
        
        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[onclick="filterVideos('${category}')"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Filter and render videos
        this.renderVideos();
    }

    filterGallery(category) {
        this.currentGalleryFilter = category;
        
        // Update filter buttons
        document.querySelectorAll('.gallery-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[onclick="filterGallery('${category}')"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Filter photos
        const photoItems = document.querySelectorAll('.photo-item');
        photoItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.5s ease';
            } else {
                item.style.display = 'none';
            }
        });
    }

    loadVideo(videoId, title, description) {
        const video = this.videos.find(v => v.id == videoId);
        if (!video) return;

        const mainVideo = document.getElementById('main-video');
        const videoTitle = document.getElementById('video-title');
        const videoDescription = document.getElementById('video-description');
        const videoOverlay = document.getElementById('video-overlay');

        if (mainVideo) {
            mainVideo.src = video.videoUrl;
            mainVideo.poster = video.thumbnail;
        }

        if (videoTitle) videoTitle.textContent = title;
        if (videoDescription) videoDescription.textContent = description;
        if (videoOverlay) videoOverlay.style.display = 'flex';

        // Scroll to video player
        document.querySelector('.featured-video-section').scrollIntoView({
            behavior: 'smooth'
        });
    }

    playFeaturedVideo() {
        const mainVideo = document.getElementById('main-video');
        const videoOverlay = document.getElementById('video-overlay');

        if (mainVideo && videoOverlay) {
            mainVideo.play();
            videoOverlay.style.display = 'none';
        }
    }

    openPhotoModal(imageSrc, title = '', description = '') {
        const modal = document.getElementById('photo-modal');
        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');

        if (modal && modalImage) {
            modalImage.src = imageSrc;
            if (modalTitle) modalTitle.textContent = title;
            if (modalDescription) modalDescription.textContent = description;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    closePhotoModal() {
        const modal = document.getElementById('photo-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    setupTechnologyInteractions() {
        document.querySelectorAll('.tech-video-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const techType = e.target.closest('[onclick]').getAttribute('onclick').match(/'([^']+)'/)[1];
                this.playTechVideo(techType);
            });
        });

        document.querySelectorAll('[onclick^="showTechDetails"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const techType = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.showTechDetails(techType);
            });
        });
    }

    playTechVideo(techType) {
        // Create and show video modal
        const videoUrls = {
            'precision-farming': '../assets/videos/precision-farming.mp4',
            'iot-farming': '../assets/videos/iot-farming.mp4'
        };

        if (videoUrls[techType]) {
            this.createVideoModal(videoUrls[techType]);
        }
    }

    createVideoModal(videoUrl) {
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="video-modal-content">
                <span class="video-modal-close">&times;</span>
                <video controls autoplay>
                    <source src="${videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Close modal functionality
        const closeBtn = modal.querySelector('.video-modal-close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            }
        });
    }

    showTechDetails(techType) {
        const techDetails = {
            'precision': {
                title: 'Precision Agriculture Details',
                content: 'Precision agriculture uses GPS, sensors, and data analytics to optimize farming practices...'
            },
            'iot': {
                title: 'IoT Smart Farming Details',
                content: 'Internet of Things (IoT) in farming involves connected sensors and devices...'
            }
        };

        if (techDetails[techType]) {
            this.showInfoModal(techDetails[techType].title, techDetails[techType].content);
        }
    }

    showInfoModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'info-modal';
        modal.innerHTML = `
            <div class="info-modal-content">
                <div class="info-modal-header">
                    <h2>${title}</h2>
                    <span class="info-modal-close">&times;</span>
                </div>
                <div class="info-modal-body">
                    <p>${content}</p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Close modal functionality
        const closeBtn = modal.querySelector('.info-modal-close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            }
        });
    }

    enrollInCourse(courseCard) {
        const courseId = courseCard.querySelector('.course-btn').getAttribute('data-course-id');
        const course = this.courses.find(c => c.id == courseId);
        
        if (course) {
            // Show enrollment confirmation
            this.showEnrollmentModal(course);
        }
    }

    showEnrollmentModal(course) {
        const modal = document.createElement('div');
        modal.className = 'enrollment-modal';
        modal.innerHTML = `
            <div class="enrollment-modal-content">
                <div class="enrollment-header">
                    <h2>Enroll in Course</h2>
                    <span class="enrollment-close">&times;</span>
                </div>
                <div class="enrollment-body">
                    <h3>${course.title}</h3>
                    <p>Price: ₹${this.formatNumber(course.price)}</p>
                    <p>Duration: ${course.duration}</p>
                    <div class="enrollment-actions">
                        <button class="btn btn-secondary" onclick="this.closest('.enrollment-modal').remove(); document.body.style.overflow = 'auto';">Cancel</button>
                        <button class="btn btn-primary" onclick="educationHub.processEnrollment(${course.id})">Enroll Now</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Close modal functionality
        const closeBtn = modal.querySelector('.enrollment-close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        });
    }

    processEnrollment(courseId) {
        // Simulate enrollment process
        const course = this.courses.find(c => c.id == courseId);
        if (course) {
            course.progress = 0;
            this.showSuccessMessage(`Successfully enrolled in ${course.title}!`);
            
            // Close enrollment modal
            const modal = document.querySelector('.enrollment-modal');
            if (modal) {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            }
            
            // Update course display
            this.renderCourses();
        }
    }

    showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-toast';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(successDiv);

        setTimeout(() => {
            successDiv.classList.add('show');
        }, 100);

        setTimeout(() => {
            successDiv.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(successDiv)) {
                    document.body.removeChild(successDiv);
                }
            }, 300);
        }, 3000);
    }

    animateElements(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.5s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Global functions for HTML onclick handlers
function showEducationTab(tabName) {
    if (window.educationHub) {
        window.educationHub.showEducationTab(tabName);
    }
}

function filterVideos(category) {
    if (window.educationHub) {
        window.educationHub.filterVideos(category);
    }
}

function filterGallery(category) {
    if (window.educationHub) {
        window.educationHub.filterGallery(category);
    }
}

function loadVideo(videoId, title, description) {
    if (window.educationHub) {
        window.educationHub.loadVideo(videoId, title, description);
    }
}

function playFeaturedVideo() {
    if (window.educationHub) {
        window.educationHub.playFeaturedVideo();
    }
}

function openPhotoModal(imageSrc, title) {
    if (window.educationHub) {
        window.educationHub.openPhotoModal(imageSrc, title);
    }
}

function closePhotoModal() {
    if (window.educationHub) {
        window.educationHub.closePhotoModal();
    }
}

function playTechVideo(techType) {
    if (window.educationHub) {
        window.educationHub.playTechVideo(techType);
    }
}

function showTechDetails(techType) {
    if (window.educationHub) {
        window.educationHub.showTechDetails(techType);
    }
}

// Initialize Education Hub when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.educationHub = new EducationHub();
});

// Handle modal close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals
        const modals = document.querySelectorAll('.photo-modal, .video-modal, .info-modal, .enrollment-modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block' || modal.style.display === '') {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            }
        });
    }
});