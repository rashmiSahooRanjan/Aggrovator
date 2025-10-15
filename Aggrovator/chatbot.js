
// Enhanced Multilingual Chatbot
class MultilingualChatbot {
    constructor() {
        this.isOpen = false;
        this.isListening = false;
        this.currentLanguage = 'en';
        this.messages = [];
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        this.supportedLanguages = {
            'en': { name: 'English', code: 'en-US', flag: '🇺🇸' },
            'hi': { name: 'हिंदी', code: 'hi-IN', flag: '🇮🇳' },
            'bn': { name: 'বাংলা', code: 'bn-IN', flag: '🇧🇩' },
            'te': { name: 'తెలుగు', code: 'te-IN', flag: '🇮🇳' },
            'mr': { name: 'मराठी', code: 'mr-IN', flag: '🇮🇳' },
            'ta': { name: 'தமிழ்', code: 'ta-IN', flag: '🇮🇳' },
            'gu': { name: 'ગુજરાતી', code: 'gu-IN', flag: '🇮🇳' },
            'kn': { name: 'ಕನ್ನಡ', code: 'kn-IN', flag: '🇮🇳' },
            'ml': { name: 'മലയാളം', code: 'ml-IN', flag: '🇮🇳' },
            'pa': { name: 'ਪੰਜਾਬੀ', code: 'pa-IN', flag: '🇮🇳' },
            'or': { name: 'ଓଡ଼ିଆ', code: 'or-IN', flag: '🇮🇳' },
            'as': { name: 'অসমীয়া', code: 'as-IN', flag: '🇮🇳' }
        };
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadTranslations();
        this.setupSpeechRecognition();
        this.setupEventListeners();
        this.createLanguageSelector();
        this.addInitialMessage();
    }

    async loadTranslations() {
        // Load translation data for different languages
        this.translations = {
            'en': {
                greeting: "Hello! I'm your farming assistant. How can I help you today?",
                weather: "Today's weather: Partly cloudy with temperatures around 28°C. Light rain expected in the evening.",
                prices: "Current market prices: Rice ₹2,850/quintal, Wheat ₹2,200/quintal, Corn ₹1,850/quintal.",
                disease: "For crop disease identification, please upload a clear image using our Disease Detection feature.",
                irrigation: "Best irrigation practices: Water early morning or evening, use drip irrigation for efficiency.",
                schemes: "Available schemes: PM-KISAN (₹6,000/year), Crop Insurance, Soil Health Card, KCC loans.",
                technology: "Modern farming technologies include IoT sensors, drones, precision agriculture, and AI analytics.",
                fertilizer: "For proper fertilization: Get soil testing done, use balanced NPK fertilizers, apply organic compost.",
                default: "I can help with weather, market prices, crop diseases, irrigation, and government schemes. What do you need help with?",
                thanks: "You're welcome! I'm always here to help with your farming needs.",
                placeholder: "Type your message...",
                send: "Send",
                listening: "Listening...",
                language_changed: "Language changed to"
            },
            'hi': {
                greeting: "नमस्ते! मैं आपका कृषि सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
                weather: "आज का मौसम: 28°C के आसपास तापमान के साथ आंशिक रूप से बादल छाए हुए हैं। शाम को हल्की बारिश की संभावना है।",
                prices: "वर्तमान बाजार भाव: चावल ₹2,850/क्विंटल, गेहूं ₹2,200/क्विंटल, मक्का ₹1,850/क्विंटल।",
                disease: "फसल रोग की पहचान के लिए, कृपया हमारे रोग पहचान फीचर का उपयोग करके एक स्पष्ट तस्वीर अपलोड करें।",
                irrigation: "सर्वोत्तम सिंचाई प्रथाएं: सुबह या शाम को पानी दें, दक्षता के लिए ड्रिप सिंचाई का उपयोग करें।",
                schemes: "उपलब्ध योजनाएं: पीएम-किसान (₹6,000/वर्ष), फसल बीमा, मृदा स्वास्थ्य कार्ड, केसीसी ऋण।",
                technology: "आधुनिक कृषि तकनीकों में IoT सेंसर, ड्रोन, सटीक कृषि और AI एनालिटिक्स शामिल हैं।",
                fertilizer: "उचित उर्वरीकरण के लिए: मिट्टी की जांच कराएं, संतुलित NPK उर्वरक का उपयोग करें, जैविक खाद डालें।",
                default: "मैं मौसम, बाजार भाव, फसल रोग, सिंचाई और सरकारी योजनाओं में मदद कर सकता हूं। आपको किस चीज़ में मदद चाहिए?",
                thanks: "आपका स्वागत है! मैं हमेशा आपकी कृषि आवश्यकताओं में मदद के लिए यहां हूं।",
                placeholder: "अपना संदेश टाइप करें...",
                send: "भेजें",
                listening: "सुन रहा हूं...",
                language_changed: "भाषा बदल दी गई"
            },
            'bn': {
                greeting: "নমস্কার! আমি আপনার কৃষি সহায়ক। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
                weather: "আজকের আবহাওয়া: ২৮°সে এর কাছাকাছি তাপমাত্রা সহ আংশিক মেঘলা। সন্ধ্যায় হালকা বৃষ্টির সম্ভাবনা।",
                prices: "বর্তমান বাজার দর: চাল ₹২,৮৫০/কুইন্টাল, গম ₹২,২০০/কুইন্টাল, ভুট্টা ₹১,৮৫০/কুইন্টাল।",
                disease: "ফসলের রোগ সনাক্তকরণের জন্য, আমাদের রোগ সনাক্তকরণ বৈশিষ্ট্য ব্যবহার করে একটি স্পষ্ট ছবি আপলোড করুন।",
                irrigation: "সেরা সেচ পদ্ধতি: সকাল বা সন্ধ্যায় পানি দিন, দক্ষতার জন্য ড্রিপ সেচ ব্যবহার করুন।",
                schemes: "উপলব্ধ প্রকল্প: পিএম-কিষাণ (₹৬,০০০/বছর), ফসল বীমা, মাটি স্বাস্থ্য কার্ড, কেসিসি ঋণ।",
                technology: "আধুনিক কৃষি প্রযুক্তিতে রয়েছে IoT সেন্সর, ড্রোন, নির্ভুল কৃষি এবং AI বিশ্লেষণ।",
                fertilizer: "সঠিক সারপ্রয়োগের জন্য: মাটি পরীক্ষা করান, সুষম NPK সার ব্যবহার করুন, জৈব সার প্রয়োগ করুন।",
                default: "আমি আবহাওয়া, বাজার দর, ফসলের রোগ, সেচ এবং সরকারি প্রকল্পে সাহায্য করতে পারি। আপনার কী সাহায্য দরকার?",
                thanks: "আপনাকে স্বাগতম! আমি সর্বদা আপনার কৃষি প্রয়োজনে সাহায্যের জন্য এখানে আছি।",
                placeholder: "আপনার বার্তা টাইপ করুন...",
                send: "পাঠান",
                listening: "শুনছি...",
                language_changed: "ভাষা পরিবর্তিত হয়েছে"
            }
            // Add more languages as needed...
        };
    }

