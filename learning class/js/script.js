class Game {
	constructor(row, colm, mines, container) {
		this.row = row
		this.colm = colm
		this.mines = mines
		this.container = container
		let tableArr = []
		let minesArr = []
		let mine
		let empty
		let count = 1

		function createTable() {

			const gameName = document.createElement('h2')
			gameName.innerText = 'Miner!'
			container.appendChild(gameName)

			const table = document.createElement('table')
			for (let i = 0; i < row; i++) {
				const tr = document.createElement('tr')
				for (let k = 0; k < colm; k++) {
					const td = document.createElement('td')
					td.classList.add('squere')
					td.innerHTML = count
					count++
					tableArr.push(td)
					tr.appendChild(td)
				}
				table.appendChild(tr)
			}
			container.appendChild(table)
			const info = document.createElement('div')
			info.classList.add('info')
			const p = document.createElement('p')

			for (let i = 0; i < mines; i++) {
				do {
					mine = 0 + Math.floor(Math.random() * ((tableArr.length - 1) - 0 + 1))
				} while (minesArr.includes(mine))
				minesArr.push(mine)
			}
			minesArr.sort((a, b) => a - b)
			empty = tableArr.length - mines
			p.innerHTML = 'Количество пустых ячеек: ' + empty + `<br>Количество мин: ` + mines + `<br>Мин в ячейках индекс: ` + minesArr
			info.appendChild(p)
			container.appendChild(info)
		}
		createTable()

		function heat(event) {
			if (event.target.classList.contains('squere')) {
				const p = document.querySelector('.info p')
				if (minesArr.includes(tableArr.indexOf(event.target))) {
					minesArr.splice(minesArr.indexOf(tableArr.indexOf(event.target)), 1)
					event.target.style.backgroundColor = 'green';
					event.target.classList.remove('squere')
					mines--
					p.innerHTML = 'Количество пустых ячеек: ' + empty + `<br>Количество мин: ` + mines + `<br>Мины в ячейках индекс :` + minesArr;
					if (mines === 0)
						alert('pabeditel!')
				} else {
					empty--
					event.target.style.backgroundColor = 'red'
					event.target.classList.remove('squere')
					p.innerHTML = 'Количество пустых ячеек: ' + empty + `<br>Количество мин: ` + mines + `<br>Мины в ячейках индекс :` + minesArr
					if (empty === 0)
						alert('loshara!')
				}
			}

		}
		container.addEventListener('click', heat)
	}
}

const block = document.querySelector('.container')

const game1 = new Game(5, 5, 5, block)
