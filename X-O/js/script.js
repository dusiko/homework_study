const player1 = new Player('','X')
const player2 = new Player('','O')
 
function createBoard(){
  // отримуемо данні гравців
  if (Player.firstPush){
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
  
  div = document.createElement('h3')
  div.innerText = 'X - O'
  inner.appendChild(div)
  
  const board = document.createElement('DIV')
  board.classList.add('board')
  for (let i = 0; i < 9; i++){
    const div = document.createElement('DIV')
    div.classList.add('board__item')
    div.setAttribute('id',i)
    board.appendChild(div)
  }
  inner.appendChild(board)
  
  const info = document.createElement('DIV')
  info.classList.add('game-inner__info')
  inner.insertBefore(info,board)
  div = document.createElement('DIV')
  div.innerHTML = `Next move for: <span id="info-name">${player1.name} [ ${player1.type} ]</span>`
  info.append(div)
  
  
  document.querySelector('.board').addEventListener('click', push)
}
function check(player){
  const winCombination = [[0,1,2],[0,3,6],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  const win = winCombination.some(val => val.every(n => player.move.includes(n)))
  if (win)
    return true
  else if (Array.from(document.querySelectorAll('.board__item')).map(val => val.innerText).every(v => v != ''))
    return 'draw'
  else {
    const n = document.getElementById('info-name')
    if (Player.step == true)
      n.innerText = player1.name + ` [ ${player1.type} ]`
    else 
      n.innerText = player2.name + ` [ ${player2.type} ]`
  }
}

function push(){
  if (!event.target.classList.contains('pushed')){
    if (Player.step == true){
      event.target.classList.add('pushed')
      event.target.innerText = 'X'
      Player.step = false
      player1.move.push(+event.target.getAttribute('id'))
    if (check(player1) == true){
        alert(player1.name +' win!')
        
    } else if (check(player1) == 'draw'){
        alert ('draw!!!!!!!!')
      }
      
      
      
    } else {
      event.target.classList.add('pushed')
      event.target.innerText = 'O'
      Player.step = true
      player2.move.push(+event.target.getAttribute('id'))
      if (check(player2) == true){
        alert(player2.name +' win!')
        
      } else if (check(player2) == 'draw'){
        alert ('draw!!!!!!!!')
      }
    }
  }
}