    createLanguageSelector() {
        const chatbotHeader = document.querySelector('.chatbot-header');
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <select id="language-select" onchange="chatbotManager.changeLanguage(this.value)">
                ${Object.entries(this.supportedLanguages).map(([code, lang]) => 
                    `<option value="${code}" ${code === this.currentLanguage ? 'selected' : ''}>
                        ${lang.flag} ${lang.name}
                    </option>`
                ).join('')}
            </select>
        `;
        chatbotHeader.appendChild(languageSelector);
    }

    changeLanguage(languageCode) {
        this.currentLanguage = languageCode;
        this.updatePlaceholders();
        this.addMessage(
            `${this.translations[languageCode].language_changed} ${this.supportedLanguages[languageCode].name}`,
            'bot'
        );
        
        // Update speech recognition language
        if (this.recognition) {
            this.recognition.lang = this.supportedLanguages[languageCode].code;
        }
    }

    updatePlaceholders() {
        const inputField = document.getElementById('chatbot-input-field');
        if (inputField) {
            inputField.placeholder = this.translations[this.currentLanguage].placeholder;
        }
    }

    setupSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = this.supportedLanguages[this.currentLanguage].code;

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('chatbot-input-field').value = transcript;
                this.stopListening();
                // Auto-send after voice input
                setTimeout(() => this.sendMessage(), 500);
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.stopListening();
            };

            this.recognition.onend = () => {
                this.stopListening();
            };
        }
    }

    setupEventListeners() {
        const inputField = document.getElementById('chatbot-input-field');
        if (inputField) {
            inputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
    }

    addInitialMessage() {
        this.addMessage(this.translations[this.currentLanguage].greeting, 'bot');
    }

    generateResponse(userInput) {
        const input = userInput.toLowerCase();
        const lang = this.currentLanguage;
        const t = this.translations[lang];

        // Detect language-specific keywords
        const keywords = {
            weather: ['weather', 'मौसम', 'আবহাওয়া', 'వాతావరణం', 'हवामान', 'காலநிலை'],
            prices: ['price', 'market', 'भाव', 'দর', 'ధర', 'किंमत', 'விலை'],
            disease: ['disease', 'pest', 'रोग', 'রোগ', 'వ్యాధి', 'रोग', 'நோய்'],
            irrigation: ['irrigation', 'water', 'सिंचाई', 'সেচ', 'నీటిపారుదల', 'सिंचन', 'நீர்ப்பாசனம்'],
            schemes: ['scheme', 'government', 'योजना', 'প্রকল্প', 'పథకం', 'योजना', 'திட்டம்'],
            technology: ['technology', 'modern', 'तकनीक', 'প্রযুক্তি', 'సాంకేతికత', 'तंत्रज्ञान', 'தொழில்நுட்பம்'],
            fertilizer: ['fertilizer', 'soil', 'उर्वरक', 'সার', 'ఎరువులు', 'खत', 'உரம்'],
            thanks: ['thank', 'धन्यवाद', 'ধন্যবাদ', 'ధన్యవాదాలు', 'धन्यवाद', 'நன்றி']
        };

        // Check which category the input belongs to
        for (const [category, words] of Object.entries(keywords)) {
            if (words.some(word => input.includes(word))) {
                return t[category] || t.default;
            }
        }

        return t.default;
    }

    sendMessage() {
        const inputField = document.getElementById('chatbot-input-field');
        const message = inputField.value.trim();
        
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        inputField.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Generate bot response
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
            this.speakMessage(response);
        }, 1500);
    }

    addMessage(text, sender) {
        const message = {
            id: this.messages.length + 1,
            text: text,
            sender: sender,
            timestamp: new Date(),
            language: this.currentLanguage
        };

        this.messages.push(message);
        this.renderMessage(message);
        this.scrollToBottom();
        this.saveChatHistory();
    }

    renderMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sender}-message`;
        
        const time = message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        messageElement.innerHTML = `
            <div class="message-content">
                ${message.sender === 'bot' ? '<i class="fas fa-robot"></i>' : ''}
                <div class="message-text">${message.text}</div>
                ${message.sender === 'user' ? '<i class="fas fa-user"></i>' : ''}
            </div>
            <div class="message-time">${time}</div>
            ${message.sender === 'bot' ? `<button class="speak-btn" onclick="chatbotManager.speakMessage('${message.text}')"><i class="fas fa-volume-up"></i></button>` : ''}
        `;

        messagesContainer.appendChild(messageElement);
    }

