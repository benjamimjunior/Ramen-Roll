// Scroll horizontal
const gallery = document.querySelector('.bowls-gallery');

if (gallery) {
    let targetScroll = 0;
    let currentScroll = 0;
    let animating = false;

    gallery.addEventListener('wheel', (e) => {
        e.preventDefault();
        targetScroll += e.deltaY * 1.2; // velocidade
        targetScroll = Math.max(0, Math.min(targetScroll, gallery.scrollWidth - gallery.clientWidth));

        if (!animating) animate();
    }, { passive: false });

    function animate() {
        animating = true;
        currentScroll += (targetScroll - currentScroll) * 0.1; //(mais baixo = mais lento)

        gallery.scrollLeft = currentScroll;

        if (Math.abs(targetScroll - currentScroll) > 0.1) {
            requestAnimationFrame(animate);
        } else {
            gallery.scrollLeft = targetScroll;
            animating = false;
        }
    }
}

// Menu hamburger (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.navigation');

if (navToggle && navigation) {
    navToggle.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('is-open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar menu on click
    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}