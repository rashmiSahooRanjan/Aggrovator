
// Community Page JavaScript
class CommunityManager {
    constructor() {
        this.posts = [];
        this.currentFilter = 'all';
        this.currentSort = 'recent';
        this.uploadedMedia = [];
        this.init();
    }

    init() {
        this.loadCommunityData();
        this.setupEventListeners();
        this.renderPosts();
        this.setupInfiniteScroll();
    }

    loadCommunityData() {
        // Mock community posts data
        this.posts = [
            {
                id: 1,
                author: {
                    name: 'Vikram Singh',
                    location: 'Haryana',
                    avatar: '../assets/images/farmer-success.jpg'
                },
                timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
                category: 'success-stories',
                title: 'How I Increased My Wheat Yield by 40% Using Smart Farming',
                content: 'Last season, I implemented precision agriculture techniques and IoT sensors in my 10-acre wheat farm. The results were amazing! Here\'s what I learned...',
                images: [
                    '../assets/images/wheat-field-before.jpg',
                    '../assets/images/wheat-field-after.jpg'
                ],
                tags: ['Smart Farming', 'Wheat', 'Success Story'],
                likes: 234,
                comments: 45,
                shares: 12,
                featured: true,
                liked: false,
                bookmarked: false
            },
            {
                id: 2,
                author: {
                    name: 'Meera Devi',
                    location: 'Tamil Nadu',
                    avatar: '../assets/images/farmer-5.jpg'
                },
                timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
                category: 'pest-control',
                title: 'Need Help: White Flies on My Tomato Plants',
                content: 'I\'m seeing a lot of white flies on my tomato plants. They seem to be spreading quickly. Has anyone dealt with this before? What organic solutions worked for you?',
                images: ['../assets/images/tomato-whitefly.jpg'],
                tags: ['Tomato', 'White Flies', 'Help Needed'],
                likes: 12,
                comments: 8,
                shares: 2,
                featured: false,
                liked: false,
                bookmarked: false
            },
            {
                id: 3,
                author: {
                    name: 'Suresh Reddy',
                    location: 'Andhra Pradesh',
                    avatar: '../assets/images/farmer-6.jpg'
                },
                timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
                category: 'irrigation',
                title: 'DIY Drip Irrigation System for Small Farms',
                content: 'I built a cost-effective drip irrigation system for my 2-acre farm using PVC pipes and basic fittings. Total cost was only ₹15,000. Here\'s how I did it...',
                video: '../assets/videos/diy-drip-irrigation.mp4',
                tags: ['DIY', 'Drip Irrigation', 'Cost Effective'],
                likes: 89,
                comments: 23,
                shares: 15,
                featured: false,
                liked: false,
                bookmarked: false
            }
        ];
    }