    speakMessage(text) {
        if (this.synthesis && this.synthesis.speaking === false) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.8;
            utterance.pitch = 1;
            utterance.volume = 0.8;
            utterance.lang = this.supportedLanguages[this.currentLanguage].code;
            
            // Try to find a voice for the current language
            const voices = this.synthesis.getVoices();
            const preferredVoice = voices.find(voice => 
                voice.lang.includes(this.supportedLanguages[this.currentLanguage].code.split('-')[0])
            );
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            
            this.synthesis.speak(utterance);
        }
    }

    // Add translation API integration
    async translateText(text, targetLanguage) {
        try {
            // This would integrate with Google Translate API or similar
            // For demo purposes, returning the original text
            return text;
        } catch (error) {
            console.error('Translation error:', error);
            return text;
        }
    }

    openChatbot() {
        const container = document.getElementById('chatbot-container');
        container.style.display = 'flex';
        this.isOpen = true;
        this.scrollToBottom();
    }

    closeChatbot() {
        const container = document.getElementById('chatbot-container');
        container.style.display = 'none';
        this.isOpen = false;
    }

    toggleVoice() {
        if (this.isListening) {
            this.stopListening();
        } else {
            this.startListening();
        }
    }

    startListening() {
        if (this.recognition) {
            this.recognition.lang = this.supportedLanguages[this.currentLanguage].code;
            this.recognition.start();
            this.isListening = true;
            const voiceBtn = document.getElementById('voice-btn');
            voiceBtn.classList.add('listening');
            voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
        }
    }

    stopListening() {
        if (this.recognition) {
            this.recognition.stop();
        }
        this.isListening = false;
        const voiceBtn = document.getElementById('voice-btn');
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingElement = document.createElement('div');
        typingElement.id = 'typing-indicator';
        typingElement.className = 'message bot-message typing';
        typingElement.innerHTML = `
            <div class="message-content">
                <i class="fas fa-robot"></i>
                <div class="message-text">
                    <div class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingElement);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingElement = document.getElementById('typing-indicator');
        if (typingElement) {
            typingElement.remove();
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    saveChatHistory() {
        localStorage.setItem('multilingual-chatbot-messages', JSON.stringify(this.messages));
        localStorage.setItem('chatbot-language', this.currentLanguage);
    }

    loadChatHistory() {
        const savedMessages = localStorage.getItem('multilingual-chatbot-messages');
        const savedLanguage = localStorage.getItem('chatbot-language');
        
        if (savedLanguage && this.supportedLanguages[savedLanguage]) {
            this.currentLanguage = savedLanguage;
            document.getElementById('language-select').value = savedLanguage;
        }
        
        if (savedMessages) {
            this.messages = JSON.parse(savedMessages);
            this.messages.forEach(message => {
                if (message.id > 1) { // Skip initial greeting
                    this.renderMessage(message);
                }
            });
        }
    }
}

// Global functions for multilingual chatbot
let chatbotManager;

function openChatbot() {
    if (!chatbotManager) {
        chatbotManager = new MultilingualChatbot();
    }
    chatbotManager.openChatbot();
}

function closeChatbot() {
    if (chatbotManager) {
        chatbotManager.closeChatbot();
    }
}

function sendMessage() {
    if (chatbotManager) {
        chatbotManager.sendMessage();
    }
}

function toggleVoice() {
    if (chatbotManager) {
        chatbotManager.toggleVoice();
    }
}

function askQuestion(question) {
    if (!chatbotManager) {
        chatbotManager = new MultilingualChatbot();
        chatbotManager.openChatbot();
    }
    setTimeout(() => {
        chatbotManager.askQuestion(question);
    }, 500);
}

// Initialize multilingual chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    chatbotManager = new MultilingualChatbot();
});