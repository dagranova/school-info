// ===== SET CURRENT YEAR IN FOOTER =====
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
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
    
    // ===== ACTIVE SECTION INDICATOR - YELLOW LINE UNDER NAV =====
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
            this.style.backgroundColor = '#fff9c4';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#fffde7';
        });
    });
    
    // ===== UPDATE ACTIVE NAV ON SCROLL =====
    window.addEventListener('scroll', updateActiveNavLink);
});
