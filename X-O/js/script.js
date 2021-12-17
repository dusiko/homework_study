const player1 = new Player('', 'X')
const player2 = new Player('', 'O')

function createBoard() {
	// отримуемо данні гравців
	if (Player.firstPush) {
		player1.name = document.querySelectorAll('.intro__form-input')[0].value
		player2.name = document.querySelectorAll('.intro__form-input')[1].value
		// перевіряемо чи данні гравців заповнені
		if (player1.name != '' && player1.name == player2.name)
			return alert('names are same! Enter other name!')
		if (player1.name == '')
			return alert('enter player #1 name!')
		if (player2.name == '')
			return alert('enter player #2 name!')
	}

	Player.firstPush = false
	const body = document.querySelector('body')
	body.innerHTML = ''

	const game = document.createElement('DIV')
	game.classList.add('game')
	body.appendChild(game)

	let div = document.createElement('DIV')
	div.classList.add('container')
	game.appendChild(div)

	const inner = document.createElement('DIV')
	inner.classList.add('game-inner')
	div.appendChild(inner)

	div = document.createElement('h1')
	div.innerText = 'X - O'
	inner.appendChild(div)

	const board = document.createElement('DIV')
	board.classList.add('board')
	for (let i = 0; i < 9; i++) {
		const div = document.createElement('DIV')
		div.classList.add('board__item')
		div.setAttribute('id', i)
		board.appendChild(div)
	}
	div = document.createElement('DIV')
	div.classList.add('cross')
	board.append(div)
	inner.appendChild(board)

	const info = document.createElement('DIV')
	info.classList.add('game-inner__info')
	inner.insertBefore(info, board)
	div = document.createElement('DIV')
	div.innerHTML = `Next move for: <span id="info-name">${player1.name} [ ${player1.type} ]</span>`
	info.append(div)
	div = document.createElement('DIV')
	div.classList.add('info__table')
	div.innerHTML = `
	<div class="info__table-head">
	<h2>winner</h2>
	<h2>neutral</h2>
	<h2>loser</h2>
	</div>
	<div class="info__table-body">
	<p id="w"></p>
	<p id="n">
	<span id="p1"></span>
	<span id="p2"></span>
	</p>
	<p id="l"></p>
	</div>
	`
	info.append(div)
	const p1 = document.querySelector('#p1')
	p1.innerHTML = '[ p1 ] '+player1.name
	const p2 = document.querySelector('#p2')
	p2.innerHTML = '[ p2 ] '+player2.name
	
  const table = document.createElement('TABLE')
  table.classList.add('table-wins')
  inner.appendChild(table)
  table.innerHTML=`
  <tr">
  <td colspan="2">WINS COUNT</td>
  </tr>
  <tr>
  <td>${player1.name}</td>
  <td>${player2.name}</td>
  </tr>
  
  <tr>
  <td class="table-count">${player1.count}</td>
  <td class="table-count">${player2.count}</td>
  </tr>
  `
  const btn = document.createElement('button')
  btn.setAttribute('id','new-try')
  btn.setAttribute('type','button')
  btn.setAttribute('disabled','disabled')
  btn.innerText = 'Next try'
  inner.appendChild(btn)
  
  

	document.querySelector('.board').addEventListener('click', push)
}
function check(player) {
		const win = Player.winCombination.some(val => val.every(n => player.move.includes(n)))
	if (win){
		return true
		
	} else if (Array.from(document.querySelectorAll('.board__item')).map(val => val.innerText).every(v => v != ''))
		return 'draw'
	else {
		const n = document.getElementById('info-name')
		if (Player.step == true){
			n.innerText = player1.name + ` [ ${player1.type} ]`
			n.style.color="orangered"
		} else {
			n.innerText = player2.name + ` [ ${player2.type} ]`
			n.style.color="blue"
		}
	}
}

function push(event) {
	if (!event.target.classList.contains('pushed')) {
	  event.target.classList.add('pushed')
		event.target.style.cursor = "default"
		if (Player.step == true) {
			event.target.innerText = 'X'
			Player.step = false
			player1.move.push(+event.target.getAttribute('id'))
			if (check(player1) == true) {
			  
			
			  let pos = Player.winCombination.filter(val => val.every(n => player1.move.includes(n)))
			  crossWin(pos)
			 
			 const winPos = document.querySelector('#w')
			 const losePos = document.querySelector('#l')
			 const winPlayer = document.querySelector('#p1')
			 const losePlayer = document.querySelector('#p2')
			 player1.count++
			 +document.getElementsByClassName('table-count')[0].innerText++
			 winPos.append(winPlayer)
			 losePos.append(losePlayer)
			 document.querySelector('#n').innerHTML = ''
			 
			 

			} else if (check(player1) == 'draw') {
				alert('draw!!!!!!!!')
			}


		} else {
			event.target.innerText = 'O'
			Player.step = true
			player2.move.push(+event.target.getAttribute('id'))
			if (check(player2) == true) {
			   let pos = Player.winCombination.filter(val => val.every(n => player2.move.includes(n)))
			  crossWin(pos)
			  console.log(pos)
				
			const winPos = document.querySelector('#w')
			 const losePos = document.querySelector('#l')
			 const winPlayer = document.querySelector('#p2')
			 const losePlayer = document.querySelector('#p1')
			 player2.count++
			 +document.getElementsByClassName('table-count')[1].innerText++
			 winPos.append(winPlayer)
			 losePos.append(losePlayer)
			 document.querySelector('#n').innerHTML = ''

			} else if (check(player2) == 'draw') {
				alert('draw!!!!!!!!')
			}
		}
	}
}




