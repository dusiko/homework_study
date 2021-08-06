let gamesParameters = {
  'difficultValue': null,
  'winCount': 3,
  'tryCount': 3,
  'enemyShips': [],
  'ships': [],
  'mark': 0,
}


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
  //
	this.divInfo = document.createElement('div')
	divInfo.setAttribute('class', 'info')
	const infoTryCount = document.createElement('p')
	for (i = 0; i < 3; i++) {
		const lives = document.createElement('IMG')
		lives.setAttribute('src', 'img/heart.png')
		infoTryCount.appendChild(lives)
	}
	const infoShipsCount = document.createElement('p')
	divInfo.appendChild(infoTryCount)
	divInfo.appendChild(infoShipsCount)

	const battleField = document.createElement('div')
	battleField.setAttribute('class', 'battle-field')
	this.container = document.querySelector('.container')
	container.appendChild(divInfo)
	container.appendChild(battleField)
	gamesParameters.difficultValue = document.querySelector('select').value

	// формуемо легкий рівень
	if (gamesParameters.difficultValue == 1) {
		gamesParameters.winCount = 1
		infoShipsCount.innerHTML = `Залишилось воржих кораблів: <b>${gamesParameters.winCount}</b> шт.`
		for (i = 0; i < 5; i++) {
			const ship = document.createElement('div')
			ship.setAttribute('class', 'ships')
			ship.innerText = i + 1
			battleField.appendChild(ship)
		}
		gamesParameters.ships = document.querySelectorAll('.ships')
		gamesParameters.mark = 0 + Math.floor(Math.random() * (4 - 0 + 1))
		
		gamesParameters.enemyShips.push(gamesParameters.ships[gamesParameters.mark])
		
	//формуемо нормальний ривень
	} else if (gamesParameters.difficultValue == 2) {
		gamesParameters.winCount = 2
		infoShipsCount.innerHTML = `Залишилось воржих кораблів: <b>${gamesParameters.winCount}</b> шт.`
		for (i = 0; i < 7; i++) {
			const ship = document.createElement('div')
			ship.setAttribute('class', 'ships')
			ship.innerText = i + 1
			battleField.appendChild(ship)
		}
		gamesParameters.ships = document.querySelectorAll('.ships')

		for (i = 0; i < 2; i++) {
			do {
				gamesParameters.mark = 0 + Math.floor(Math.random() * (6 - 0 + 1))
			} while (gamesParameters.ships[gamesParameters.mark] == gamesParameters.enemyShips[0] || gamesParameters.ships[gamesParameters.mark] == gamesParameters.enemyShips[1] )
			
			gamesParameters.enemyShips.push(gamesParameters.ships[gamesParameters.mark])
		}
		
		// формуемо важкий ривень
	} else {
		gamesParameters.winCount = 3
		infoShipsCount.innerHTML = `Залишилось воржих кораблів: <b>${gamesParameters.winCount}</b> шт.`
		for (i = 0; i < 9; i++) {
			const ship = document.createElement('div')
			ship.setAttribute('class', 'ships')
			ship.innerText = i + 1
			battleField.appendChild(ship)
		}
		gamesParameters.ships = document.querySelectorAll('.ships')
		for (i = 0; i < 3; i++) {
			do {
			gamesParameters.mark = 0 + Math.floor(Math.random() * (8 - 0 + 1))
			} while (gamesParameters.ships[gamesParameters.mark] == gamesParameters.enemyShips[0] || gamesParameters.ships[gamesParameters.mark] == gamesParameters.enemyShips[1] || gamesParameters.ships[gamesParameters.mark] == gamesParameters.enemyShips[2])
			  
	  gamesParameters.enemyShips.push(gamesParameters.ships[gamesParameters.mark])
		}
	}
	document.querySelector('.start').style.display = 'none'
}

// Попадания

document.querySelector('.container').addEventListener('click', hit)
function hit(event) {

if (event.target.className == 'ships' && event.target.className != 'targeted'){
  
 const areYouKill = gamesParameters.enemyShips.some(val => event.target == val)
 
 if (areYouKill == true){
		event.target.setAttribute('class', 'targeted')

		gamesParameters.winCount--
		const infoShipsCount = document.querySelectorAll('.info p')[1]
		infoShipsCount.innerHTML = `Залишилось воржих кораблів: <b>${gamesParameters.winCount}</b> шт.`
		if (gamesParameters.winCount == 0) {
			finish()
		}
	} else if (event.target.className == 'ships' && event.target.className != 'missed') {
		event.target.setAttribute('class', 'missed')
		const hearts = document.querySelectorAll('.info p img')
		hearts[gamesParameters.tryCount - 1].setAttribute('class', 'fade')
		gamesParameters.tryCount--
		if (gamesParameters.tryCount == 0) {
			finish()
		}
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
	if (gamesParameters.winCount == 0) {
		span.innerHTML = `Вітаємо!<br>Ви перемогли!`
		span.style.fontWeight = 'bold'
		span.style.fontSize = '35px'


	} if (gamesParameters.tryCount == 0) {
		span.innerText = 'ви програли :('
		span.style.color = 'red'
		span.style.fontWeight = 'bold'
		span.style.fontSize = '40px'
		for (i = 0; i < gamesParameters.enemyShips.length; i++){
		  if(!gamesParameters.enemyShips[i].classList.contains('targeted'))
		  gamesParameters.enemyShips[i].style.backgroundColor = 'yellow'
		 } 
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
	gamesParameters.tryCount = 3
	gamesParameters.enemyShips = []
	gamesParameters.ships = null
}
