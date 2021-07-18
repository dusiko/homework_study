document.querySelector('.start').addEventListener('click', genChessboard)

function genChessboard(){
// створюємо блок шахматної доски
let container = document.querySelector('.container')
let div = document.createElement('DIV')
div.classList.add('chessboard')
container.appendChild(div)

// формуемо массив шахматної доски.
let chessboardArr = []
  for(i = 0; i < 8; i++){
    let newArr = []
    for(k = 0; k < 8; k++){
      newArr.push(0)
    }
    chessboardArr.push(newArr)
  }

  // виводимо на сторінку шахматну доску
      let chessboard = document.querySelector('.chessboard')
      let count = 0
      for (i=0; i< chessboardArr.length; i++){
        for(k = 0; k < chessboardArr[i].length; k++){
          let div = document.createElement('DIV')
          div.classList.add('chessboard__item')
          chessboard.appendChild(div)
          if (count %2){
          div.style.backgroundColor = 'white'
          count++
          }else{
          div.style.backgroundColor = 'orange'
          count++
          }
        }
        count++
      }
  document.querySelector('.start').remove()
}
  
