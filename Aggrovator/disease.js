
// Disease Detection JavaScript
class DiseaseDetection {
    constructor() {
        this.currentImage = null;
        this.analysisResults = null;
        this.analysisHistory = [];
        this.isAnalyzing = false;
        this.diseaseDatabase = this.initializeDiseaseDatabase();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadAnalysisHistory();
        this.setupCamera();
        this.createSampleImages();
    }

    initializeDiseaseDatabase() {
        return {
            'tomato-blight': {
                name: 'Tomato Late Blight',
                confidence: 92,
                severity: 'high',
                crop: 'Tomato',
                description: 'Late blight is a devastating disease caused by Phytophthora infestans that affects tomatoes and potatoes. It can destroy entire crops within days under favorable conditions.',
                symptoms: ['Dark water-soaked spots on leaves', 'White fuzzy growth on leaf undersides', 'Brown lesions on stems', 'Dark spots on fruits', 'Rapid plant death'],
                causes: ['High humidity (>90%)', 'Cool temperatures (15-20°C)', 'Poor air circulation', 'Overhead watering', 'Infected plant debris'],
                treatment: {
                    immediate: [
                        {
                            step: 1,
                            title: 'Remove Infected Parts',
                            description: 'Immediately remove and destroy all affected leaves, stems, and fruits. Cut at least 6 inches below visible symptoms. Do not compost infected material.',
                            materials: ['Sharp pruning shears', 'Plastic bags', '70% alcohol for sterilization']
                        },
                        {
                            step: 2,
                            title: 'Apply Copper Fungicide',
                            description: 'Spray with copper-based fungicide (Bordeaux mixture) covering all plant surfaces. Apply in early morning or evening to avoid leaf burn.',
                            materials: ['Copper sulfate fungicide', 'Garden sprayer', 'Protective gear', 'Sticker-spreader']
                        },
                        {
                            step: 3,
                            title: 'Improve Air Circulation',
                            description: 'Increase spacing between plants and remove lower branches to improve airflow. This reduces humidity around plants.',
                            materials: ['Pruning shears', 'Plant stakes', 'Ties']
                        }
                    ],
                    organic: [
                        {
                            step: 1,
                            title: 'Neem Oil Treatment',
                            description: 'Apply neem oil spray (2-3 ml per liter) in evening hours. Neem oil has antifungal properties and boosts plant immunity.',
                            materials: ['Pure neem oil', 'Water', 'Liquid soap', 'Sprayer']
                        },
                        {
                            step: 2,
                            title: 'Baking Soda Solution',
                            description: 'Mix 5g baking soda + 2ml liquid soap in 1 liter water. Spray weekly as preventive measure.',
                            materials: ['Baking soda', 'Liquid soap', 'Water', 'pH meter']
                        },
                        {
                            step: 3,
                            title: 'Compost Tea Application',
                            description: 'Apply well-aged compost tea to boost beneficial microorganisms that compete with pathogens.',
                            materials: ['Aged compost', 'Water', 'Cloth strainer', 'Molasses']
                        }
                    ],
                    preventive: [
                        {
                            step: 1,
                            title: 'Resistant Varieties',
                            description: 'Plant late blight resistant tomato varieties like Mountain Fresh Plus, Iron Lady, or Defiant PhR.',
                            materials: ['Resistant seeds/seedlings', 'Variety selection guide']
                        },
                        {
                            step: 2,
                            title: 'Proper Watering',
                            description: 'Water at soil level using drip irrigation. Avoid wetting leaves. Water early morning so plants dry quickly.',
                            materials: ['Drip irrigation system', 'Mulch', 'Timer']
                        },
                        {
                            step: 3,
                            title: 'Crop Rotation',
                            description: 'Rotate with non-solanaceous crops for 3-4 years. Avoid planting tomatoes, potatoes, peppers in same area.',
                            materials: ['Crop rotation plan', 'Alternative crop seeds']
                        }
                    ]
                }
            },
            'wheat-rust': {
                name: 'Wheat Leaf Rust',
                confidence: 88,
                severity: 'medium',
                crop: 'Wheat',
                description: 'Wheat leaf rust is caused by Puccinia triticina and is one of the most common wheat diseases worldwide. It can cause significant yield losses if not managed properly.',
                symptoms: ['Orange-red pustules on leaves', 'Yellow halos around pustules', 'Premature leaf senescence', 'Reduced grain filling', 'Weakened stems'],
                causes: ['Moderate temperatures (15-25°C)', 'High humidity', 'Dense plant canopy', 'Susceptible varieties', 'Wind-borne spores'],
                treatment: {
                    immediate: [
                        {
                            step: 1,
                            title: 'Fungicide Application',
                            description: 'Apply triazole-based fungicides like Propiconazole or Tebuconazole at first sign of infection.',
                            materials: ['Triazole fungicide', 'Boom sprayer', 'Adjuvant', 'Weather monitoring']
                        },
                        {
                            step: 2,
                            title: 'Monitor Weather',
                            description: 'Track weather conditions and apply preventive sprays before favorable conditions for rust development.',
                            materials: ['Weather station', 'Disease forecasting app', 'Spray schedule']
                        }
                    ],
                    organic: [
                        {
                            step: 1,
                            title: 'Sulfur Dust',
                            description: 'Apply sulfur dust early morning when dew is present. Sulfur has fungicidal properties against rust.',
                            materials: ['Sulfur dust', 'Dust applicator', 'Protective mask']
                        },
                        {
                            step: 2,
                            title: 'Potassium Bicarbonate',
                            description: 'Spray 0.5% potassium bicarbonate solution weekly as organic fungicide.',
                            materials: ['Potassium bicarbonate', 'Water', 'Sprayer']
                        }
                    ],
                    preventive: [
                        {
                            step: 1,
                            title: 'Resistant Varieties',
                            description: 'Plant rust-resistant wheat varieties suitable for your region.',
                            materials: ['Resistant wheat seeds', 'Variety recommendations']
                        },
                        {
                            step: 2,
                            title: 'Balanced Nutrition',
                            description: 'Maintain proper N-P-K balance. Avoid excessive nitrogen which increases susceptibility.',
                            materials: ['Soil test kit', 'Balanced fertilizer', 'Micronutrients']
                        }
                    ]
                }
            },
            'rice-blast': {
                name: 'Rice Blast Disease',
                confidence: 85,
                severity: 'high',
                crop: 'Rice',
                description: 'Rice blast caused by Magnaporthe oryzae is one of the most destructive rice diseases. It can affect leaves, nodes, and panicles causing significant yield losses.',
                symptoms: ['Diamond-shaped lesions with gray centers', 'Brown borders around lesions', 'Node infection causing lodging', 'Neck blast on panicles', 'Reduced grain filling'],
                causes: ['High nitrogen levels', 'Prolonged leaf wetness', 'Dense planting', 'Susceptible varieties', 'Temperature 25-28°C'],
                treatment: {
                    immediate: [
                        {
                            step: 1,
                            title: 'Systemic Fungicide',
                            description: 'Apply Tricyclazole or Carbendazim at 0.1% concentration at early infection stage.',
                            materials: ['Systemic fungicide', 'Knapsack sprayer', 'Sticker', 'Measuring cup']
                        },
                        {
                            step: 2,
                            title: 'Water Management',
                            description: 'Drain field for 2-3 days to reduce humidity and spore germination.',
                            materials: ['Drainage system', 'Water level monitoring']
                        }
                    ],
                    organic: [
                        {
                            step: 1,
                            title: 'Pseudomonas Treatment',
                            description: 'Apply Pseudomonas fluorescens as biocontrol agent at 10g per liter.',
                            materials: ['Pseudomonas culture', 'Jaggery', 'Water', 'Sprayer']
                        }
                    ],
                    preventive: [
                        {
                            step: 1,
                            title: 'Resistant Varieties',
                            description: 'Grow blast-resistant varieties like Pusa Basmati 1121, PR-106.',
                            materials: ['Resistant rice seeds']
                        }
                    ]
                }
            },
            'corn-borer': {
                name: 'Corn Borer Infestation',
                confidence: 90,
                severity: 'medium',
                crop: 'Corn/Maize',
                description: 'European corn borer (Ostrinia nubilalis) is a major pest of corn that tunnels into stalks, ears, and other plant parts causing structural damage and yield loss.',
                symptoms: ['Small holes in leaves', 'Sawdust-like frass', 'Tunnels in stalks', 'Broken or lodged plants', 'Damaged ears'],
                causes: ['Warm weather', 'Dense plantings', 'Late planting', 'Continuous corn cropping', 'Lack of natural enemies'],
                treatment: {
                    immediate: [
                        {
                            step: 1,
                            title: 'Bt Spray Application',
                            description: 'Apply Bacillus thuringiensis (Bt) spray targeting young larvae before they bore into stalks.',
                            materials: ['Bt insecticide', 'Sprayer', 'Surfactant', 'Timing chart']
                        },
                        {
                            step: 2,
                            title: 'Mechanical Control',
                            description: 'Remove and destroy infested plant parts. Cut stalks below soil level after harvest.',
                            materials: ['Sharp knife', 'Collection bags', 'Disposal area']
                        }
                    ],
                    organic: [
                        {
                            step: 1,
                            title: 'Trichogramma Release',
                            description: 'Release Trichogramma wasps (egg parasitoids) at 1 lakh per hectare.',
                            materials: ['Trichogramma cards', 'Release schedule', 'Weather monitoring']
                        },
                        {
                            step: 2,
                            title: 'Neem-based Pesticide',
                            description: 'Apply neem-based insecticide at 0.5% concentration targeting egg and early larval stages.',
                            materials: ['Neem oil', 'Azadirachtin', 'Emulsifier', 'Sprayer']
                        }
                    ],
                    preventive: [
                        {
                            step: 1,
                            title: 'Bt Corn Varieties',
                            description: 'Plant Bt corn varieties that produce toxins harmful to corn borers.',
                            materials: ['Bt corn seeds', 'Refuge planning']
                        },
                        {
                            step: 2,
                            title: 'Crop Rotation',
                            description: 'Rotate with non-host crops like soybeans to break pest cycle.',
                            materials: ['Alternative crop seeds', 'Rotation plan']
                        }
                    ]
                }
            }
        };
    }

