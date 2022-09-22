const shield = document.querySelector('.main__doctor-strange--shield')
const img1 = document.querySelector('.header__text-img-1')
const img2 = document.querySelector('.header__text-img-2')
const btn = document.querySelector('.footer__btn')

shield.style.opacity = '0'

img1.style.opacity = '0'

img2.style.opacity = '0'

setTimeout(() => {
    img1.style.opacity = '1'
}, 7750);

setTimeout(() => {
    img2.style.opacity = '1'
}, 9750);

btn.style.opacity = '0'

setTimeout(() => {
    btn.style.opacity = '1'
}, 9750);

const modal = document.querySelector('.modal')
const nameInput = document.getElementById('modal__name')
const emailInput = document.getElementById('modal__email')

btn.addEventListener('click', () => {
    modal.style.display = 'grid'
})

window.addEventListener('click', (event) => {
    if (event.target !== modal && event.target !== btn && event.target !== nameInput && event.target !== emailInput) {
        modal.style.display = 'none'
    }
})