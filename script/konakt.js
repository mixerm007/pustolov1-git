const meniBtn = document.getElementsByClassName('meni')[0]
const navLinkovi = document.getElementsByClassName('nav-linkovi')[0]

meniBtn.addEventListener('click', ()=> {
    navLinkovi.classList.toggle('active')
})

const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
}
)

function myFunction() {
    alert('Društvene mreže trenutno nisu dostupne.')
}