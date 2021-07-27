/*
дано масив, у якому зберигаеться певна виграшна сума(рандом) вид -500 до +500.
надаючи користувачу вибрати номер елементив, поки не видмовиться
*/
const body = document.querySelector('body')
body.innerHTML = `<button id=\"push\" type=\"button\">push</button>`
body.style.textAlign = 'center'
let st = 'body.style.'
st.maxWidth = 320+'px'
document.getElementById('push').onclick = start

let priceArr = []
let countEnable = 0

function start(){
  priceArr = []
  countEnable = 0
  body.innerHTML = ``
  const block = document.createElement('DIV')
  block.addEventListener('click', choice)
  block.style.display = 'flex'
  block.style.flexWrap = 'wrap'
  block.style.justifyContent = 'center'
  block.style.padding = 10+'px'
  block.style.border = 3 +'px solid red'
  block.id = 'block'
  let h1 = document.createElement('h1')
  h1.innerText = 'ЛОТО'
  body.appendChild(h1)
  body.appendChild(block)
  for (i = 0; i < 9; i++) {
    let price = (-500 + Math.floor(Math.random() * (500 - -500 + 1)))
    priceArr.push(price)
    let DIV = document.createElement('DIV')
    DIV.innerText = `${i+1}`
    DIV.style.margin = 5+'px'
    DIV.style.backgroundColor = 'grey'
    DIV.style.border = 3+'px solid black'
    DIV.style.width = 65+'px'
    DIV.style.height = 55+'px'
    DIV.style.display = 'flex'
    DIV.style.alignItems = 'center'
    DIV.style.justifyContent = 'center'
    DIV.style.fontWeight = 'bold'
    DIV.style.fontSize = 24+'px'
    DIV.classList.add('box')
    block.appendChild(DIV)
  }
  
  let div = document.createElement('DIV')
  div.classList.add('result-block')
  body.appendChild(div)
  div.style.marginTop = 12+'px'
  let label = document.createElement('label')
  label.innerText = 'ваш виграш: '
  let bank = document.createElement('p')
  bank.innerText = 0
  bank.style.fontSize = 24+'px'
  bank.style.fontWeight = 'bold'
  bank.id = 'bank'
  label.appendChild(bank)
  div.appendChild(label)
  
  let div2 = document.createElement('div')
  div.appendChild(div2)
  let btn = document.createElement('button')
  btn.setAttribute('type','button')
  btn.innerText = 'Продовжити'
  btn.id = 'continue'
  btn.setAttribute('disabled', 'disabled')
  btn.onclick = continueGame
  div2.appendChild(btn)
  
  
  btn = document.createElement('button')
  btn.setAttribute('type','button')
  btn.innerText = 'Забрати виграш'
  btn.style.marginLeft = 16+'px'
  btn.id = 'finish'
  btn.onclick = endGame
  div2.appendChild(btn)

}

function choice(event){
  if (event.target.classList.contains('box')){
    let num = (parseInt(event.target.innerText) - 1)
    let prev = parseInt(document.getElementById('bank').innerText)
    document.getElementById('bank').innerHTML = prev+priceArr[num]
    event.target.innerHTML = priceArr[num]
    event.target.classList.remove('box')
    countEnable++
  if(event.target.innerText < 0)
  event.target.style.color = 'red'
  else
  event.target.style.color = 'lightgreen'
    
   if (countEnable === 9)
     document.getElementById('continue').removeAttribute('disabled', 'disabled')
  }
}


function continueGame(){
  countEnable = 0
   document.getElementById('continue').setAttribute('disabled', 'disabled')
    for (i = 0; i < 9; i++) {
      priceArr[i] = (-500 + Math.floor(Math.random() * (500 - -500 + 1)))
      document.querySelectorAll('#block div')[i].innerHTML = i +1
      if(!document.querySelectorAll('#block div')[i].classList.contains('box'))
      document.querySelectorAll('#block div')[i].classList.add('box')
      document.querySelectorAll('#block div')[i].style.color = 'black'
    }
}

function endGame(){
  const div = document.createElement('div')
  div.classList.add('end-game')
  let userPrice = +document.querySelector('p').innerText
  if(userPrice < 0){
  div.style.backgroundColor = 'red'
  div.innerHTML = `Ти програв!<br>Торчиш ` + userPrice +' грн!'
  } else {
    div.style.backgroundColor = 'green'
  div.innerHTML = `Ти красавчик!<br>Затащив ` + userPrice +' грн!'
  }
  body.innerHTML = ''
  div.onclick = start
  body.prepend(div);
}
