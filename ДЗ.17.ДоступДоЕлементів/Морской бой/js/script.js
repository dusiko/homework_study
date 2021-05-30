
let winCount = 3
function showHideRules() {
	const rules = document.querySelector('.rules')
	if (rules.style.display == "none") {
		rules.style.display = "block"
		document.getElementById('showHide').innerText = 'Сховати'
	} else {
		rules.style.display = "none"
		document.getElementById('showHide').innerText = 'Показати'
	}
}

function pushGame() {
	this.tryCount = 3
	let enemyShips = []
	let mark
	this.divInfo = document.createElement('div')
	divInfo.setAttribute('class', 'info')
	const infoTryCount = document.createElement('p')
	infoTryCount.innerHTML = `У вас залишилось <span><b>${tryCount}</b></span> спроби`
	const infoShipsCount = document.createElement('p')
	divInfo.appendChild(infoTryCount)
	divInfo.appendChild(infoShipsCount)

	const battleField = document.createElement('div')
	battleField.setAttribute('class', 'battle-field')
	this.container = document.querySelector('.container')
	container.appendChild(divInfo)
	container.appendChild(battleField)
	const difficultValue = document.querySelector('select').value



	// формуемо легкий рівень
	if (difficultValue == 1) {
		winCount = 1
		infoShipsCount.innerHTML = `Залишилось воржих кораблів: <b>${winCount}</b> шт.`
		for (i = 0; i < 5; i++) {
			const ship = document.createElement('div')
			ship.setAttribute('class', 'ships')
			ship.innerText = i + 1
			battleField.appendChild(ship)
		}
		const ships = document.querySelectorAll('.ships')
		mark = 0 + Math.floor(Math.random() * (4 - 0 + 1))
		ships[mark].setAttribute('id', 'enemy-ship')

		//формуемо нормальний ривень
	} else if (difficultValue == 2) {
		winCount = 2
		infoShipsCount.innerHTML = `Залишилось воржих кораблів: <b>${winCount}</b> шт.`
		for (i = 0; i < 7; i++) {
			const ship = document.createElement('div')
			ship.setAttribute('class', 'ships')
			ship.innerText = i + 1
			battleField.appendChild(ship)
		}
		const ships = document.querySelectorAll('.ships')
		for (i = 0; i < 2; i++) {
			do {
				mark = 0 + Math.floor(Math.random() * (6 - 0 + 1))
			} while (mark == enemyShips[0] || mark == enemyShips[1] || mark == enemyShips[2])
			enemyShips.push(mark)
			ships[mark].setAttribute('id', `enemy-ship${i + 1}`)
		}

		// формуемо важкий ривень
	} else {
		winCount = 3
		infoShipsCount.innerHTML = `Залишилось воржих кораблів: <b>${winCount}</b> шт.`
		for (i = 0; i < 9; i++) {
			const ship = document.createElement('div')
			ship.setAttribute('class', 'ships')
			ship.innerText = i + 1
			battleField.appendChild(ship)
		}
		const ships = document.querySelectorAll('.ships')
		for (i = 0; i < 3; i++) {
			do {
				mark = 0 + Math.floor(Math.random() * (8 - 0 + 1))
			} while (mark == enemyShips[0] || mark == enemyShips[1] || mark == enemyShips[2])
			enemyShips.push(mark)
			ships[mark].setAttribute('id', `enemy-ship${i + 1}`)
		}
	}
	document.querySelector('.start').style.display = 'none'
}

// Попадания

document.querySelector('.container').addEventListener('click', hit)
function hit(event) {
	if (event.target.className == 'ships' && event.target.hasAttribute('id') && event.target.className != 'targeted') {
		event.target.setAttribute('class', 'targeted')
		event.target.removeAttribute('id')
		winCount--
		const infoShipsCount = document.querySelectorAll('.info p')[1]
		infoShipsCount.innerHTML = `Залишилось воржих кораблів: <b>${winCount}</b> шт.`
		if (winCount == 0) {
			finish()
		}
	} else if (event.target.className == 'ships' && event.target.className != 'missed') {
		tryCount--
		event.target.setAttribute('class', 'missed')
		const infoTryCount = document.querySelectorAll('.info p')[0]
		infoTryCount.innerHTML = `У вас залишилось <b><span>${tryCount}</span></b> спроби`
		if (tryCount == 2) {
			let span = document.querySelector('.info span')
			span.style.color = 'yellow'
		}
		if (tryCount <= 1) {
			document.querySelector('.info > p').innerHTML = `У вас залишилась <span><b>${tryCount}</b></span> спроба`
			span = document.querySelector('.info span')
			span.style.color = 'red'
		} if (tryCount == 0) {
			finish()
		}
	}
}

function finish() {
	const div = document.createElement('DIV')
	div.setAttribute('class', 'finish')
	const span = document.createElement('span')
	const btn = document.createElement('button')
	btn.setAttribute('type', 'button')
	btn.innerText = 'Запустити ще раз'
	btn.setAttribute('onclick', 'start()')
	this.container.appendChild(div)
	this.divInfo.appendChild(span)
	div.appendChild(btn)
	this.container.removeEventListener('click', hit)
	if (winCount == 0) {
		span.innerHTML = `Вітаємо! <br>Ви перемогли!`
		span.style.fontWeight = 'bold'
		span.style.fontSize = '24px'


	} if (tryCount == 0) {
		span.innerText = 'ви програли :('
		span.style.color = 'red'
		span.style.fontWeight = 'bold'
		span.style.fontSize = '40px'

	}
}
function start() {
	document.querySelector('.battle-field').remove()
	document.querySelector('.info').remove()
	document.querySelector('.rules').style.display = 'none'
	document.getElementById('showHide').innerText = 'Показати'
	document.querySelector('.start').style.display = 'block'
	document.querySelector('.finish').remove()
	this.container.addEventListener('click', hit)
}
