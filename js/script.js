
// JavaScript to handle scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedItems = document.querySelectorAll('.animated-card');

    const isElementTopInViewport = (el) => {
         const rect = el.getBoundingClientRect();
         return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
    }

    const addClassOnScroll = () => {
        animatedItems.forEach(item => {
            if (isElementTopInViewport(item)) {
                item.classList.add('is-visible');
            }
        });
    };

    // Initial check on page load
    addClassOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', addClassOnScroll);
});
