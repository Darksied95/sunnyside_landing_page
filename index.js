const hamburger = document.getElementById('toggle')
const nav = document.getElementById('header-nav')
hamburger.addEventListener('click', () => {
    nav.style.opacity = nav.style.opacity == 1 ? 0 : 1
    console.log(nav.style.opacity);
})