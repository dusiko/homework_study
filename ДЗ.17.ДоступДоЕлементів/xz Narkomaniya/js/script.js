let shipsArr = []
let enemyShipsArr = []
let enemy
let count = 3

document.querySelector('.start').addEventListener('click', generate)

function generate(){
  let container = document.querySelector('.container')
  container.innerHTML = ''
  
  // створюемо кораблі
  
  for(i = 0; i < 6; i++){
    let div = document.createElement('div')
    div.innerText = `${i}`
    div.classList.add('ship')
    container.appendChild(div)
    shipsArr.push(document.querySelectorAll('.ship')[i])
  }
  
  // створюемо масив ворожих кораблів
  for(i=0; i<3; i++){
    do{
      enemy = 0 + Math.floor(Math.random() * 6)
    } while (enemyShipsArr[0] == enemy || enemyShipsArr[1] == enemy || enemyShipsArr[2] == enemy )
        enemyShipsArr.push(enemy)
  }
 
  //
  
  let btn = document.createElement('BUTTON')
  btn.innerText = 'restart'
  btn.classList.add('restart')
  container.appendChild(btn)
  document.querySelector('.container').addEventListener('click', hit)
  btn.addEventListener('click', restart)
}

function restart(){
  enemyShipsArr = []
  shipsArr = []
  count = 3
 let container = document.querySelector('.container')
 container.innerHTML='';
 let btn = document.createElement('BUTTON')
  btn.innerText = 'generate'
  btn.classList.add('start')
  container.appendChild(btn)
  document.querySelector('.start').addEventListener('click', generate)
  
    container.style.opacity = '1';
     container.style.backgroundColor = 'white';
  document.querySelector('.win').remove()
}

function hit(event){
  if(event.target.classList.contains('ship')){
    if(shipsArr.indexOf(event.target) == enemyShipsArr[0] || shipsArr.indexOf(event.target) == enemyShipsArr[1] || shipsArr.indexOf(event.target) == enemyShipsArr[2]){
  let indx = shipsArr.indexOf(event.target)
  let killed = enemyShipsArr.indexOf(indx)
  enemyShipsArr[killed] = 'killed'
  shipsArr[indx].innerText = 'killed'
  shipsArr[indx].classList.add('killed')
    if (enemyShipsArr[0] == 'killed' && enemyShipsArr[1] == 'killed' && enemyShipsArr[2] == 'killed') {
    let div = document.createElement('DIV')
    div.classList.add('win')
    div.innerText = 'Пабедитель!!!'
    document.querySelector('.main').appendChild(div)
    let container = document.querySelector('.container')
    container.style.opacity = '0.3';
     container.style.backgroundColor = 'black';
     document.querySelector('.win').addEventListener('click', restart)
    }
  } else if( shipsArr[shipsArr.indexOf(event.target)].innerText == 'missed' || shipsArr[shipsArr.indexOf(event.target)].innerText == 'killed'){
      alert('Ти вже сюда пуляв! мудак.')
    } else {
       let indx = shipsArr.indexOf(event.target)
       let missed = enemyShipsArr.indexOf(indx)
       enemyShipsArr[missed] = 'missed'
       shipsArr[indx].innerText = 'missed'
  shipsArr[indx].classList.add('not-killed')
  count--
  if(count == 0){
    let div = document.createElement('DIV')
    div.classList.add('win')
    div.innerText = 'Проебав!!!'
    document.querySelector('.main').appendChild(div)
    let container = document.querySelector('.container')
    container.style.opacity = '0.3';
     container.style.backgroundColor = 'black';
     document.querySelector('.win').addEventListener('click', restart)
  }
    }
  }
} 
