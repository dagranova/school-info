// ===== SULOP NATIONAL HIGH SCHOOL - SENIOR HIGH SCRIPT FILE =====
// This file contains interactive functionality for the SNHS Senior High website

// ===== SET CURRENT YEAR IN FOOTER =====
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // ===== TRACK AND PRINCIPAL POPUP FUNCTIONALITY =====
    // Initialize track card popups
    const trackCards = document.querySelectorAll('.strand-card');
    const principalCard = document.querySelector('.principal-card');
    
    // Track popup hover functionality
    trackCards.forEach(card => {
        const popup = card.querySelector('.track-popup');
        let popupTimeout;
        
        // Show popup on hover (desktop)
        card.addEventListener('mouseenter', function() {
            clearTimeout(popupTimeout);
            popupTimeout = setTimeout(() => {
                if (popup) {
                    popup.style.opacity = '1';
                    popup.style.visibility = 'visible';
                    popup.style.transform = 'translateX(-50%) scale(1)';
                }
            }, 200); // Small delay for better UX
        });
        
        // Hide popup when mouse leaves
        card.addEventListener('mouseleave', function() {
            clearTimeout(popupTimeout);
            if (popup) {
                popup.style.opacity = '0';
                popup.style.visibility = 'hidden';
                popup.style.transform = 'translateX(-50%) scale(0)';
            }
        });
        
        // Click functionality for mobile
        card.addEventListener('click', function(e) {
            // Only activate on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle popup visibility
                if (popup.style.visibility === 'visible') {
                    popup.style.opacity = '0';
                    popup.style.visibility = 'hidden';
                    popup.style.transform = 'translateX(-50%) scale(0)';
                } else {
                    // Close all other popups first
                    closeAllTrackPopups();
                    
                    popup.style.opacity = '1';
                    popup.style.visibility = 'visible';
                    popup.style.transform = 'translateX(-50%) scale(1)';
                    
                    // Add click outside listener
                    setTimeout(() => {
                        document.addEventListener('click', closePopupOnClickOutside);
                    }, 100);
                }
            }
        });
    });
    
    // Principal popup hover functionality
    if (principalCard) {
        const principalPopup = principalCard.querySelector('.principal-popup');
        let principalPopupTimeout;
        
        // Show popup on hover (desktop)
        principalCard.addEventListener('mouseenter', function() {
            clearTimeout(principalPopupTimeout);
            principalPopupTimeout = setTimeout(() => {
                if (principalPopup) {
                    principalPopup.style.opacity = '1';
                    principalPopup.style.visibility = 'visible';
                    principalPopup.style.transform = 'translateX(-50%) scale(1)';
                }
            }, 200);
        });
        
        // Hide popup when mouse leaves
        principalCard.addEventListener('mouseleave', function() {
            clearTimeout(principalPopupTimeout);
            if (principalPopup) {
                principalPopup.style.opacity = '0';
                principalPopup.style.visibility = 'hidden';
                principalPopup.style.transform = 'translateX(-50%) scale(0)';
            }
        });
        
        // Click functionality for mobile
        principalCard.addEventListener('click', function(e) {
            // Only activate on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle popup visibility
                if (principalPopup.style.visibility === 'visible') {
                    principalPopup.style.opacity = '0';
                    principalPopup.style.visibility = 'hidden';
                    principalPopup.style.transform = 'translateX(-50%) scale(0)';
                } else {
                    // Close all track popups first
                    closeAllTrackPopups();
                    
                    principalPopup.style.opacity = '1';
                    principalPopup.style.visibility = 'visible';
                    principalPopup.style.transform = 'translateX(-50%) scale(1)';
                    
                    // Add click outside listener
                    setTimeout(() => {
                        document.addEventListener('click', closePopupOnClickOutside);
                    }, 100);
                }
            }
        });
    }
    
    // Function to close all track popups
    function closeAllTrackPopups() {
        trackCards.forEach(card => {
            const popup = card.querySelector('.track-popup');
            if (popup) {
                popup.style.opacity = '0';
                popup.style.visibility = 'hidden';
                popup.style.transform = 'translateX(-50%) scale(0)';
            }
        });
        
        if (principalCard) {
            const principalPopup = principalCard.querySelector('.principal-popup');
            if (principalPopup) {
                principalPopup.style.opacity = '0';
                principalPopup.style.visibility = 'hidden';
                principalPopup.style.transform = 'translateX(-50%) scale(0)';
            }
        }
    }
    
    // Function to close popup when clicking outside
    function closePopupOnClickOutside(e) {
        const trackPopups = document.querySelectorAll('.track-popup');
        const principalPopup = document.querySelector('.principal-popup');
        
        let isClickInsidePopup = false;
        
        // Check if click is inside any track popup
        trackPopups.forEach(popup => {
            if (popup.contains(e.target)) {
                isClickInsidePopup = true;
            }
        });
        
        // Check if click is inside principal popup
        if (principalPopup && principalPopup.contains(e.target)) {
            isClickInsidePopup = true;
        }
        
        // Check if click is on a track card or principal card
        const isClickOnCard = e.target.closest('.strand-card') || e.target.closest('.principal-card');
        
        // If click is outside popups and not on cards, close all popups
        if (!isClickInsidePopup && !isClickOnCard) {
            closeAllTrackPopups();
            document.removeEventListener('click', closePopupOnClickOutside);
        }
    }
    
    // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjusted offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== ACTIVE SECTION INDICATOR - PINK LINE UNDER NAV =====
    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        let currentSection = '';
        
        // Find which section is currently visible
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for sticky nav
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update nav links - remove active class from all, add to current
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Call on page load
    updateActiveNavLink();
    
    // ===== HIGHLIGHT EDITABLE AREAS ON HOVER =====
    document.querySelectorAll('.editable').forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#E1BEE7';
            this.style.boxShadow = '0 0 8px rgba(156, 39, 176, 0.3)';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#F3E5F5';
            this.style.boxShadow = 'none';
        });
        
        // Make editable areas clickable for potential future editing functionality
        item.addEventListener('click', function() {
            console.log('Editable area clicked:', this.textContent);
            // This could be expanded to allow inline editing in the future
            this.style.borderStyle = 'solid';
            setTimeout(() => {
                this.style.borderStyle = 'dashed';
            }, 500);
        });
    });
    
    // ===== UPDATE ACTIVE NAV ON SCROLL =====
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ===== ANIMATE STRAND CARDS ON SCROLL =====
    function animateStrandCards() {
        const strandCards = document.querySelectorAll('.strand-card');
        
        strandCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.transitionDelay = `${index * 0.1}s`;
                card.classList.add('animated');
            }
        });
    }
    
    // Initial call and on scroll
    animateStrandCards();
    window.addEventListener('scroll', animateStrandCards);
    
    // ===== ENHANCED MAP INTERACTION =====
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(255, 152, 0, 0.25)';
        });
        
        mapContainer.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 6px 20px rgba(255, 152, 0, 0.15)';
        });
    }
    
    // ===== ENROLLMENT INFORMATION TOGGLE =====
    const enrollmentSection = document.querySelector('#contact');
    if (enrollmentSection) {
        const enrollmentInfo = enrollmentSection.querySelector('div[style*="background: linear-gradient(135deg, #F3E5F5"]');
        if (enrollmentInfo) {
            // Make it collapsible on mobile
            const toggleButton = document.createElement('button');
            toggleButton.innerHTML = '<i class="fas fa-chevron-down"></i> Enrollment Details';
            toggleButton.style.cssText = `
                background: linear-gradient(135deg, #9C27B0 0%, #E91E63 100%);
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
                margin-top: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                transition: all 0.3s ease;
            `;
            
            toggleButton.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 12px rgba(156, 39, 176, 0.4)';
            });
            
            toggleButton.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
            
            // Only add toggle on mobile
            if (window.innerWidth <= 768) {
                const originalDisplay = enrollmentInfo.style.display;
                enrollmentInfo.style.display = 'none';
                
                toggleButton.addEventListener('click', function() {
                    if (enrollmentInfo.style.display === 'none') {
                        enrollmentInfo.style.display = 'block';
                        this.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Enrollment Details';
                    } else {
                        enrollmentInfo.style.display = 'none';
                        this.innerHTML = '<i class="fas fa-chevron-down"></i> Enrollment Details';
                    }
                });
                
                enrollmentSection.insertBefore(toggleButton, enrollmentInfo);
            }
        }
    }
    
    // ===== ENHANCE ADMINISTRATION CARDS =====
    const adminCards = document.querySelectorAll('.admin-card');
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
        window.print();
    });
    
    // Add print button to the page
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
        
        // Add tooltip on hover
        schoolLogo.title = 'Click to scroll to top';
    }
    
    // ===== TRACK LINK ENHANCEMENT =====
    // Add click tracking for track links
    document.querySelectorAll('.track-popup-link, .principal-popup-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const trackName = this.closest('.track-popup') ? 
                this.closest('.track-popup').querySelector('.track-popup-title').textContent :
                'Principal Biography';
                
            console.log(`User clicked on: ${trackName}`);
            
            // Optional: Add analytics tracking here
            // trackUserAction(`Clicked ${trackName} link`);
        });
    });
    
    // ===== ADD CSS ANIMATIONS FOR STRAND CARDS =====
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
        
        .strand-card.animated {
            animation: fadeInUp 0.5s ease forwards;
        }
        
        /* Adjust admin grid for 2 cards */
        .admin-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            justify-content: center;
        }
        
        /* Enhanced popup animations */
        @keyframes popupAppear {
            0% {
                opacity: 0;
                transform: translateX(-50%) scale(0.8);
            }
            70% {
                opacity: 1;
                transform: translateX(-50%) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateX(-50%) scale(1);
            }
        }
        
        .track-popup, .principal-popup {
            animation: popupAppear 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        /* Mobile-specific styles for popups */
        @media (max-width: 768px) {
            .track-popup, .principal-popup {
                position: fixed;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) scale(0) !important;
                width: 90% !important;
                max-width: 320px !important;
                z-index: 2000 !important;
                opacity: 0 !important;
                visibility: hidden !important;
                transition: all 0.3s ease !important;
            }
            
            .track-popup.active, .principal-popup.active {
                opacity: 1 !important;
                visibility: visible !important;
                transform: translate(-50%, -50%) scale(1) !important;
            }
            
            .track-popup-arrow, .principal-popup-arrow {
                display: none !important;
            }
            
            /* Overlay for mobile popups */
            .popup-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 1999;
                display: none;
            }
            
            .popup-overlay.active {
                display: block;
            }
        }
        
        @media print {
            nav, .print-button, .back-to-top-button,
            .track-popup, .principal-popup {
                display: none !important;
            }
            
            section {
                break-inside: avoid;
                box-shadow: none !important;
                border: 1px solid #ddd !important;
            }
            
            .strand-card, .admin-card {
                break-inside: avoid;
                page-break-inside: avoid;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===== MOBILE POPUP OVERLAY =====
    // Create overlay for mobile popups
    if (window.innerWidth <= 768) {
        const overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        overlay.addEventListener('click', function() {
            closeAllTrackPopups();
            this.classList.remove('active');
        });
        document.body.appendChild(overlay);
        
        // Update popup close function for mobile
        const originalCloseAllTrackPopups = closeAllTrackPopups;
        closeAllTrackPopups = function() {
            originalCloseAllTrackPopups();
            overlay.classList.remove('active');
        };
        
        // Update individual popup showing for mobile
        trackCards.forEach(card => {
            const originalClickHandler = card.onclick;
            card.onclick = function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const popup = this.querySelector('.track-popup');
                    if (popup.style.visibility === 'visible') {
                        closeAllTrackPopups();
                    } else {
                        closeAllTrackPopups();
                        popup.style.opacity = '1';
                        popup.style.visibility = 'visible';
                        popup.style.transform = 'translate(-50%, -50%) scale(1)';
                        overlay.classList.add('active');
                    }
                } else if (originalClickHandler) {
                    originalClickHandler.call(this, e);
                }
            };
        });
        
        if (principalCard) {
            const originalPrincipalClickHandler = principalCard.onclick;
            principalCard.onclick = function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const popup = this.querySelector('.principal-popup');
                    if (popup.style.visibility === 'visible') {
                        closeAllTrackPopups();
                    } else {
                        closeAllTrackPopups();
                        popup.style.opacity = '1';
                        popup.style.visibility = 'visible';
                        popup.style.transform = 'translate(-50%, -50%) scale(1)';
                        overlay.classList.add('active');
                    }
                } else if (originalPrincipalClickHandler) {
                    originalPrincipalClickHandler.call(this, e);
                }
            };
        }
    }
});

