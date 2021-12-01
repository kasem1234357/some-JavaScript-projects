const shapes = [...document.querySelectorAll('.shape')]
const button = document.querySelector('[data-btn]')
const num =[100,80,60,40,20,0]
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const setAngles = () => {
	shapes.forEach((shape,index) => {
		const o = shape.clientWidth / 2
		const h =100 + num[index]
		console.log(h)
		const radians = Math.asin(o / h)

		shape.style.setProperty('--h', `${h}px`)
		shape.style.setProperty('--angle', `${radians}rad`)
	})
}

setAngles()

button.addEventListener('click', setAngles)
