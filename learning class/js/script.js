

let countUsers = 0
let loginsUsedArr = []

let users = {
  checkLogin(loginName) {
    return loginsUsedArr.some(val => val == loginName)
  },
  checkValidPass(pass) {
  return pass.split('').some(val => val == ' ')
}
}


document.querySelector('.form-inputs').addEventListener('click', togglePassVision)
//
document.querySelector('.form-inputs').addEventListener('keyup', enableBtnLogin)
//
document.querySelector('.pop-up__btn').addEventListener('click', closeModal)
document.querySelector('.pop-up__close').addEventListener('click', closeModal)
//
document.querySelector('.btn-reg').addEventListener('click', regUser)
document.querySelector('.btn-login').addEventListener('click',login)



// toggle pass vision 
function togglePassVision(event){
  const btn = document.getElementById('inp-pass')
  if (event.target.classList == 'show-pass'){
  btn.setAttribute('type','text')
  event.target.classList.add('hide-pass')
  event.target.classList.remove('show-pass')
   event.target.setAttribute('src','../images/hide-pass.png')
  } else if (event.target.classList == 'hide-pass'){
    btn.setAttribute('type','password')
    event.target.classList.add('show-pass')
   event.target.classList.remove('hide-pass')
   event.target.setAttribute('src','../images/show-pass.png')
  }
}


// enabled btn login
function enableBtnLogin(){
  if (document.querySelectorAll('.form-input')[0].value.length > 0 && document.querySelectorAll('.form-input')[1].value.length > 0)
    document.querySelector('.btn-login').removeAttribute('disabled')
  else
   document.querySelector('.btn-login').setAttribute('disabled','disabled')
}
enableBtnLogin()


// registered users
function regUser(){
  let checked = {
    'login' : false,
    'password' : false,
  }
  const login = document.querySelectorAll('.form-input')[0].value
  const password = document.querySelectorAll('.form-input')[1].value
  let popUp = document.querySelector('.pop-up')
  let popUpText = document.querySelector('.pop-up__text')
  let errorLog = document.querySelector('.error-login')
  let errorPass = document.querySelector('.error-password')
  
  if (login == '' || login == undefined){
    errorLog.innerText = 'Введите логин!'
    errorLog.style.opacity = 1
    checked.login = false
   } else if (users.checkLogin(login)){
    openModal()
    //popUp.style.zIndex = 20;
   // popUp.style.opacity = 0.9
    popUpText.innerText = 'Пользователь с таким ником уже существует!'
  } else {
    errorLog.style.opacity = 0
    checked.login = true
  }
  if (password == '' || password == undefined || password.length < 6){
    errorPass.innerHTML = `Введите пароль более 5 символов!`
    errorPass.style.opacity = 1
    checked.password = false
  } else if (users.checkValidPass(password) == true){
    errorPass.innerHTML = `Пароль не должен иметь пробелы!`
    errorPass.style.opacity = 1
    checked.password = false
  }else {
    errorPass.style.opacity = 0
    checked.password = true
  }
  if (checked.login == true && checked.password == true){
    loginsUsedArr.push(login)
   // popUp.style.zIndex = 20;
  //  popUp.style.opacity = 0.9
    openModal()
    popUpText.innerText = 'Пользователь успешно зарегистрирован!'
    
    countUsers++
    let user = new User(login,password)
    users['user'+countUsers] = {
      'login' : user.login,
      'password' : user.password,
    }
  }
}
function login(){
  const login = document.querySelectorAll('.form-input')[0].value
  const password = document.querySelectorAll('.form-input')[1].value
  let popUp = document.querySelector('.pop-up')
  let popUpText = document.querySelector('.pop-up__text')
  
  if (loginsUsedArr.some(val => val == login)) {
    let curUser
    for (let i = 1; i < countUsers+1; i++){
      for (key in users['user'+i]){
        if (users['user'+i][key]== login){
          curUser = users['user'+i]
          break
        }
      }
    }
    if (curUser['login'] == login && curUser['password'] == password){
      popUpText.innerHTML = `Приветствуем Вас <span class='loginName'>${login}</span>!`
      document.querySelector('.loginName').style.color = 'green'
      openModal()
    } else{
       popUpText.innerHTML = `Неверный пароль для <span class='loginName'>${login}</span>!`
         document.querySelector('.loginName').style.color = 'red'
       openModal()
    }
  } else {
  popUpText.innerHTML = 'Такой пользователь не зарегистрирован!'
  openModal()
  }
}

// close modal window
function closeModal(){
  document.querySelector('.pop-up__inner').classList.remove('pop-up__inner--open')
  document.querySelector('.pop-up__inner').classList.add('pop-up__inner--close')
    document.querySelector('.pop-up').classList.remove('pop-up--open')
     document.querySelector('.pop-up').classList.add('pop-up--close')
}
function openModal(){
    document.querySelector('.pop-up__inner').classList.remove('pop-up__inner--close')
     document.querySelector('.pop-up').classList.remove('pop-up--close')
   document.querySelector('.pop-up__inner').classList.add('pop-up__inner--open')
   document.querySelector('.pop-up').classList.add('pop-up--open')
 
}
