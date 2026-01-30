// ===== SULOP NATIONAL HIGH SCHOOL - ADMINISTRATION BRANCH SCRIPT FILE =====
// This file contains interactive functionality for the SNHS Administration branch page

// ===== FACULTY CAROUSEL COUNTS =====
const carouselCounts = {
    administration: 6,   // 6 staff
    grade11: 14,         // 14 Grade 11 advisers
    grade12: 12,         // 12 Grade 12 advisers
    subject: 15          // 15 Subject teachers
};

// ===== PLACEHOLDER DATA FOR EACH CATEGORY =====
const placeholderData = {
    administration: {
        title: "Administration & Support Staff",
        positions: [
            "School Principal I",
            "Senior High School Coordinator",
            "Guidance Counselor II",
            "Administrative Officer II",
            "Registrar I",
            "Administrative Staff"
        ]
    },
    grade11: {
        title: "Grade 11 Advisers",
        positions: [
            "Grade 11 Adviser - TECHPRO Housekeeping",
            "Grade 11 Adviser - TECHPRO ICT",
            "Grade 11 Adviser - TECHPRO ICT",
            "Grade 11 Adviser - TECHPRO Aesthetic, Wellness & Human Care",
            "Grade 11 Adviser - TECHPRO Food & Beverage Operations",
            "Grade 11 Adviser - TECHPRO Food & Beverage Operations",
            "Grade 11 Adviser - TECHPRO Housekeeping",
            "Grade 11 Adviser - TECHPRO Housekeeping",
            "Grade 11 Adviser - Business & Entrepreneurship",
            "Grade 11 Adviser - Arts, Social Sciences & Humanities",
            "Grade 11 Adviser - Arts, Social Sciences & Humanities",
            "Grade 11 Adviser - Mathematics & Engineering",
            "Grade 11 Adviser - STEM (Science & Nursing)",
            "Grade 11 Adviser - Family Consumer Science, Housekeeping"
        ]
    },
    grade12: {
        title: "Grade 12 Advisers",
        positions: [
            "Grade 12 Adviser - ALS, General Academic Strand",
            "Grade 12 Adviser - TVL ICT",
            "Grade 12 Adviser - TVL ICT",
            "Grade 12 Adviser - TVL Hairdressing",
            "Grade 12 Adviser - TVL Cookery",
            "Grade 12 Adviser - TVL Bartending",
            "Grade 12 Adviser - TVL Bartending",
            "Grade 12 Adviser - TVL Bartending",
            "Grade 12 Adviser - Accountancy, Business & Management",
            "Grade 12 Adviser - General Academic Strand",
            "Grade 12 Adviser - General Academic Strand",
            "Grade 12 Adviser - STEM"
        ]
    },
    subject: {
        title: "Subject Teachers",
        positions: [
            "Subject Teacher / Master Teacher II",
            "Subject Teacher",
            "Subject Teacher / Local School Board Teacher",
            "Subject Teacher / Provincial School Board Teacher",
            "Subject Teacher / Provincial School Board Teacher",
            "Subject Teacher / Provincial School Board Teacher",
            "Subject Teacher",
            "Subject Teacher",
            "Subject Teacher",
            "Subject Teacher",
            "Subject Teacher",
            "Subject Teacher",
            "Subject Teacher",
            "Subject Teacher",
            "Subject Teacher"
        ]
    }
};

// ===== CAROUSEL MANAGEMENT =====
const carousels = {
    administration: { currentIndex: 0, items: [] },
    grade11: { currentIndex: 0, items: [] },
    grade12: { currentIndex: 0, items: [] },
    subject: { currentIndex: 0, items: [] }
};

