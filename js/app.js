const headerNav = document.querySelector('.header-nav')
let sticky = headerNav.offsetTop
window.addEventListener("scroll", () => {
    handleHeaderNav()
})

const handleHeaderNav = () => {
    if (window.pageYOffset >= sticky) {
        headerNav.classList.add("sticky")
    } else {
        headerNav.classList.remove("sticky")
    }
}

const signForm = document.querySelector('.sign-up-form')
const label = document.querySelector('.input-placeholder')

signForm.addEventListener("focusin", () => {
    signForm.classList.add("active1")
})
signForm.addEventListener("focusout", ()=> {
    signForm.classList.remove("active1")
})
