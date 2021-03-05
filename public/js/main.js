(function() {
    if (window.scrollY > 600) {
        $("nav").removeClass('invisible');
    } else {
        $("nav").addClass('invisible');
    }
})();

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        $("nav").removeClass('invisible');
    } else {
        $("nav").addClass('invisible');
    }
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    reset: true
});

// const left = ScrollReveal({
//     origin: 'left',
//     distance: '50px',
//     duration: 1000
// });

sr.reveal('.scroll-title', {})
sr.reveal('.first', { delay: 500 })
sr.reveal('.title', { delay: 1500 })
sr.reveal('.title-statement', { delay: 2000 })
sr.reveal('.home_buttons', { delay: 2500, interval: 500 })
sr.reveal('.social-icon', { delay: 2500, interval: 500 })

sr.reveal('.about-img', {})
sr.reveal('.about-main', { delay: 200 })
sr.reveal('.about-quote', { interval: 200 })

sr.reveal('.card', { delay: 200 })

sr.reveal('.contact-form', {})
sr.reveal('.form-control', { delay: 200 })
sr.reveal('.info', { inteval: 200 })

sr.reveal('footer', {})