// ===== ADDITIONAL FUNCTIONALITY FOR SENIOR HIGH SPECIFIC FEATURES =====

// Track popup analytics function
function trackPopupInteraction(trackName, action) {
    console.log(`${action} on ${trackName} popup`);
    // Could be expanded to send data to analytics service
}

// Function to simulate strand information modal
function showStrandInfo(strandName) {
    const strandInfo = {
        'STEM': 'Science, Technology, Engineering, and Mathematics - prepares students for college degrees in science and technology-related courses',
        'ASH': 'Arts and Social Sciences - focuses on human behavior, literature, arts, and social sciences',
        'ABM': 'Accountancy, Business, and Management - prepares students for careers in business and entrepreneurship',
        'GAS': 'General Academic Strand - provides flexibility for students who are undecided on their career path',
        'TVL': 'Technical-Vocational-Livelihood - develops technical skills for immediate employment after graduation'
    };
    
    if (strandInfo[strandName]) {
        // Create modal for strand info
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 15px 40px rgba(156, 39, 176, 0.3);
            z-index: 3000;
            max-width: 400px;
            width: 90%;
            border: 3px solid #9C27B0;
            text-align: center;
        `;
        
        modal.innerHTML = `
            <h3 style="color: #9C27B0; margin-bottom: 15px;">${strandName}</h3>
            <p style="margin-bottom: 20px; line-height: 1.6;">${strandInfo[strandName]}</p>
            <button onclick="this.parentElement.remove()" style="
                background: linear-gradient(135deg, #9C27B0 0%, #E91E63 100%);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
            ">Close</button>
        `;
        
        // Add overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 2999;
        `;
        overlay.onclick = function() {
            modal.remove();
            overlay.remove();
        };
        
        document.body.appendChild(overlay);
        document.body.appendChild(modal);
    }
}

// Example function for future strand selection quiz
function startStrandQuiz() {
    console.log('Starting strand selection quiz...');
    // This would open a modal or redirect to a quiz page
    alert('Strand selection quiz feature coming soon!');
}

// Example function for enrollment inquiry
function submitEnquiry() {
    console.log('Submitting enrollment enquiry...');
    // This would collect form data and send to server
    alert('Enquiry submission feature coming soon!');
}

// Handle window resize for responsive popups
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Close all popups on resize
        document.querySelectorAll('.track-popup, .principal-popup').forEach(popup => {
            popup.style.opacity = '0';
            popup.style.visibility = 'hidden';
            popup.style.transform = 'translateX(-50%) scale(0)';
        });
        
        // Update mobile overlay if needed
        const overlay = document.querySelector('.popup-overlay');
        if (overlay && window.innerWidth > 768) {
            overlay.classList.remove('active');
        }
    }, 250);
});

// Keyboard accessibility for popups
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close all popups when Escape is pressed
        document.querySelectorAll('.track-popup, .principal-popup').forEach(popup => {
            popup.style.opacity = '0';
            popup.style.visibility = 'hidden';
            popup.style.transform = 'translateX(-50%) scale(0)';
        });
        
        const overlay = document.querySelector('.popup-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }
});