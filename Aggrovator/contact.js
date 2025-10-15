
// Contact Page JavaScript
class ContactManager {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 2;
        this.formData = {};
        this.uploadedFiles = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupFormValidation();
        this.setupFileUpload();
        this.setupCharacterCount();
        this.updateProgress();
        this.loadFAQs();
    }

    setupEventListeners() {
        // Form navigation
        document.querySelectorAll('.next-step').forEach(btn => {
            btn.addEventListener('click', () => this.nextStep());
        });

        document.querySelectorAll('.prev-step').forEach(btn => {
            btn.addEventListener('click', () => this.prevStep());
        });

        // Form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Quick contact buttons
        this.setupQuickContactButtons();

        // FAQ interactions
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => this.toggleFAQ(question));
        });

        // Search functionality
        const faqSearch = document.getElementById('faq-search');
        if (faqSearch) {
            faqSearch.addEventListener('input', (e) => this.searchFAQs(e.target.value));
        }

        // Newsletter signup
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSignup(e));
        }
    }

    setupQuickContactButtons() {
        // Emergency call
        const emergencyBtn = document.querySelector('[onclick="callEmergency()"]');
        if (emergencyBtn) {
            emergencyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.callEmergency();
            });
        }

        // WhatsApp
        const whatsappBtn = document.querySelector('[onclick="openWhatsApp()"]');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openWhatsApp();
            });
        }

        // Video call
        const videoCallBtn = document.querySelector('[onclick="bookVideoCall()"]');
        if (videoCallBtn) {
            videoCallBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.bookVideoCall();
            });
        }

        // Live chat
        const liveChatBtn = document.querySelector('[onclick="openLiveChat()"]');
        if (liveChatBtn) {
            liveChatBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openLiveChat();
            });
        }

        // Expert contact buttons
        document.querySelectorAll('[onclick^="contactExpert"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const expertId = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.contactExpert(expertId);
            });
        });
    }

    setupFormValidation() {
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    setupFileUpload() {
        const fileInput = document.getElementById('attachment');
        const uploadArea = document.getElementById('file-upload-area');
        const fileList = document.getElementById('file-list');

        if (fileInput && uploadArea) {
            // Drag and drop functionality
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.classList.add('drag-over');
            });

            uploadArea.addEventListener('dragleave', () => {
                uploadArea.classList.remove('drag-over');
            });

            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('drag-over');
                const files = Array.from(e.dataTransfer.files);
                this.handleFileSelection(files);
            });

            // File input change
            fileInput.addEventListener('change', (e) => {
                const files = Array.from(e.target.files);
                this.handleFileSelection(files);
            });
        }
    }

    setupCharacterCount() {
        const messageTextarea = document.getElementById('message');
        const charCount = document.getElementById('char-count');

        if (messageTextarea && charCount) {
            messageTextarea.addEventListener('input', () => {
                const count = messageTextarea.value.length;
                charCount.textContent = count;
                
                if (count > 450) {
                    charCount.style.color = '#f44336';
                } else if (count > 400) {
                    charCount.style.color = '#ff9800';
                } else {
                    charCount.style.color = '#666';
                }
            });
        }
    }

    nextStep() {
        if (this.validateCurrentStep()) {
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
                this.showStep(this.currentStep);
                this.updateProgress();
            }
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.showStep(this.currentStep);
            this.updateProgress();
        }
    }

    showStep(stepNumber) {
        // Hide all steps
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });

        // Show current step
        const currentStep = document.getElementById(`step-${stepNumber}`);
        if (currentStep) {
            currentStep.classList.add('active');
        }

        // Update step indicators
        document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
            if (index + 1 <= stepNumber) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            const progress = (this.currentStep / this.totalSteps) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }

    validateCurrentStep() {
        const currentStepElement = document.getElementById(`step-${this.currentStep}`);
        if (!currentStepElement) return false;

        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error
        this.clearFieldError(field);

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            errorMessage = 'This field is required';
            isValid = false;
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
        }

        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                errorMessage = 'Please enter a valid phone number';
                isValid = false;
            }
        }

        // Show error if invalid
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        
        // Insert error message after the input group
        const inputGroup = field.closest('.input-group') || field;
        inputGroup.parentNode.insertBefore(errorElement, inputGroup.nextSibling);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        
        // Remove error message
        const inputGroup = field.closest('.input-group') || field;
        const errorElement = inputGroup.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    handleFileSelection(files) {
        const maxSize = 10 * 1024 * 1024; // 10MB
        const allowedTypes = ['image/', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        files.forEach(file => {
            // Check file size
            if (file.size > maxSize) {
                this.showError(`File "${file.name}" is too large. Maximum size is 10MB.`);
                return;
            }

            // Check file type
            const isAllowed = allowedTypes.some(type => file.type.startsWith(type) || file.type === type);
            if (!isAllowed) {
                this.showError(`File "${file.name}" is not supported. Please upload images, PDF, or DOC files.`);
                return;
            }

            // Add to uploaded files
            this.uploadedFiles.push(file);
            this.renderFileList();
        });
    }

    renderFileList() {
        const fileList = document.getElementById('file-list');
        if (!fileList) return;

        fileList.innerHTML = this.uploadedFiles.map((file, index) => `
            <div class="file-item">
                <span><i class="fas fa-file"></i> ${file.name} (${this.formatFileSize(file.size)})</span>
                <button type="button" class="file-remove" onclick="contactManager.removeFile(${index})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    removeFile(index) {
        this.uploadedFiles.splice(index, 1);
        this.renderFileList();
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    handleFormSubmit(e) {
        e.preventDefault();

        if (!this.validateCurrentStep()) {
            return;
        }

        // Collect form data
        const formData = new FormData(e.target);
        
        // Add uploaded files
        this.uploadedFiles.forEach(file => {
            formData.append('attachments[]', file);
        });

        // Show loading state
        this.showLoadingState();

        // Simulate form submission
        setTimeout(() => {
            this.hideLoadingState();
            this.showSuccessMessage();
            this.resetForm();
        }, 2000);
    }

    showLoadingState() {
        const submitBtn = document.querySelector('.submit-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }
    }

    hideLoadingState() {
        const submitBtn = document.querySelector('.submit-btn');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
    }

    showSuccessMessage() {
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth' });
        }
    }

    resetForm() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.reset();
        }
        
        this.uploadedFiles = [];
        this.renderFileList();
        this.currentStep = 1;
        this.showStep(1);
        this.updateProgress();
        
        // Clear character count
        const charCount = document.getElementById('char-count');
        if (charCount) {
            charCount.textContent = '0';
            charCount.style.color = '#666';
        }
    }

    // Quick Contact Methods
    callEmergency() {
        if (confirm('This will call our emergency helpline. Continue?')) {
            window.location.href = 'tel:1800-FARM-911';
        }
    }

    openWhatsApp() {
        const message = encodeURIComponent('Hello! I need help with farming assistance.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    }

    bookVideoCall() {
        this.showVideoCallModal();
    }

    openLiveChat() {
        // Open chatbot or live chat widget
        if (typeof openChatbot === 'function') {
            openChatbot();
        } else {
            this.showError('Live chat is currently unavailable. Please try again later.');
        }
    }

    contactExpert(expertId) {
        const experts = {
            'rajesh': {
                name: 'Dr. Rajesh Kumar',
                email: 'rajesh@aggrovator.com',
                specialties: ['Crop Diseases', 'Soil Health']
            },
            'priya': {
                name: 'Priya Sharma',
                email: 'priya@aggrovator.com',
                specialties: ['Water Management', 'Drip Irrigation']
            },
            'amit': {
                name: 'Amit Patel',
                email: 'amit@aggrovator.com',
                specialties: ['Smart Farming', 'IoT Solutions']
            }
        };

        const expert = experts[expertId];
        if (expert) {
            this.showExpertContactModal(expert);
        }
    }

    showVideoCallModal() {
        const modal = document.createElement('div');
        modal.className = 'video-call-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2><i class="fas fa-video"></i> Schedule Video Consultation</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="video-call-form">
                        <div class="form-group">
                            <label for="call-date">Preferred Date</label>
                            <input type="date" id="call-date" required min="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="form-group">
                            <label for="call-time">Preferred Time</label>
                            <select id="call-time" required>
                                <option value="">Select Time</option>
                                <option value="09:00">9:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="16:00">4:00 PM</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="call-topic">Topic</label>
                            <textarea id="call-topic" rows="3" placeholder="Brief description of what you'd like to discuss..."></textarea>
                        </div>
                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" onclick="this.closest('.video-call-modal').remove(); document.body.style.overflow = 'auto';">Cancel</button>
                            <button type="submit" class="btn btn-primary">Schedule Call</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Handle form submission
        const form = modal.querySelector('#video-call-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processVideoCallBooking(form);
        });

        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        });
    }

    processVideoCallBooking(form) {
        const formData = new FormData(form);
        const date = formData.get('call-date');
        const time = formData.get('call-time');
        const topic = formData.get('call-topic');

        // Simulate booking process
        setTimeout(() => {
            this.showSuccess(`Video call scheduled for ${date} at ${time}. You'll receive a confirmation email shortly.`);
            form.closest('.video-call-modal').remove();
            document.body.style.overflow = 'auto';
        }, 1000);
    }

    showExpertContactModal(expert) {
        const modal = document.createElement('div');
        modal.className = 'expert-contact-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2><i class="fas fa-user-md"></i> Contact ${expert.name}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="expert-info">
                        <p><strong>Specialties:</strong> ${expert.specialties.join(', ')}</p>
                        <p><strong>Email:</strong> ${expert.email}</p>
                    </div>
                    <form id="expert-contact-form">
                        <div class="form-group">
                            <label for="expert-subject">Subject</label>
                            <input type="text" id="expert-subject" required placeholder="Brief subject of your inquiry">
                        </div>
                        <div class="form-group">
                            <label for="expert-message">Message</label>
                            <textarea id="expert-message" rows="4" required placeholder="Describe your question or issue in detail..."></textarea>
                        </div>
                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" onclick="this.closest('.expert-contact-modal').remove(); document.body.style.overflow = 'auto';">Cancel</button>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Handle form submission
        const form = modal.querySelector('#expert-contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processExpertContact(form, expert);
        });

        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        });
    }

    processExpertContact(form, expert) {
        const formData = new FormData(form);
        const subject = formData.get('expert-subject');
        const message = formData.get('expert-message');

        // Simulate sending message
        setTimeout(() => {
            this.showSuccess(`Message sent to ${expert.name}. They'll respond within 24 hours.`);
            form.closest('.expert-contact-modal').remove();
            document.body.style.overflow = 'auto';
        }, 1000);
    }

    // FAQ Methods
    loadFAQs() {
        this.faqs = [
            {
                id: 1,
                question: 'How accurate is the disease detection?',
                answer: 'Our AI model has an accuracy rate of 85-90% for common crop diseases. The system is continuously learning and improving. However, we recommend consulting with local agricultural experts for severe cases or when in doubt.',
                category: 'features',
                helpful: 0,
                notHelpful: 0
            },
            {
                id: 2,
                question: 'Is the weather data reliable?',
                answer: 'We use multiple weather data sources including IMD, AccuWeather, and local meteorological stations to provide accurate forecasts. Data is updated every hour and has a 95% accuracy rate for 24-hour forecasts.',
                category: 'technical',
                helpful: 0,
                notHelpful: 0
            },
            {
                id: 3,
                question: 'How often are market prices updated?',
                answer: 'Market prices are updated in real-time during market hours (9 AM - 5 PM) and reflect the latest trading information from major agricultural markets across India including APMC mandis and e-NAM platform.',
                category: 'features',
                helpful: 0,
                notHelpful: 0
            },
            {
                id: 4,
                question: 'Is the platform free to use?',
                answer: 'Basic features including weather forecasts, market prices, and basic disease detection are free for all farmers. Premium features like advanced analytics, personalized recommendations, and expert consultations require a subscription starting at ₹299/month.',
                category: 'billing',
                helpful: 0,
                notHelpful: 0
            }
        ];
    }

    toggleFAQ(questionElement) {
        const faqItem = questionElement.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');

        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current FAQ
        if (!isActive) {
            faqItem.classList.add('active');
        }
    }

    searchFAQs(query) {
        const faqItems = document.querySelectorAll('.faq-item');
        const searchTerm = query.toLowerCase();

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();

            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = searchTerm ? 'none' : 'block';
            }
        });
    }

    filterFAQs(category) {
        // Update active button
        document.querySelectorAll('.faq-category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[onclick="filterFAQs('${category}')"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Filter FAQs
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    markHelpful(button, isHelpful) {
        const faqItem = button.closest('.faq-item');
        const faqId = faqItem.getAttribute('data-faq-id');
        
        // Update button states
        const helpfulBtns = faqItem.querySelectorAll('.helpful-btn');
        helpfulBtns.forEach(btn => btn.classList.remove('helpful', 'not-helpful'));
        
        if (isHelpful) {
            button.classList.add('helpful');
        } else {
            button.classList.add('not-helpful');
        }

        // Show thank you message
        this.showSuccess(isHelpful ? 'Thank you for your feedback!' : 'Thank you for your feedback. We\'ll work to improve this answer.');
    }

    handleNewsletterSignup(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        if (email) {
            // Simulate signup
            setTimeout(() => {
                this.showSuccess('Successfully subscribed to our newsletter!');
                e.target.reset();
            }, 1000);
        }
    }

    // Utility Methods
    showSuccess(message) {
        const toast = document.createElement('div');
        toast.className = 'success-toast';
        toast.innerHTML = `
            <i class="fas fa-check-circle"></i>
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
        }, 3000);
    }

    showError(message) {
        const toast = document.createElement('div');
        toast.className = 'error-toast';
        toast.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
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
        }, 3000);
    }
}

// Global functions for HTML onclick handlers
function nextStep() {
    if (window.contactManager) {
        window.contactManager.nextStep();
    }
}

function prevStep() {
    if (window.contactManager) {
        window.contactManager.prevStep();
    }
}

function callEmergency() {
    if (window.contactManager) {
        window.contactManager.callEmergency();
    }
}

function openWhatsApp() {
    if (window.contactManager) {
        window.contactManager.openWhatsApp();
    }
}

function bookVideoCall() {
    if (window.contactManager) {
        window.contactManager.bookVideoCall();
    }
}

function openLiveChat() {
    if (window.contactManager) {
        window.contactManager.openLiveChat();
    }
}

function contactExpert(expertId) {
    if (window.contactManager) {
        window.contactManager.contactExpert(expertId);
    }
}

function toggleFAQ(questionElement) {
    if (window.contactManager) {
        window.contactManager.toggleFAQ(questionElement);
    }
}

function searchFAQs() {
    const searchInput = document.getElementById('faq-search');
    if (window.contactManager && searchInput) {
        window.contactManager.searchFAQs(searchInput.value);
    }
}

function filterFAQs(category) {
    if (window.contactManager) {
        window.contactManager.filterFAQs(category);
    }
}

function markHelpful(button, isHelpful) {
    if (window.contactManager) {
        window.contactManager.markHelpful(button, isHelpful);
    }
}

// Initialize Contact Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.contactManager = new ContactManager();
});

// Handle escape key for modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.video-call-modal, .expert-contact-modal');
        modals.forEach(modal => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        });
    }
});

