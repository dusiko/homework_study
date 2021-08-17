let infoItems = {
  'board' : document.getElementById('board'),
}

function createGameboard(){
  // формую массив доски
  infoItems['boardArr'] = []
  let count = 1
  for ( i = 0; i < 4; i++){
    let row = []
    for (k = 0; k < 4; k++){
      row.push(count)
      count++
      if (count === 16) count = 'empty'
    }
    infoItems.boardArr.push(row)
  }
  console.log(infoItems.boardArr)
  
  // формуем доску
  count = 1
  for (i = 1; i <= infoItems.boardArr[length]; i++){
    for (k = 1; k <= infoItems.boardArr[i-1]; k++){
      const item = document.createElement('DIV')
      item.classList.add('items')
      item.setAttribute('data-x', k)
      item.setAttribute('data-y', i)
      if (count < 16) 
      item.innerText = count
      infoItems.board.appendChild(item)
      count++
    }
  }
  console.log('finish')
}

createGameboard()
