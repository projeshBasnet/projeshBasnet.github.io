let menutoggler = document.querySelector('.menu-toggler')
let body = document.querySelector('body')

menutoggler.addEventListener('click', ()=>{
    body.classList.toggle('open')
})

// scroll
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
})
sr.reveal('.animate-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
})