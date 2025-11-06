// Portfolio Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initTypewriter();
    initScrollAnimations();
    initMobileMenu();
    initProjectCarousel();
    initSkillsChart();
    initContactForm();
    initTimelineAnimation();
    
    // Typewriter effect for hero name
    function initTypewriter() {
        const typed = new Typed('#typed-name', {
            strings: ['Hager Omar', 'Flutter Developer', 'Mobile Creator'],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    // Scroll-triggered animations
    function initScrollAnimations() {
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
        
        // Animate skill bars when in view
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }
    
    // Mobile menu functionality
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }
    
    // Project carousel
    function initProjectCarousel() {
        const splide = new Splide('#projects-carousel', {
            type: 'loop',
            perPage: 1,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '1rem'
                }
            }
        });
        
        splide.mount();
        
        // Add hover effects to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                anime({
                    targets: card,
                    scale: 1.02,
                    rotateX: 2,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                anime({
                    targets: card,
                    scale: 1,
                    rotateX: 0,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });
    }
    
    // Skills radar chart
    function initSkillsChart() {
        const chartDom = document.getElementById('skills-chart');
        const myChart = echarts.init(chartDom);
        
        const option = {
            title: {
                text: 'Technical Skills Overview',
                left: 'center',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#2c3e50'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            radar: {
                indicator: [
                    { name: 'Flutter/Dart', max: 100 },
                    { name: 'Firebase', max: 100 },
                    { name: 'REST APIs', max: 100 },
                    { name: 'Clean Architecture', max: 100 },
                    { name: 'State Management', max: 100 },
                    { name: 'Payment Integration', max: 100 },
                    { name: 'UI/UX Design', max: 100 },
                    { name: 'Git/Version Control', max: 100 }
                ],
                shape: 'polygon',
                splitNumber: 4,
                axisName: {
                    color: '#4ecdc4',
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                splitLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(78, 205, 196, 0.1)', 'rgba(255, 107, 107, 0.1)']
                    }
                }
            },
            series: [{
                name: 'Skills',
                type: 'radar',
                data: [{
                    value: [95, 90, 85, 88, 92, 80, 75, 85],
                    name: 'Current Level',
                    areaStyle: {
                        color: 'rgba(78, 205, 196, 0.3)'
                    },
                    lineStyle: {
                        color: '#4ecdc4',
                        width: 3
                    },
                    itemStyle: {
                        color: '#4ecdc4',
                        borderColor: '#fff',
                        borderWidth: 2
                    }
                }],
                animationDuration: 2000,
                animationEasing: 'cubicOut'
            }]
        };
        
        myChart.setOption(option);
        
        // Responsive chart
        window.addEventListener('resize', () => {
            myChart.resize();
        });
        
        // Add interactive hover effects
        myChart.on('mouseover', function(params) {
            if (params.componentType === 'series') {
                myChart.setOption({
                    series: [{
                        data: [{
                            value: [95, 90, 85, 88, 92, 80, 75, 85],
                            name: 'Current Level',
                            areaStyle: {
                                color: 'rgba(255, 107, 107, 0.4)'
                            },
                            lineStyle: {
                                color: '#ff6b6b',
                                width: 4
                            }
                        }]
                    }]
                });
            }
        });
        
        myChart.on('mouseout', function(params) {
            myChart.setOption({
                series: [{
                    data: [{
                        value: [95, 90, 85, 88, 92, 80, 75, 85],
                        name: 'Current Level',
                        areaStyle: {
                            color: 'rgba(78, 205, 196, 0.3)'
                        },
                        lineStyle: {
                            color: '#4ecdc4',
                            width: 3
                        }
                    }]
                }]
            });
        });
    }
    
    // Contact form functionality
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        const formInputs = contactForm.querySelectorAll('.form-input');
        
        // Add focus animations to form inputs
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                anime({
                    targets: input,
                    scale: 1.02,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            });
            
            input.addEventListener('blur', () => {
                anime({
                    targets: input,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            });
        });
        
        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Add success animation
                anime({
                    targets: contactForm,
                    scale: [1, 1.02, 1],
                    duration: 600,
                    easing: 'easeOutElastic(1, .8)'
                });
            }, 2000);
        });
    }
    
    // Timeline animation
    function initTimelineAnimation() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                        
                        // Add staggered animation
                        anime({
                            targets: entry.target.querySelector('.card-hover'),
                            translateY: [30, 0],
                            opacity: [0, 1],
                            duration: 800,
                            delay: index * 200,
                            easing: 'easeOutQuad'
                        });
                    }, index * 300);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });
        
        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }
    
    // Utility function for notifications
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-teal text-white' : 'bg-coral text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add floating animation to shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        anime({
            targets: shape,
            translateY: [0, -20, 0],
            rotate: [0, 360],
            duration: 6000 + (index * 1000),
            loop: true,
            easing: 'easeInOutSine',
            delay: index * 1000
        });
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button, .bg-teal, .border-2');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-bg');
        const shapes = document.querySelectorAll('.shape');
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        shapes.forEach((shape, index) => {
            const speed = 0.2 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add loading animation
    window.addEventListener('load', () => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            anime({
                targets: heroContent.children,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: anime.stagger(200),
                easing: 'easeOutQuad'
            });
        }
    });
    
    // Add cursor trail effect (optional enhancement)
    let cursorTrail = [];
    const trailLength = 8;
    
    document.addEventListener('mousemove', (e) => {
        cursorTrail.push({ x: e.clientX, y: e.clientY });
        
        if (cursorTrail.length > trailLength) {
            cursorTrail.shift();
        }
        
        // Create subtle trail effect on hero section
        const heroSection = document.querySelector('.hero-bg');
        if (heroSection && cursorTrail.length > 1) {
            const trail = document.createElement('div');
            trail.className = 'absolute w-2 h-2 bg-teal rounded-full opacity-20 pointer-events-none';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.transform = 'translate(-50%, -50%)';
            
            heroSection.appendChild(trail);
            
            anime({
                targets: trail,
                scale: [1, 0],
                opacity: [0.2, 0],
                duration: 1000,
                easing: 'easeOutQuad',
                complete: () => {
                    if (trail.parentNode) {
                        trail.parentNode.removeChild(trail);
                    }
                }
            });
        }
    });
    
    console.log('Portfolio initialized successfully! 🚀');
});