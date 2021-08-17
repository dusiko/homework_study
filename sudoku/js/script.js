let infoItems = {
	'board': document.getElementById('board'),
}

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
			if (count < 16)
				item.innerText = count
			else
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
		const empty = document.querySelector('.empty')
		let xTarget = +event.target.dataset.x;
		let yTarget = +event.target.dataset.y;
		let xEmpty = +empty.dataset.x;
		let yEmpty = +empty.dataset.y;
		if (xTarget === xEmpty && yTarget === yEmpty - 1 && yTarget > 0) {
			console.log(`xTarget = ${xTarget} , yTarget = ${yTarget}`)
			console.log(`xEmpty = ${xEmpty} , yEmpty = ${yEmpty}`)
			event.target.setAttribute('data-y', yEmpty)
			event.target.setAttribute('data-x', xEmpty)
			empty.setAttribute('data-x', xTarget)
			empty.setAttribute('data-y', yTarget)
			let itemNextSubl = event.target.nextSibling
			if (itemNextSubl === event.target.nextSibling && itemNextSubl != null && !itemNextSubl.classList.contains('empty')) {
				empty.replaceWith(event.target)
				infoItems.board.insertBefore(empty, itemNextSubl)
			} else if (itemNextSubl === null) {
				itemNextSubl = event.target
				console.log('next subl == Null event.target')
				empty.replaceWith(event.target)
				infoItems.board.appendChild(empty)
			} else if (itemNextSubl.classList.contains('empty')) {
				itemNextSubl = event.target
				empty.replaceWith(event.target)
				infoItems.board.insertBefore(empty, itemNextSubl)
			}
		}

		if (xTarget === xEmpty - 1 && yTarget === yEmpty && xTarget > 0) {
			console.log(`xTarget = ${xTarget} , yTarget = ${yTarget}`)
			console.log(`xEmpty = ${xEmpty} , yEmpty = ${yEmpty}`)
			event.target.setAttribute('data-y', yEmpty)
			event.target.setAttribute('data-x', xEmpty)
			empty.setAttribute('data-x', xTarget)
			empty.setAttribute('data-y', yTarget)
			let itemNextSubl = event.target.nextSibling
			if (itemNextSubl === event.target.nextSibling && itemNextSubl != null && !itemNextSubl.classList.contains('empty')) {
				empty.replaceWith(event.target)
				infoItems.board.insertBefore(empty, itemNextSubl)
			} else if (itemNextSubl === null) {
				itemNextSubl = event.target
				console.log('next subl == Null event.target')
				empty.replaceWith(event.target)
				infoItems.board.appendChild(empty)
			} else if (itemNextSubl.classList.contains('empty')) {
				itemNextSubl = event.target
				empty.replaceWith(event.target)
				infoItems.board.insertBefore(empty, itemNextSubl)
			}
		}

		if (xTarget === xEmpty + 1 && yTarget === yEmpty && xTarget < 5) {
			console.log(`xTarget = ${xTarget} , yTarget = ${yTarget}`)
			console.log(`xEmpty = ${xEmpty} , yEmpty = ${yEmpty}`)
			event.target.setAttribute('data-y', yEmpty)
			event.target.setAttribute('data-x', xEmpty)
			empty.setAttribute('data-x', xTarget)
			empty.setAttribute('data-y', yTarget)
			let itemNextSubl = event.target.nextSibling
			if (itemNextSubl === event.target.nextSibling && itemNextSubl != null && !itemNextSubl.classList.contains('empty')) {
				empty.replaceWith(event.target)
				infoItems.board.insertBefore(empty, itemNextSubl)
			} else if (itemNextSubl === null) {
				itemNextSubl = event.target
				console.log('next subl == Null event.target')
				empty.replaceWith(event.target)
				infoItems.board.appendChild(empty)
			} else if (itemNextSubl.classList.contains('empty')) {
				itemNextSubl = event.target
				empty.replaceWith(event.target)
				infoItems.board.insertBefore(empty, itemNextSubl)
			}
		}

		if (xTarget === xEmpty && yTarget === yEmpty + 1 && yTarget < 5) {
			console.log(`xTarget = ${xTarget} , yTarget = ${yTarget}`)
			console.log(`xEmpty = ${xEmpty} , yEmpty = ${yEmpty}`)
			event.target.setAttribute('data-y', yEmpty)
			event.target.setAttribute('data-x', xEmpty)
			empty.setAttribute('data-x', xTarget)
			empty.setAttribute('data-y', yTarget)
			let itemNextSubl = event.target.nextSibling
			if (itemNextSubl === event.target.nextSibling && itemNextSubl != null && !itemNextSubl.classList.contains('empty')) {
				empty.replaceWith(event.target)
				infoItems.board.insertBefore(empty, itemNextSubl)
			} else if (itemNextSubl === null) {
				itemNextSubl = event.target
				console.log('next subl == Null event.target')
				empty.replaceWith(event.target)
				infoItems.board.appendChild(empty)
			} else if (itemNextSubl.classList.contains('empty')) {
				itemNextSubl = event.target
				empty.replaceWith(event.target)
				infoItems.board.insertBefore(empty, itemNextSubl)
			}
		}
	}
}
