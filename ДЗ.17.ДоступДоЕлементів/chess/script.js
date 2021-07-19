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
      // let num = 1
      for (i=0; i< chessboardArr.length; i++){
        for(k = 0; k < chessboardArr[i].length; k++){
          let div = document.createElement('DIV')
         // div.innerText = num
          div.classList.add('chessboard__item')
          chessboard.appendChild(div)
         // num++
          div.setAttribute('data-x',`${k+1}`)
           div.setAttribute('data-y',`${i+1}`)
          if (count %2){
          div.style.backgroundColor = 'white'
          }else{
          div.style.backgroundColor = 'orange'
          }
          count++
        }
        count++
      }
  document.querySelector('.start').remove()
  div = document.createElement('DIV');
  div.classList.add('underboard')
  container.appendChild(div)
  div = document.createElement('IMG')
  div.classList.add('horse');
  div.setAttribute('src','images/horse.png')
  document.querySelector('.underboard').appendChild(div)
  chessboard.addEventListener('click', horseMove)
}

function horseMove(event){
  if(event.target.classList.contains('chessboard__item')){
    let img = document.querySelector('.horse')
    event.target.appendChild(img)
    let x = event.target.dataset.x;
    let y = event.target.dataset.y;
    console.log(`x = ${x} , y = ${y}`)
    
    let items = document.querySelectorAll('.chessboard__item')
    for(i=0;i<items.length;i++){
      items[i].classList.remove('active')
    }
    
    if(x-2 >= 1 && y-1 >= 1){
      document.querySelector(`.chessboard__item[data-x="${x-2}"][data-y="${y-1}"]`).classList.add('active')
    }
  }
  document.querySelector('.chessboard').removeEventListener('click', horseMove)
  document.querySelector('.chessboard').addEventListener('click', horseMoveNext)
  
}

function horseMoveNext(){
  if(event.target.classList.contains('active')){
    let img = document.querySelector('.horse')
    event.target.appendChild(img)
    let x = event.target.dataset.x;
    let y = event.target.dataset.y;
    console.log(`x = ${x} , y = ${y}`)
    
    let items = document.querySelectorAll('.chessboard__item')
    for(i=0;i<items.length;i++){
      items[i].classList.remove('active')
    }
    
    if(x-2 >= 1 && y-1 >= 1){
      document.querySelector(`.chessboard__item[data-x="${x-2}"][data-y="${y-1}"]`).classList.add('active')
    } 
  }
}