// ===== SET CURRENT YEAR IN FOOTER =====
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // ===== INITIALIZE IMAGE CAROUSELS =====
    initializeImageCarousels();
    
    // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== ACTIVE SECTION INDICATOR =====
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    updateActiveNavLink();
    
    // ===== ENHANCE ADMINISTRATION CARDS =====
    const adminCards = document.querySelectorAll('.admin-detail-card');
    adminCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 25px rgba(156, 39, 176, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(255, 152, 0, 0.1)';
        });
    });
    
    // ===== ENHANCE TRACK CARDS =====
    const trackCards = document.querySelectorAll('.track-card');
    trackCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(156, 39, 176, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(255, 152, 0, 0.1)';
        });
    });
    
    // ===== ENHANCE TRACK DETAIL SECTIONS =====
    const trackDetails = document.querySelectorAll('.track-detail');
    trackDetails.forEach(detail => {
        detail.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(156, 39, 176, 0.15)';
            this.style.transform = 'translateY(-3px)';
        });
        
        detail.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===== ENHANCE BACK-TO-HOME BUTTON =====
    const backHomeButtons = document.querySelectorAll('.back-home-button');
    backHomeButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 20px rgba(156, 39, 176, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(156, 39, 176, 0.3)';
        });
    });
    
    // ===== UPDATE ACTIVE NAV ON SCROLL =====
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ===== PRINT-FRIENDLY FUNCTIONALITY =====
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Print This Page';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50 0%, #FFEB3B 100%);
        color: #333;
        border: none;
        padding: 12px 20px;
        border-radius: 30px;
        cursor: pointer;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
    `;
    
    printButton.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    });
    
    printButton.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });
    
    printButton.addEventListener('click', function() {
        console.log('Printing page...');
        window.print();
    });
    
    document.body.appendChild(printButton);
    
    // ===== BACK TO TOP BUTTON =====
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 70px;
        right: 20px;
        background: linear-gradient(135deg, #E91E63 0%, #9C27B0 100%);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
        z-index: 1000;
        display: none;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    `;
    
    backToTopButton.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(233, 30, 99, 0.4)';
    });
    
    backToTopButton.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(233, 30, 99, 0.3)';
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // ===== ENHANCE SCHOOL LOGO INTERACTION =====
    const schoolLogo = document.querySelector('.school-logo');
    if (schoolLogo) {
        schoolLogo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        schoolLogo.title = 'Click to scroll to top';
    }
    
    // ===== ADD CSS ANIMATIONS =====
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .admin-detail-card, .track-card {
            animation: fadeInUp 0.6s ease forwards;
            transition: all 0.3s ease;
        }
        
        .track-detail {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        .carousel-item {
            animation: slideIn 0.5s ease forwards;
        }
        
        @media print {
            nav, .print-button, .back-to-top-button, .back-home-button {
                display: none !important;
            }
            
            section {
                break-inside: avoid;
                box-shadow: none !important;
                border: 1px solid #ddd !important;
            }
            
            .track-card, .admin-detail-card {
                break-inside: avoid;
                page-break-inside: avoid;
            }
            
            .image-carousel-container {
                break-inside: avoid;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Log page load for analytics
    console.log('Administration branch page loaded successfully');
    
    // Highlight the section if there's a hash in the URL
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
    
    // Initialize touch support for carousels
    initializeTouchSupport();
});

// ===== IMAGE CAROUSEL FUNCTIONS =====
function initializeImageCarousels() {
    // Initialize carousels for each faculty category with blank images
    initializeCarousel('administration', carouselCounts.administration);
    initializeCarousel('grade11', carouselCounts.grade11);
    initializeCarousel('grade12', carouselCounts.grade12);
    initializeCarousel('subject', carouselCounts.subject);
    
    // Add event listeners for navigation buttons
    document.querySelectorAll('.carousel-nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const carouselId = this.getAttribute('data-carousel');
            const isPrev = this.classList.contains('prev-btn');
            
            if (isPrev) {
                navigateCarousel(carouselId, 'prev');
            } else {
                navigateCarousel(carouselId, 'next');
            }
        });
    });
    
    // Start auto-advance after page loads
    setTimeout(startAutoAdvanceCarousels, 3000);
}

function initializeCarousel(carouselId, count) {
    const carouselElement = document.getElementById(`${carouselId}-carousel`);
    if (!carouselElement) return;
    
    // Clear existing content
    carouselElement.innerHTML = '';
    
    // Create carousel items
    for (let i = 0; i < count; i++) {
        const carouselItem = createBlankCarouselItem(i, carouselId);
        carouselElement.appendChild(carouselItem);
    }
    
    // Store carousel items for navigation
    carousels[carouselId].items = Array.from(carouselElement.children);
    
    // Set initial position
    updateCarouselPosition(carouselId);
}

function createBlankCarouselItem(index, carouselId) {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.setAttribute('data-index', index);
    
    // Get position text from placeholder data or use default
    const positionText = placeholderData[carouselId]?.positions[index] || 
                        `${placeholderData[carouselId]?.title || 'Faculty Member'} ${index + 1}`;
    
    item.innerHTML = `
        <div class="carousel-image">
            <i class="fas fa-user"></i>
        </div>
        <div class="carousel-caption">
            <h5>Faculty Member ${index + 1}</h5>
            <p>${positionText}</p>
            <p><small>${placeholderData[carouselId]?.title || 'Faculty'}</small></p>
        </div>
    `;
    
    // Add click event for carousel item
    item.addEventListener('click', function() {
        showFacultyDetails(index, carouselId);
    });
    
    return item;
}

function navigateCarousel(carouselId, direction) {
    const carousel = carousels[carouselId];
    const totalItems = carousel.items.length;
    
    if (direction === 'next') {
        carousel.currentIndex = (carousel.currentIndex + 1) % totalItems;
    } else {
        carousel.currentIndex = (carousel.currentIndex - 1 + totalItems) % totalItems;
    }
    
    updateCarouselPosition(carouselId);
}

