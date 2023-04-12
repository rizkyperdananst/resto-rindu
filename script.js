// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
     nav.classList.toggle('slide');
})

// Scroll To Top
const toTop = document.querySelector(".to-top");
  
window.addEventListener("scroll", () => {
     if (window.pageYOffset > 100) {
         toTop.classList.add("active");
     } else {
         toTop.classList.remove("active");
     }
})

// Scroll
const scroll = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const scrolled = ( scrollTop / ( scrollHeight - clientHeight ) * 100 );

    scroll.style.width = `${scrolled}%`;
});