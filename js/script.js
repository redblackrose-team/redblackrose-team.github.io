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

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = searchInput.value.toUpperCase();
            let roadmapsContainer = document.querySelector('.roadmaps-container');
            let roadmaps = roadmapsContainer.getElementsByClassName('roadmaps-card');

            for (let i = 0; i < roadmaps.length; i++) {
                let h4 = roadmaps[i].getElementsByTagName('h4')[0];
                if (h4) {
                    let txtValue = h4.textContent || h4.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        roadmaps[i].style.display = '';
                    } else {
                        roadmaps[i].style.display = 'none';
                    }
                }
            }
        });
    }

    // Back to top button
    let mybutton = document.getElementById("back-to-top-btn");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
});
