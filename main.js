const burgerBtn = document.querySelector('.burger')
const burgerMenu = document.querySelector('.header__navigation--mobile')
const heroEl = document.querySelector('.hero')

burgerBtn.addEventListener('click', e => {
	burgerMenu.classList.toggle('show')
	burgerBtn.classList.toggle('transform')
})

const artWorldForm = document.querySelector('.art-world-form')
const artWorldInput = document.querySelector('.art-world-form__mail-input')

artWorldForm.addEventListener('submit', e => {
	e.preventDefault()
	if (artWorldInput.value === '') {
		alert('Введите email правильно (address@.com)')
	} else {
		console.log('Форма отработала, убрать preventDefault')
		artWorldInput.value = ''
		artWorldInput.style.backgroundColor = 'transparent'
	}
})

artWorldForm.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		e.preventDefault()
		console.log('Форма отработала по клавише enter')
		artWorldInput.value = ''
		artWorldInput.style.backgroundColor = 'transparent'
	}
})

artWorldInput.addEventListener('focus', e => {
	artWorldInput.style.backgroundColor = '#dddddd'
})

artWorldInput.addEventListener('blur', e => {
	artWorldInput.style.backgroundColor = 'transparent'
})

document.addEventListener('DOMContentLoaded', function () {
	const blocks = document.querySelectorAll('.hidden-block')

	function visibleFunc(block) {
		const rect = block.getBoundingClientRect()
		const windowHeight = window.innerHeight

		if (rect.top < windowHeight - 200) {
			block.classList.add('hidden-block--visible')
			block.classList.remove('hidden-block')
		}
	}

	document.addEventListener('scroll', function () {
		blocks.forEach(block => {
			if (block) visibleFunc(block)
		})
	})
})
