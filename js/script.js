document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.querySelector('.home .btn');

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const roadmapsSection = document.querySelector(this.getAttribute('href'));
            if (roadmapsSection) {
                roadmapsSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
});