    createSampleImages() {
        // Create placeholder images for samples if they don't exist
        const sampleImages = document.querySelectorAll('.sample-item img');
        sampleImages.forEach((img, index) => {
            img.onerror = () => {
                // Create a colored placeholder if image doesn't exist
                const canvas = document.createElement('canvas');
                canvas.width = 200;
                canvas.height = 150;
                const ctx = canvas.getContext('2d');
                
                const colors = ['#4CAF50', '#FF9800', '#2196F3', '#9C27B0'];
                ctx.fillStyle = colors[index % colors.length];
                ctx.fillRect(0, 0, 200, 150);
                
                ctx.fillStyle = 'white';
                ctx.font = '16px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Sample Disease', 100, 75);
                
                img.src = canvas.toDataURL();
            };
        });
    }

    setupEventListeners() {
        // File upload
        const fileInput = document.getElementById('image-upload');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                if (e.target.files[0]) {
                    this.handleFileUpload(e.target.files[0]);
                }
            });
        }

        // Camera capture
        const cameraInput = document.getElementById('camera-capture');
        if (cameraInput) {
            cameraInput.addEventListener('change', (e) => {
                if (e.target.files[0]) {
                    this.handleFileUpload(e.target.files[0]);
                }
            });
        }

        // Analyze button
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => {
                this.analyzeImage();
            });
        }

        // Treatment tabs
        document.querySelectorAll('.treatment-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchTreatmentTab(e.target.getAttribute('data-tab'));
            });
        });

        // Action buttons
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.getAttribute('data-action');
                this.handleAction(action);
            });
        });

        // History items
        document.addEventListener('click', (e) => {
            if (e.target.closest('.history-item')) {
                const historyId = e.target.closest('.history-item').getAttribute('data-history-id');
                this.viewHistoryItem(historyId);
            }
        });
    }

    setupCamera() {
        // Check if camera is available
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            this.cameraAvailable = true;
        } else {
            // Hide camera option if not available
            const cameraMethod = document.querySelector('.camera-method');
            if (cameraMethod) {
                cameraMethod.style.opacity = '0.5';
                cameraMethod.style.cursor = 'not-allowed';
            }
        }
    }

    handleFileUpload(file) {
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            this.showError('Please select a valid image file (JPG, PNG, etc.)');
            return;
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            this.showError('Image file is too large. Please select an image smaller than 10MB.');
            return;
        }

        this.currentImage = file;
        this.displayImagePreview(file);
    }

    displayImagePreview(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const previewSection = document.getElementById('image-preview-section');
            const previewImage = document.getElementById('preview-image');
            const imageDetails = document.getElementById('image-details');

            if (previewImage) {
                previewImage.src = e.target.result;
                previewImage.onload = () => {
                    // Get image dimensions
                    const img = new Image();
                    img.onload = () => {
                        this.updateImageDetails(file, img.width, img.height);
                    };
                    img.src = e.target.result;
                };
            }

            // Show preview section
            if (previewSection) {
                previewSection.classList.add('active');
                previewSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Enable analyze button
            const analyzeBtn = document.getElementById('analyze-btn');
            if (analyzeBtn) {
                analyzeBtn.disabled = false;
            }
        };

        reader.readAsDataURL(file);
    }

    updateImageDetails(file, width, height) {
        const imageDetails = document.getElementById('image-details');
        if (!imageDetails) return;

        const fileSize = this.formatFileSize(file.size);
        const imageType = file.type;
        const fileName = file.name;
        const resolution = `${width} × ${height}`;

        imageDetails.innerHTML = `
            <div class="detail-row">
                <span class="detail-label">File Name:</span>
                <span class="detail-value">${fileName}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">File Size:</span>
                <span class="detail-value">${fileSize}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Resolution:</span>
                <span class="detail-value">${resolution}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">File Type:</span>
                <span class="detail-value">${imageType}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Upload Time:</span>
                <span class="detail-value">${new Date().toLocaleString()}</span>
            </div>
        `;
    }

    async analyzeImage() {
        if (!this.currentImage || this.isAnalyzing) return;

        this.isAnalyzing = true;
        this.showAnalysisLoading();

        try {
            // Simulate AI analysis
            const results = await this.performAIAnalysis(this.currentImage);
            
            this.analysisResults = results;
            this.displayAnalysisResults(results);
            this.saveToHistory(results);
            
        } catch (error) {
            console.error('Analysis error:', error);
            this.showError('Analysis failed. Please try again.');
        } finally {
            this.isAnalyzing = false;
            this.hideAnalysisLoading();
        }
    }

    async performAIAnalysis(imageFile) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 3000));

        // For demo, randomly select a disease or return healthy
        const diseaseKeys = Object.keys(this.diseaseDatabase);
        const randomDisease = diseaseKeys[Math.floor(Math.random() * diseaseKeys.length)];
        const isHealthy = Math.random() < 0.3; // 30% chance of healthy

        if (isHealthy) {
            return {
                status: 'healthy',
                confidence: 95,
                diseases: [],
                timestamp: new Date(),
                imageUrl: URL.createObjectURL(imageFile),
                recommendations: {
                    immediate: 'Your crop appears healthy! Continue with regular care.',
                    shortTerm: 'Monitor regularly for any changes in plant health.',
                    longTerm: 'Maintain good agricultural practices for continued health.',
                    prevention: [
                        'Regular monitoring and inspection',
                        'Proper nutrition and watering',
                        'Good field hygiene practices',
                        'Preventive treatments during high-risk periods'
                    ]
                }
            };
        }

        const primaryDisease = this.diseaseDatabase[randomDisease];
        const secondaryDiseases = this.generateSecondaryDiseases(randomDisease);

        return {
            status: 'diseased',
            confidence: primaryDisease.confidence,
            diseases: [primaryDisease, ...secondaryDiseases],
            timestamp: new Date(),
            imageUrl: URL.createObjectURL(imageFile),
            recommendations: this.generateRecommendations(primaryDisease)
        };
    }

    generateSecondaryDiseases(excludeKey) {
        const allDiseases = Object.keys(this.diseaseDatabase).filter(key => key !== excludeKey);
        const numSecondary = Math.floor(Math.random() * 2); // 0-1 secondary diseases
        
        return allDiseases.slice(0, numSecondary).map(key => {
            const disease = { ...this.diseaseDatabase[key] };
            disease.confidence = Math.floor(Math.random() * 30) + 10; // 10-40% confidence
            return disease;
        });
    }

    generateRecommendations(primaryDisease) {
        return {
            immediate: `Immediate action required for ${primaryDisease.name}. Follow the treatment steps below.`,
            shortTerm: 'Monitor plant closely for 1-2 weeks and reapply treatment if necessary.',
            longTerm: 'Implement preventive measures to avoid future occurrences.',
            prevention: [
                'Use disease-resistant varieties when available',
                'Maintain proper plant spacing for air circulation',
                'Practice crop rotation to break disease cycles',
                'Apply preventive treatments during high-risk periods',
                'Monitor weather conditions and adjust care accordingly'
            ]
        };
    }

    displayAnalysisResults(results) {
        const resultsSection = document.getElementById('analysis-results');
        const statusElement = document.getElementById('analysis-status');

        if (!resultsSection) return;

        // Update analysis status
        if (statusElement) {
            statusElement.className = `analysis-status ${results.status}`;
            statusElement.innerHTML = `
                <i class="fas fa-${results.status === 'healthy' ? 'check-circle' : 'exclamation-triangle'}"></i>
                ${results.status === 'healthy' ? 'Plant appears healthy!' : 'Disease detected - Action required'}
            `;
        }

        if (results.status === 'healthy') {
            this.renderHealthyResults(results);
        } else {
            // Display disease detection results
            this.renderDiseaseResults(results.diseases);
            // Display treatment recommendations
            this.renderTreatmentRecommendations(results.diseases[0]);
        }

        // Display prevention tips
        this.renderPreventionTips(results.diseases[0] || null);

        // Show results section
        resultsSection.classList.add('active');
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    renderHealthyResults(results) {
        const detectionResults = document.getElementById('detection-results');
        if (!detectionResults) return;

        detectionResults.innerHTML = `
            <div class="disease-result healthy-result">
                <div class="disease-header">
                    <span class="disease-name">✅ Healthy Crop Detected</span>
                    <span class="confidence-score">${results.confidence}% confidence</span>
                </div>
                <p class="disease-description">
                    Great news! Your crop appears to be healthy with no signs of disease or pest damage. 
                    Continue with your current care routine and regular monitoring.
                </p>
                <div class="disease-symptoms">
                    <h4>Positive Indicators:</h4>
                    <div class="symptoms-list">
                        <span class="symptom-tag healthy">Healthy leaf color</span>
                        <span class="symptom-tag healthy">No visible lesions</span>
                        <span class="symptom-tag healthy">Good plant structure</span>
                        <span class="symptom-tag healthy">No pest damage</span>
                    </div>
                </div>
            </div>
        `;

        // Hide treatment section for healthy plants
        const treatmentSection = document.querySelector('.treatment-section');
        if (treatmentSection) {
            treatmentSection.style.display = 'none';
        }
    }

    renderDiseaseResults(diseases) {
        const detectionResults = document.getElementById('detection-results');
        if (!detectionResults) return;

        // Show treatment section
        const treatmentSection = document.querySelector('.treatment-section');
        if (treatmentSection) {
            treatmentSection.style.display = 'block';
        }

        detectionResults.innerHTML = diseases.map((disease, index) => `
            <div class="disease-result ${index === 0 ? 'primary' : 'secondary'}">
                <div class="disease-header">
                    <span class="disease-name">${disease.name}</span>
                    <span class="confidence-score">${disease.confidence}% confidence</span>
                </div>
                <p class="disease-description">${disease.description}</p>
                <div class="disease-symptoms">
                    <h4>Symptoms to Look For:</h4>
                    <div class="symptoms-list">
                        ${disease.symptoms.map(symptom => `<span class="symptom-tag">${symptom}</span>`).join('')}
                    </div>
                </div>
                <div class="disease-symptoms">
                    <h4>Common Causes:</h4>
                    <div class="symptoms-list">
                        ${disease.causes.map(cause => `<span class="symptom-tag cause-tag">${cause}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderTreatmentRecommendations(disease) {
        if (!disease || !disease.treatment) return;

        const treatmentTypes = ['immediate', 'organic', 'preventive'];
        
        treatmentTypes.forEach(type => {
            const contentDiv = document.getElementById(`${type}-treatment`);
            if (contentDiv && disease.treatment[type]) {
                contentDiv.innerHTML = `
                    <div class="treatment-steps">
                        ${disease.treatment[type].map(step => `
                            <div class="treatment-step">
                                <div class="step-number">${step.step}</div>
                                <h4 class="step-title">${step.title}</h4>
                                <p class="step-description">${step.description}</p>
                                ${step.materials ? `
                                    <div class="step-materials">
                                        <h5>Required Materials:</h5>
                                        <div class="materials-list">
                                            ${step.materials.map(material => `<span class="material-tag">${material}</span>`).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
            }
        });

        // Set default active tab
        this.switchTreatmentTab('immediate');
    }

    renderPreventionTips(disease) {
        const preventionTips = document.getElementById('prevention-tips');
        if (!preventionTips) return;

        const tips = disease ? [
            {
                icon: 'seedling',
                title: 'Resistant Varieties',
                description: `Choose ${disease.crop} varieties that are resistant to ${disease.name} and other common diseases in your area.`
            },
            {
                icon: 'tint',
                title: 'Water Management',
                description: 'Proper irrigation timing and methods can significantly reduce disease pressure and create unfavorable conditions for pathogens.'
            },
            {
                icon: 'shield-alt',
                title: 'Preventive Treatments',
                description: 'Apply preventive fungicides or biocontrol agents during high-risk periods based on weather conditions.'
            },
            {
                icon: 'recycle',
                title: 'Crop Rotation',
                description: 'Rotate with non-host crops to break disease cycles and reduce pathogen buildup in soil.'
            },
            {
                icon: 'eye',
                title: 'Regular Monitoring',
                description: 'Inspect crops weekly for early signs of disease. Early detection allows for more effective treatment.'
            },
            {
                icon: 'leaf',
                title: 'Field Hygiene',
                description: 'Remove crop debris, weeds, and volunteer plants that can harbor pathogens between seasons.'
            }
        ] : [
            {
                icon: 'seedling',
                title: 'Healthy Soil',
                description: 'Maintain soil health with organic matter and proper pH for strong, disease-resistant plants.'
            },
            {
                icon: 'tint',
                title: 'Smart Watering',
                description: 'Water at soil level early in the morning to reduce leaf wetness and fungal growth.'
            },
            {
                icon: 'shield-alt',
                title: 'Preventive Care',
                description: 'Regular application of organic treatments can boost plant immunity and prevent diseases.'
            },
            {
                icon: 'recycle',
                title: 'Crop Diversity',
                description: 'Grow diverse crops and rotate regularly to maintain ecosystem balance and reduce pest pressure.'
            }
        ];

        preventionTips.innerHTML = tips.map(tip => `
            <div class="prevention-tip">
                <div class="tip-icon">
                    <i class="fas fa-${tip.icon}"></i>
                </div>
                <h4 class="tip-title">${tip.title}</h4>
                <p class="tip-description">${tip.description}</p>
            </div>
        `).join('');
    }

    switchTreatmentTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.treatment-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }

        // Update tab content
        document.querySelectorAll('.treatment-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const activeContent = document.getElementById(`${tabName}-treatment`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }

    handleAction(action) {
        switch (action) {
            case 'save-report':
                this.saveReport();
                break;
            case 'share-results':
                this.shareResults();
                break;
            case 'consult-expert':
                this.consultExpert();
                break;
            case 'new-analysis':
                this.startNewAnalysis();
                break;
        }
    }

    saveReport() {
        if (!this.analysisResults) return;

        const report = {
            timestamp: this.analysisResults.timestamp,
            status: this.analysisResults.status,
            confidence: this.analysisResults.confidence,
            diseases: this.analysisResults.diseases,
            recommendations: this.analysisResults.recommendations
        };

        const reportText = this.generateReportText(report);
        const blob = new Blob([reportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `crop-analysis-report-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showSuccess('Analysis report saved successfully!');
    }

    generateReportText(report) {
        let text = `CROP DISEASE ANALYSIS REPORT\n`;
        text += `Generated on: ${report.timestamp.toLocaleString()}\n`;
        text += `Status: ${report.status.toUpperCase()}\n`;
        text += `Overall Confidence: ${report.confidence}%\n\n`;

        if (report.diseases && report.diseases.length > 0) {
            text += `DETECTED DISEASES:\n`;
            report.diseases.forEach((disease, index) => {
                text += `\n${index + 1}. ${disease.name} (${disease.confidence}% confidence)\n`;
                text += `   Description: ${disease.description}\n`;
                text += `   Symptoms: ${disease.symptoms.join(', ')}\n`;
                text += `   Causes: ${disease.causes.join(', ')}\n`;
            });
        }

        if (report.recommendations) {
            text += `\nRECOMMendations:\n`;
            text += `Immediate: ${report.recommendations.immediate}\n`;
            text += `Short-term: ${report.recommendations.shortTerm}\n`;
            text += `Long-term: ${report.recommendations.longTerm}\n`;
            
            if (report.recommendations.prevention) {
                text += `\nPrevention Tips:\n`;
                report.recommendations.prevention.forEach((tip, index) => {
                    text += `${index + 1}. ${tip}\n`;
                });
            }
        }

        text += `\n---\nGenerated by Aggrovator Disease Detection System`;
        return text;
    }

    shareResults() {
        if (!this.analysisResults) return;

        const shareText = this.analysisResults.status === 'healthy' 
            ? `Great news! My crop analysis shows healthy plants with ${this.analysisResults.confidence}% confidence. 🌱✅`
            : `Disease detected: ${this.analysisResults.diseases[0].name} with ${this.analysisResults.diseases[0].confidence}% confidence. Getting treatment recommendations from Aggrovator! 🌾⚠️`;

        if (navigator.share) {
            navigator.share({
                title: 'Crop Disease Analysis Results',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                this.showSuccess('Results copied to clipboard!');
            });
        }
    }

    consultExpert() {
        // Simulate expert consultation
        const message = this.analysisResults 
            ? `I need expert advice about ${this.analysisResults.diseases[0]?.name || 'my crop health'}. The AI analysis shows ${this.analysisResults.confidence}% confidence. Can you provide additional guidance?`
            : 'I need expert consultation about my crop health.';

        // In a real app, this would open a chat or contact form
        alert(`Expert consultation feature would open here with pre-filled message:\n\n"${message}"\n\nThis would connect you with agricultural experts for personalized advice.`);
    }

    startNewAnalysis() {
        // Reset the form
        this.currentImage = null;
        this.analysisResults = null;
        
        // Hide sections
        document.getElementById('image-preview-section')?.classList.remove('active');
        document.getElementById('analysis-results')?.classList.remove('active');
        
        // Reset form elements
        const fileInput = document.getElementById('image-upload');
        const cameraInput = document.getElementById('camera-capture');
        const analyzeBtn = document.getElementById('analyze-btn');
        
        if (fileInput) fileInput.value = '';
        if (cameraInput) cameraInput.value = '';
        if (analyzeBtn) analyzeBtn.disabled = true;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        this.showSuccess('Ready for new analysis!');
    }

    saveToHistory(results) {
        const historyItem = {
            id: Date.now(),
            timestamp: results.timestamp,
            imageUrl: results.imageUrl,
            status: results.status,
            primaryDisease: results.diseases.length > 0 ? results.diseases[0].name : 'Healthy',
            confidence: results.confidence,
            results: results
        };

        this.analysisHistory.unshift(historyItem);
        
        // Keep only last 20 items
        if (this.analysisHistory.length > 20) {
            this.analysisHistory = this.analysisHistory.slice(0, 20);
        }

        // Save to localStorage
        try {
            localStorage.setItem('disease-analysis-history', JSON.stringify(this.analysisHistory));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
        
        // Update history display
        this.renderAnalysisHistory();
    }

    loadAnalysisHistory() {
        try {
            const saved = localStorage.getItem('disease-analysis-history');
            if (saved) {
                this.analysisHistory = JSON.parse(saved);
                this.renderAnalysisHistory();
            }
        } catch (e) {
            console.warn('Could not load from localStorage:', e);
            this.analysisHistory = [];
        }
    }

    renderAnalysisHistory() {
        const historyGrid = document.getElementById('history-grid');
        if (!historyGrid) return;

        if (this.analysisHistory.length === 0) {
            historyGrid.innerHTML = `
                <div class="no-history">
                    <i class="fas fa-history"></i>
                    <h3>No Analysis History</h3>
                    <p>Upload an image to get started with disease detection!</p>
                </div>
            `;
            return;
        }

        historyGrid.innerHTML = this.analysisHistory.map(item => `
            <div class="history-item" data-history-id="${item.id}">
                <div class="history-header">
                    <span class="history-date">${new Date(item.timestamp).toLocaleDateString()}</span>
                    <span class="history-status ${item.status}">${item.status}</span>
                </div>
                <img src="${item.imageUrl}" alt="Analysis" class="history-image" loading="lazy">
                <div class="history-result">${item.primaryDisease}</div>
                <div class="history-confidence">${item.confidence}% confidence</div>
            </div>
        `).join('');
    }

    viewHistoryItem(historyId) {
        const item = this.analysisHistory.find(h => h.id == historyId);
        if (!item) return;

        // Load the historical analysis
        this.analysisResults = item.results;
        this.displayAnalysisResults(item.results);
        
        // Update preview
        const previewImage = document.getElementById('preview-image');
        if (previewImage) {
            previewImage.src = item.imageUrl;
        }
        
        const previewSection = document.getElementById('image-preview-section');
        if (previewSection) {
            previewSection.classList.add('active');
        }

        // Scroll to results
        const resultsSection = document.getElementById('analysis-results');
        if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    showAnalysisLoading() {
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) {
            analyzeBtn.classList.add('loading');
            analyzeBtn.disabled = true;
            analyzeBtn.innerHTML = '<i class="fas fa-spinner loading-spinner"></i> Analyzing Image...';
        }

        // Show loading overlay on preview
        const previewContainer = document.querySelector('.preview-container');
        if (previewContainer && !previewContainer.querySelector('.loading-overlay')) {
            const loadingOverlay = document.createElement('div');
            loadingOverlay.className = 'loading-overlay';
            loadingOverlay.innerHTML = `
                <div style="text-align: center; color: #2E7D32;">
                    <div class="loading-spinner" style="margin-bottom: 1rem;"></div>
                    <p>AI is analyzing your crop image...</p>
                    <small>This may take a few seconds</small>
                </div>
            `;
            previewContainer.appendChild(loadingOverlay);
        }
    }

    hideAnalysisLoading() {
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) {
            analyzeBtn.classList.remove('loading');
            analyzeBtn.disabled = false;
            analyzeBtn.innerHTML = '<i class="fas fa-search"></i> Analyze Image';
        }

        // Remove loading overlay
        const loadingOverlay = document.querySelector('.loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.remove();
        }
    }

    // Utility methods
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    showSuccess(message) {
        this.showToast(message, 'success');
    }

    showError(message) {
        this.showToast(message, 'error');
    }

    showToast(message, type = 'success') {
        // Remove existing toasts
        document.querySelectorAll('.toast').forEach(toast => toast.remove());

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 4000);
    }
}

// Global functions for HTML onclick handlers
function analyzeImage() {
    if (window.diseaseDetection) {
        window.diseaseDetection.analyzeImage();
    }
}

function retakePhoto() {
    if (window.diseaseDetection) {
        window.diseaseDetection.startNewAnalysis();
    }
}

function removeImage() {
    if (window.diseaseDetection) {
        window.diseaseDetection.startNewAnalysis();
    }
}

function loadSampleImage(diseaseType) {
    if (window.diseaseDetection) {
        // Create a sample file for the selected disease type
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 300;
        const ctx = canvas.getContext('2d');
        
        // Create a sample disease image
        const colors = {
            'tomato-blight': '#8B4513',
            'wheat-rust': '#FF8C00',
            'rice-blast': '#228B22',
            'corn-borer': '#FFD700'
        };
        
        ctx.fillStyle = colors[diseaseType] || '#4CAF50';
        ctx.fillRect(0, 0, 400, 300);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Sample Disease Image', 200, 150);
        ctx.font = '16px Arial';
        ctx.fillText(diseaseType.replace('-', ' ').toUpperCase(), 200, 180);
        
        canvas.toBlob((blob) => {
            const file = new File([blob], `${diseaseType}-sample.png`, { type: 'image/png' });
            window.diseaseDetection.currentImage = file;
            window.diseaseDetection.displayImagePreview(file);
            
            // Pre-set the analysis results for the sample
            setTimeout(() => {
                window.diseaseDetection.analyzeImage();
            }, 500);
        });
    }
}

// Initialize Disease Detection when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.diseaseDetection = new DiseaseDetection();
});

// Add CSS for toast notifications and additional styles
const additionalCSS = `
/* Toast Notifications */
.toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    max-width: 350px;
    border-left: 4px solid #4CAF50;
}

.toast.show {
    transform: translateX(0);
}

.toast-success {
    border-left-color: #4CAF50;
    color: #2E7D32;
}

.toast-error {
    border-left-color: #f44336;
    color: #d32f2f;
}

.toast i {
    font-size: 1.2rem;
}

/* Healthy result styling */
.disease-result.healthy-result {
    border-left-color: #4CAF50;
    background: linear-gradient(135deg, #e8f5e8, #f1f8e9);
}

.symptom-tag.healthy {
    background: rgba(76, 175, 80, 0.1);
    color: #2E7D32;
}

.symptom-tag.cause-tag {
    background: rgba(255, 152, 0, 0.1);
    color: #F57C00;
}

/* Loading spinner animation */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading-spinner {
    animation: spin 1s linear infinite;
}
`;

// Add the additional CSS to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);