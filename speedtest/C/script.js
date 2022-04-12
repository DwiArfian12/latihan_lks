const red = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const alpha = document.querySelector('#alpha')
const color = document.querySelector('.color')

red.addEventListener('input', function(){
	let r = parseInt(red.value)
	let g = parseInt(green.value)
	let b = parseInt(blue.value)
	let a = parseFloat(alpha.value)

	let result = r + g + b

	color.style.backgroundColor = 'rgba('+r+','+g+','+b+','+a+')'
	color.innerHTML = 'rgba('+r+','+g+','+b+','+a+')'

	if(result > 480 || a < 0.5){
		color.style.color = '#000'
	} else {
		color.style.color = '#fff'
	}
})
green.addEventListener('input', function(){
	let r = parseInt(red.value)
	let g = parseInt(green.value)
	let b = parseInt(blue.value)
	let a = parseFloat(alpha.value)

	let result = r + g + b

	color.style.backgroundColor = 'rgba('+r+','+g+','+b+','+a+')'
	color.innerHTML = 'rgba('+r+','+g+','+b+','+a+')'

	if(result > 480 || a < 0.5){
		color.style.color = '#000'
	} else {
		color.style.color = '#fff'
	}
})
blue.addEventListener('input', function(){
	let r = parseInt(red.value)
	let g = parseInt(green.value)
	let b = parseInt(blue.value)
	let a = parseFloat(alpha.value)

	let result = r + g + b

	color.style.backgroundColor = 'rgba('+r+','+g+','+b+','+a+')'
	color.innerHTML = 'rgba('+r+','+g+','+b+','+a+')'

	if(result > 480 || a < 0.5){
		color.style.color = '#000'
	} else {
		color.style.color = '#fff'
	}
})
alpha.addEventListener('input', function(){
	let r = parseInt(red.value)
	let g = parseInt(green.value)
	let b = parseInt(blue.value)
	let a = parseFloat(alpha.value)

	let result = r + g + b

	color.style.backgroundColor = 'rgba('+r+','+g+','+b+','+a+')'
	color.innerHTML = 'rgba('+r+','+g+','+b+','+a+')'

	if(result > 480 || a < 0.5){
		color.style.color = '#000'
	} else {
		color.style.color = '#fff'
	}
})