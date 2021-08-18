let infoItems = {
	'board': document.getElementById('board'),
	'itemsNumsArr' : [],
	'moveCount' : 0,
	
}
let cords = {}

function createGameboard() {
	// формую массив доски
	infoItems['boardArr'] = []
	let count = 1
	for (i = 0; i < 4; i++) {
		let row = []
		for (k = 0; k < 4; k++) {
			row.push(count)
			count++
			if (count === 16) count = 'empty'
		}
		infoItems.boardArr.push(row)
	}
	// формуем доску
	count = 1
	for (i = 1; i <= infoItems.boardArr.length; i++) {
		for (k = 1; k <= 4; k++) {
			const item = document.createElement('DIV')
			item.classList.add('items')
			item.setAttribute('data-y', i)
			item.setAttribute('data-x', k)
			if (count < 16){
			do{
			  infoItems.num = 1 + Math.floor(Math.random() * (15 + 1 - 1))
			} while (infoItems.itemsNumsArr.includes(infoItems.num))
			infoItems.itemsNumsArr.push(infoItems.num)
		  item.innerText = infoItems.num
			} else
				item.classList.add('empty')
			infoItems.board.appendChild(item)
			count++
		}
	}
}

createGameboard()
infoItems.board.addEventListener('click', moveItem)

function moveItem(event) {
	if (event.target.classList.contains('items') && !event.target.classList.contains('empty')) {
		cords['empty'] = document.querySelector('.empty')
		cords.xTarget = +event.target.dataset.x;
		cords.yTarget = +event.target.dataset.y;
		cords.xEmpty = +cords.empty.dataset.x;
		cords.yEmpty = +cords.empty.dataset.y;
		
		if (cords.xTarget === cords.xEmpty && cords.yTarget === cords.yEmpty - 1 && cords.yTarget > 0)
		moveIf()
			
		if (cords.xTarget === cords.xEmpty - 1 && cords.yTarget === cords.yEmpty && cords.xTarget > 0)
		moveIf()
		
		if (cords.xTarget === cords.xEmpty + 1 && cords.yTarget === cords.yEmpty && cords.xTarget < 5) 
		moveIf()

		if (cords.xTarget === cords.xEmpty && cords.yTarget === cords.yEmpty + 1 && cords.yTarget < 5) 
		moveIf()
		
		check()
	}
}

function moveIf(){
			event.target.setAttribute('data-y', cords.yEmpty)
			event.target.setAttribute('data-x', cords.xEmpty)
			cords.empty.setAttribute('data-x', cords.xTarget)
			cords.empty.setAttribute('data-y', cords.yTarget)
			let itemNextSubl = event.target.nextSibling
			if (itemNextSubl != null && !itemNextSubl.classList.contains('empty')) {
				cords.empty.replaceWith(event.target)
				infoItems.board.insertBefore(cords.empty, itemNextSubl)
			} else if (itemNextSubl === null) {
				itemNextSubl = event.target
				cords.empty.replaceWith(event.target)
				infoItems.board.appendChild(cords.empty)
			} else if (itemNextSubl.classList.contains('empty')) {
				itemNextSubl = event.target
				cords.empty.replaceWith(event.target)
				infoItems.board.insertBefore(cords.empty, itemNextSubl)
			}
			infoItems.moveCount++
			document.querySelector('.stepsCount').innerText = infoItems.moveCount
			if(infoItems.moveCount < 150)
			document.querySelector('.stepsCount').style.color = 'green'
			else if (infoItems.moveCount < 250 && infoItems.moveCount > 149)
			  document.querySelector('.stepsCount').style.color = 'orange'
			else
			   document.querySelector('.stepsCount').style.color = 'red'
}
function check(){
  const items = document.querySelectorAll('.items')
  infoItems.itemsNumsArr.length = 0
  items.forEach((item) => {
    infoItems.itemsNumsArr.push(item.innerText)
  })
// check
  infoItems.check = 0
  infoItems.itemsNumsArr.forEach((val,i,arr) => {
    if(i+1 == val){
    infoItems.check++
    } else if (infoItems.check === 15)
      win()
      else if (infoItems.check === 13 && arr[15] == '' && arr[14] == 14 && arr[13] == 15)
      win()
      return
  })
}
function win(){
  const div = document.createElement('DIV')
  const gameDiv = document.getElementById('game')
  let steps = document.querySelector('.stepsCount').innerText
  div.classList.add('win')
  div.innerHTML = 'You Win!!'+`<br>Your score: `+ steps
  gameDiv.appendChild(div)
}