    setupEventListeners() {
        // Category filters
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', () => {
                const category = item.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 'all';
                this.filterPosts(category);
            });
        });

        // Sort filter
        const sortFilter = document.getElementById('sort-filter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.sortPosts(e.target.value);
            });
        }

        // Search functionality
        const searchInput = document.getElementById('post-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchPosts(e.target.value);
            });
        }

        // Create post modal
        this.setupCreatePostModal();

        // Post interactions
        this.setupPostInteractions();
    }

    setupCreatePostModal() {
        const createPostBtn = document.querySelector('[onclick="openCreatePostModal()"]');
        if (createPostBtn) {
            createPostBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openCreatePostModal();
            });
        }

        // Media upload
        const mediaInput = document.getElementById('post-media');
        if (mediaInput) {
            mediaInput.addEventListener('change', (e) => {
                this.handleMediaUpload(Array.from(e.target.files));
            });
        }

        // Form submission
        const createPostForm = document.getElementById('create-post-form');
        if (createPostForm) {
            createPostForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCreatePost(e.target);
            });
        }
    }

    setupPostInteractions() {
        // Delegate event listeners for dynamic content
        document.addEventListener('click', (e) => {
            if (e.target.closest('.like-btn')) {
                const postCard = e.target.closest('.post-card');
                const postId = this.getPostIdFromCard(postCard);
                this.toggleLike(postId, e.target.closest('.like-btn'));
            }

            if (e.target.closest('.comment-btn')) {
                const postCard = e.target.closest('.post-card');
                this.toggleComments(postCard);
            }

            if (e.target.closest('.share-btn')) {
                const postCard = e.target.closest('.post-card');
                const postId = this.getPostIdFromCard(postCard);
                this.sharePost(postId);
            }

            if (e.target.closest('.bookmark-btn')) {
                const postCard = e.target.closest('.post-card');
                const postId = this.getPostIdFromCard(postCard);
                this.bookmarkPost(postId, e.target.closest('.bookmark-btn'));
            }

            if (e.target.matches('.post-images img')) {
                this.openImageModal(e.target.src);
            }
        });
    }

    setupInfiniteScroll() {
        const loadMoreBtn = document.querySelector('.load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMorePosts();
            });
        }

        // Optional: Auto-load on scroll
        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
                // Auto-load more posts when near bottom
                // this.loadMorePosts();
            }
        });
    }

    renderPosts() {
        const postsContainer = document.getElementById('posts-feed');
        if (!postsContainer) return;

        const filteredPosts = this.getFilteredPosts();
        
        postsContainer.innerHTML = filteredPosts.map(post => this.renderPost(post)).join('');
        
        // Add animation
        this.animateElements('.post-card');
    }

    renderPost(post) {
        const timeAgo = this.getTimeAgo(post.timestamp);
        const mediaContent = this.renderMediaContent(post);
        
        return `
            <div class="post-card ${post.featured ? 'featured' : ''}" data-category="${post.category}" data-post-id="${post.id}">
                <div class="post-header">
                    <div class="post-author">
                        <img src="${post.author.avatar}" alt="${post.author.name}">
                        <div class="author-info">
                            <h4>${post.author.name}</h4>
                            <p>${post.author.location} • ${timeAgo}</p>
                        </div>
                    </div>
                    ${post.featured ? 
                        '<div class="post-badge featured-badge"><i class="fas fa-star"></i> Featured</div>' :
                        `<div class="post-category"><i class="fas fa-${this.getCategoryIcon(post.category)}"></i> ${this.getCategoryName(post.category)}</div>`
                    }
                </div>
                
                <div class="post-content">
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    
                    ${mediaContent}
                    
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                
                <div class="post-actions">
                    <button class="action-btn like-btn ${post.liked ? 'liked' : ''}" data-post-id="${post.id}">
                        <i class="fas fa-thumbs-up"></i> ${post.likes}
                    </button>
                    <button class="action-btn comment-btn" data-post-id="${post.id}">
                        <i class="fas fa-comment"></i> ${post.comments}
                    </button>
                    <button class="action-btn share-btn" data-post-id="${post.id}">
                        <i class="fas fa-share"></i> Share
                    </button>
                    <button class="action-btn bookmark-btn ${post.bookmarked ? 'bookmarked' : ''}" data-post-id="${post.id}">
                        <i class="fas fa-bookmark"></i>
                    </button>
                </div>
                
                <div class="post-comments" style="display: none;">
                    <div class="comment-input">
                        <img src="../assets/images/user-avatar.jpg" alt="You">
                        <input type="text" placeholder="Write a comment...">
                        <button class="btn btn-sm btn-primary">Post</button>
                    </div>
                    
                    <div class="comments-list">
                        ${this.renderComments(post.id)}
                    </div>
                </div>
            </div>
        `;
    }

    renderMediaContent(post) {
        if (post.images && post.images.length > 0) {
            return `
                <div class="post-images">
                    ${post.images.map(img => `<img src="${img}" alt="Post image" onclick="openImageModal('${img}')">`).join('')}
                </div>
            `;
        }
        
        if (post.video) {
            return `
                <div class="post-video">
                    <video controls poster="../assets/images/video-thumbnail.jpg">
                        <source src="${post.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            `;
        }
        
        return '';
    }

    renderComments(postId) {
        // Mock comments data
        const comments = [
            {
                id: 1,
                author: 'Rajesh Kumar',
                avatar: '../assets/images/farmer-4.jpg',
                content: 'This is very inspiring! Can you share more details about the IoT sensors you used?',
                timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
                likes: 3
            }
        ];

        return comments.map(comment => `
            <div class="comment">
                <img src="${comment.avatar}" alt="${comment.author}">
                <div class="comment-content">
                    <h5>${comment.author}</h5>
                    <p>${comment.content}</p>
                    <div class="comment-actions">
                        <button class="comment-like">Like</button>
                        <button class="comment-reply">Reply</button>
                        <span class="comment-time">${this.getTimeAgo(comment.timestamp)}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    getFilteredPosts() {
        let filtered = this.posts;

        // Filter by category
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(post => post.category === this.currentFilter);
        }

        // Sort posts
        switch (this.currentSort) {
            case 'popular':
                filtered.sort((a, b) => b.likes - a.likes);
                break;
            case 'answered':
                filtered.sort((a, b) => b.comments - a.comments);
                break;
            case 'recent':
            default:
                filtered.sort((a, b) => b.timestamp - a.timestamp);
                break;
        }

        return filtered;
    }

    filterPosts(category) {
        this.currentFilter = category;
        
        // Update active category
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeItem = document.querySelector(`[onclick="filterPosts('${category}')"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }

        this.renderPosts();
    }

    sortPosts(sortType) {
        this.currentSort = sortType;
        this.renderPosts();
    }

    searchPosts(query) {
        const postsContainer = document.getElementById('posts-feed');
        const postCards = postsContainer.querySelectorAll('.post-card');
        
        postCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            const searchTerm = query.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = query ? 'none' : 'block';
            }
        });
    }

    toggleLike(postId, button) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;

        // Update button
        button.classList.toggle('liked', post.liked);
        button.innerHTML = `<i class="fas fa-thumbs-up"></i> ${post.likes}`;

        // Show feedback
        this.showToast(post.liked ? 'Post liked!' : 'Like removed');
    }

    toggleComments(postCard) {
        const commentsSection = postCard.querySelector('.post-comments');
        const isVisible = commentsSection.style.display !== 'none';
        
        commentsSection.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            commentsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    sharePost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.content,
                url: window.location.href
            });
        } else {
            // Fallback: Copy to clipboard
            const shareText = `${post.title}\n\n${post.content}\n\nShared from Aggrovator Community`;
            navigator.clipboard.writeText(shareText).then(() => {
                this.showToast('Post copied to clipboard!');
            });
        }

        post.shares++;
    }

    bookmarkPost(postId, button) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        post.bookmarked = !post.bookmarked;

        // Update button
        button.classList.toggle('bookmarked', post.bookmarked);

        // Show feedback
        this.showToast(post.bookmarked ? 'Post bookmarked!' : 'Bookmark removed');
    }

    openCreatePostModal() {
        const modal = document.getElementById('create-post-modal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    closeCreatePostModal() {
        const modal = document.getElementById('create-post-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            this.resetCreatePostForm();
        }
    }

    handleMediaUpload(files) {
        const maxSize = 10 * 1024 * 1024; // 10MB
        const allowedTypes = ['image/', 'video/'];

        files.forEach(file => {
            if (file.size > maxSize) {
                this.showToast(`File "${file.name}" is too large. Maximum size is 10MB.`, 'error');
                return;
            }

            const isAllowed = allowedTypes.some(type => file.type.startsWith(type));
            if (!isAllowed) {
                this.showToast(`File "${file.name}" is not supported. Please upload images or videos.`, 'error');
                return;
            }

            this.uploadedMedia.push(file);
            this.renderMediaPreview();
        });
    }

    renderMediaPreview() {
        const previewContainer = document.getElementById('media-preview');
        if (!previewContainer) return;

        previewContainer.innerHTML = this.uploadedMedia.map((file, index) => {
            const url = URL.createObjectURL(file);
            const isVideo = file.type.startsWith('video/');
            
            return `
                <div class="media-preview-item">
                    ${isVideo ? 
                        `<video src="${url}" controls></video>` :
                        `<img src="${url}" alt="Preview">`
                    }
                    <button class="media-remove" onclick="communityManager.removeMedia(${index})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }).join('');
    }

    removeMedia(index) {
        this.uploadedMedia.splice(index, 1);
        this.renderMediaPreview();
    }

    handleCreatePost(form) {
        const formData = new FormData(form);
        const category = formData.get('post-category');
        const title = formData.get('post-title');
        const content = formData.get('post-content');
        const tags = formData.get('post-tags').split(',').map(tag => tag.trim()).filter(tag => tag);

        if (!category || !title || !content) {
            this.showToast('Please fill in all required fields.', 'error');
            return;
        }

        // Create new post
        const newPost = {
            id: this.posts.length + 1,
            author: {
                name: 'You', // In real app, get from user session
                location: 'Your Location',
                avatar: '../assets/images/user-avatar.jpg'
            },
            timestamp: new Date(),
            category: category,
            title: title,
            content: content,
            images: this.uploadedMedia.filter(file => file.type.startsWith('image/')).map(file => URL.createObjectURL(file)),
            video: this.uploadedMedia.find(file => file.type.startsWith('video/')) ? URL.createObjectURL(this.uploadedMedia.find(file => file.type.startsWith('video/'))) : null,
            tags: tags,
            likes: 0,
            comments: 0,
            shares: 0,
            featured: false,
            liked: false,
            bookmarked: false
        };

        // Add to posts array
        this.posts.unshift(newPost);

        // Close modal and refresh
        this.closeCreatePostModal();
        this.renderPosts();
        this.showToast('Post created successfully!');
    }

    resetCreatePostForm() {
        const form = document.getElementById('create-post-form');
        if (form) {
            form.reset();
        }
        this.uploadedMedia = [];
        this.renderMediaPreview();
    }

    openImageModal(imageSrc) {
        const modal = document.getElementById('image-modal');
        const modalImage = modal.querySelector('img');
        
        if (modal && modalImage) {
            modalImage.src = imageSrc;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    closeImageModal() {
        const modal = document.getElementById('image-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    loadMorePosts() {
        // Simulate loading more posts
        const loadMoreBtn = document.querySelector('.load-more-btn');
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        loadMoreBtn.disabled = true;

        setTimeout(() => {
            // Add more mock posts
            const morePosts = [
                {
                    id: this.posts.length + 1,
                    author: {
                        name: 'Anita Sharma',
                        location: 'Rajasthan',
                        avatar: '../assets/images/farmer-7.jpg'
                    },
                    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
                    category: 'crop-care',
                    title: 'Organic Fertilizer Recipe That Doubled My Crop Yield',
                    content: 'I\'ve been experimenting with homemade organic fertilizers and found a combination that works amazingly well...',
                    images: ['../assets/images/organic-fertilizer.jpg'],
                    tags: ['Organic', 'Fertilizer', 'DIY'],
                    likes: 67,
                    comments: 15,
                    shares: 8,
                    featured: false,
                    liked: false,
                    bookmarked: false
                }
            ];

            this.posts.push(...morePosts);
            this.renderPosts();

            loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Load More Posts';
            loadMoreBtn.disabled = false;
        }, 1500);
    }

    // Utility methods
    getPostIdFromCard(card) {
        return parseInt(card.getAttribute('data-post-id'));
    }

    getCategoryIcon(category) {
        const icons = {
            'crop-care': 'seedling',
            'pest-control': 'bug',
            'irrigation': 'tint',
            'market-tips': 'chart-line',
            'technology': 'laptop',
            'success-stories': 'trophy'
        };
        return icons[category] || 'circle';
    }

    getCategoryName(category) {
        const names = {
            'crop-care': 'Crop Care',
            'pest-control': 'Pest Control',
            'irrigation': 'Irrigation',
            'market-tips': 'Market Tips',
            'technology': 'Technology',
            'success-stories': 'Success Stories'
        };
        return names[category] || 'General';
    }

    getTimeAgo(timestamp) {
        const now = new Date();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return 'Just now';
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

    showToast(message, type = 'success') {
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
        }, 3000);
    }
}

// Global functions for HTML onclick handlers
function filterPosts(category) {
    if (window.communityManager) {
        window.communityManager.filterPosts(category);
    }
}

function openCreatePostModal() {
    if (window.communityManager) {
        window.communityManager.openCreatePostModal();
    }
}

function closeCreatePostModal() {
    if (window.communityManager) {
        window.communityManager.closeCreatePostModal();
    }
}

function openImageModal(imageSrc) {
    if (window.communityManager) {
        window.communityManager.openImageModal(imageSrc);
    }
}

function closeImageModal() {
    if (window.communityManager) {
        window.communityManager.closeImageModal();
    }
}

function loadMorePosts() {
    if (window.communityManager) {
        window.communityManager.loadMorePosts();
    }
}

// Initialize Community Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.communityManager = new CommunityManager();
});

// Handle modal close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal, .image-modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Handle modal close on backdrop click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('image-modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});