const meniBtn = document.getElementsByClassName('meni')[0]
const navLinkovi = document.getElementsByClassName('nav-linkovi')[0]

meniBtn.addEventListener('click', ()=> {
    navLinkovi.classList.toggle('active')
})