function updateCarouselPosition(carouselId) {
    const carousel = carousels[carouselId];
    const carouselElement = document.getElementById(`${carouselId}-carousel`);
    
    if (!carouselElement || carousel.items.length === 0) return;
    
    const itemWidth = carousel.items[0]?.offsetWidth || 250;
    const gap = 20;
    const scrollAmount = carousel.currentIndex * (itemWidth + gap);
    
    carouselElement.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
    
    // Update active item styling
    carousel.items.forEach((item, index) => {
        const image = item.querySelector('.carousel-image');
        if (index === carousel.currentIndex) {
            image.style.border = '3px solid #9C27B0';
            image.style.boxShadow = '0 6px 15px rgba(156, 39, 176, 0.2)';
            image.style.backgroundColor = '#e8f5e8';
            image.style.color = '#4CAF50';
        } else {
            image.style.border = '3px solid #FFCC80';
            image.style.boxShadow = 'none';
            image.style.backgroundColor = '#f0f0f0';
            image.style.color = '#ccc';
        }
    });
}

function showFacultyDetails(index, category) {
    const positionText = placeholderData[category]?.positions[index] || 
                        `${placeholderData[category]?.title || 'Faculty Member'} ${index + 1}`;
    
    // Create a modal for faculty details
    const modalHtml = `
        <div class="faculty-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        ">
            <div style="
                background: white;
                padding: 30px;
                border-radius: 10px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            ">
                <button class="close-modal" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: #E91E63;
                    color: white;
                    border: none;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">×</button>
                
                <div style="text-align: center;">
                    <div style="
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        border: 4px solid #4CAF50;
                        margin: 0 auto 20px auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #f0f0f0;
                        font-size: 4rem;
                        color: #ccc;
                    ">
                        <i class="fas fa-user"></i>
                    </div>
                    <h3 style="color: #E91E63; margin-bottom: 10px;">Faculty Member ${index + 1}</h3>
                    <p style="color: #4CAF50; font-weight: bold; margin-bottom: 10px;">${positionText}</p>
                    <p style="color: #9C27B0; margin-bottom: 20px;">${placeholderData[category]?.title || 'Faculty'}</p>
                    
                    <div style="text-align: left; margin-top: 20px;">
                        <h4 style="color: #FF9800;">About</h4>
                        <p>This is a dedicated faculty member of Sulop National High School Senior High Department. All our teachers are Licensed Professional Teachers (LPT) committed to providing quality education aligned with DepEd's K-12 curriculum.</p>
                        
                        <h4 style="color: #FF9800; margin-top: 20px;">Qualifications</h4>
                        <p>• Licensed Professional Teacher (LPT)</p>
                        <p>• Specialized in respective subject areas</p>
                        <p>• Ongoing professional development</p>
                        
                        <h4 style="color: #FF9800; margin-top: 20px;">Contact</h4>
                        <p>• Email: faculty${index + 1}@snhs.edu.ph</p>
                        <p>• Available during school hours</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.querySelector('.faculty-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add new modal
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Add close event
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.querySelector('.faculty-modal').remove();
    });
    
    // Close on background click
    document.querySelector('.faculty-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.remove();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.faculty-modal');
            if (modal) {
                modal.remove();
                document.removeEventListener('keydown', closeOnEscape);
            }
        }
    });
}

// ===== AUTO-ADVANCE CAROUSELS =====
function startAutoAdvanceCarousels() {
    setInterval(() => {
        Object.keys(carousels).forEach(carouselId => {
            if (carousels[carouselId].items.length > 1) {
                navigateCarousel(carouselId, 'next');
            }
        });
    }, 5000); // Change every 5 seconds
}

// ===== TOUCH SUPPORT FOR CAROUSELS =====
function initializeTouchSupport() {
    document.querySelectorAll('.image-carousel').forEach(carousel => {
        let startX = 0;
        let scrollLeft = 0;
        let isDragging = false;
        
        carousel.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.touches[0].pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
        
        carousel.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        carousel.addEventListener('wheel', (e) => {
            e.preventDefault();
            carousel.scrollLeft += e.deltaY;
        });
    });
}

// ===== KEYBOARD NAVIGATION SUPPORT =====
document.addEventListener('keydown', function(e) {
    // Left arrow key for previous
    if (e.key === 'ArrowLeft') {
        document.querySelectorAll('.carousel-nav-btn.prev-btn').forEach(btn => {
            btn.click();
        });
    }
    
    // Right arrow key for next
    if (e.key === 'ArrowRight') {
        document.querySelectorAll('.carousel-nav-btn.next-btn').forEach(btn => {
            btn.click();
        });
    }
});

// ===== RESIZE HANDLER =====
window.addEventListener('resize', function() {
    // Update carousel positions on resize
    Object.keys(carousels).forEach(carouselId => {
        updateCarouselPosition(carouselId);
    });
});