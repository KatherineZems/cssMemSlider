const images = document.querySelectorAll('.slider__image')
const buttons = document.querySelectorAll('.slider__button')
const controls = document.querySelectorAll('.slider__control')
const descriptions = document.querySelectorAll('.slider__description')

buttons.forEach((button, ind) => button.addEventListener('click', () => {
  images.forEach(img => {
    img.classList.remove('slider__image_active')
  })
  images[ind].classList.add('slider__image_active', 'appearance')

  descriptions.forEach(desc => {
    desc.classList.remove('slider__description_active')
  })
  descriptions[ind].classList.add('slider__description_active', 'appearance')

  controls.forEach(cont => {
    cont.classList.remove('slider__control_active')
  })
  controls[ind].classList.add('slider__control_active')
}))