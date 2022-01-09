function changeCssCross(top,left,h,w,r){
  const el1 = document.querySelector('.cross')
  el1.style.top = top
  el1.style.left = left
  el1.style.height = h
  el1.style.width = w
  el1.style.transform = `rotate(${r}deg)`
}


function crossWin(comb){
  const el1 = document.querySelector('.cross')
  console.log(comb)
  const arrStr = JSON.stringify(comb[0])
  
  // горизонталь
  if (arrStr == JSON.stringify([0,1,2])){
    changeCssCross('27px','25px','2px','250px',0)
  } else if (arrStr == JSON.stringify([3,4,5])){
    changeCssCross('88px','25px','2px','250px',0)
    
  } else if (arrStr == JSON.stringify([6,7,8])){
    changeCssCross('147px','25px','2px','250px',0)
    
  // вертикаль
  } else if (arrStr == JSON.stringify([0,3,6])){
    changeCssCross('10px','49px','158px','2px',0)
  } else if (arrStr == JSON.stringify([1,4,7])){
    changeCssCross('10px','149px','158px','2px',0)
  } else if (arrStr == JSON.stringify([2,5,8])){
    changeCssCross('10px','249px','158px','2px',0)
  
  // диагональ
  } else if (arrStr == JSON.stringify([0,4,8])){
    changeCssCross('-53px','150px','290px','2px',120)
  } else if (arrStr == JSON.stringify([2,4,6])){
    changeCssCross('-53px','150px','290px','2px',240)
  }
   document.getElementById('new-try').removeAttribute('disabled')
   el1.style.display="block"
   document.querySelector('.board').removeEventListener('click', push)
}

function newTry(){
  Player.step = true
  const nextPlayerSpan = document.getElementById('info-name')
  nextPlayerSpan.innerHTML = player1.name + ' [ ' +player1.type+' ]'
  nextPlayerSpan.style.color='orangered'
  player1.move = []
  player2.move = []
  const boardItems = document.querySelectorAll('.board__item')
  
  boardItems.forEach(val => {
    if (val.classList.contains('pushed'))
  val.classList.remove('pushed')
  val.innerHTML = ""
  document.querySelector('.cross').style.display="none"
  })
  const n = document.getElementById('n')
  const p1 = document.getElementById('p1')
  const p2 = document.getElementById('p2')
  n.appendChild(p1)
  n.appendChild(p2)
  document.getElementById('new-try').setAttribute('disabled','disabled')
  document.querySelector('.board').addEventListener('click', push)

}
