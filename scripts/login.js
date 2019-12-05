let activeUser = []

const activeUserExist = localStorage.getItem('activeUser');//we'll get a null back if there is no data
if(activeUserExist !== null){//if not null we're good to go, but if there is no data stored then this code block will never run and the todos array will remain empty until user adds a new todo
    activeUser = JSON.parse(activeUserExist);
}

var login_email = document.getElementById("login-email")
var login_passwd = document.getElementById("login-password")
var email_err = document.getElementById("email-err")
var pass_err = document.getElementById("pass-err")
var fail_err = document.getElementById("fail-err")

document.querySelector('#login').addEventListener('click',function(e){
   e.preventDefault();
    
    if(localStorage.getItem('user')){
          var arr = JSON.parse(localStorage.getItem('user'))
          for(var i=0; i < arr.length; i++){
              if(arr[i].email === login_email.value && arr[i].password === login_passwd.value){
              
                  activeUser.push({
                      email:login_email.value,
                      password:login_passwd.value
                  })
                  email_err.style.display = "none"
                  pass_err.style.display = "none"
                  fail_err.style.display = "none"
                  
                  localStorage.setItem('activeUser',JSON.stringify(activeUser))
                  window.location.replace('index.html')
                  
          }else{
//              alert(`Login failed! Email or password incorrect. Please try again.`)
              email_err.style.display = "block"
              pass_err.style.display = "block"
          }
          }
        alert(`Login Successful! Welcome to the website ${arr[i].firstName}!`)
          
    }else{
        fail_err.style.display = "block"
        email_err.style.display = "block"
        pass_err.style.display = "block"
//        alert("No user found. Please Register and then Login.")
    }
    
});
/*
document.querySelector('#login').addEventListener('click',function(e){
   e.preventDefault();
    
    if(localStorage.getItem('user')){
          var arr = JSON.parse(localStorage.getItem('user'))
          if(arr[0].email === login_email.value && arr[0].password === login_passwd.value){
              
              activeUser.push({
                    email:login_email.value,
                    password:login_passwd.value
               })
              localStorage.setItem('activeUser',JSON.stringify(activeUser))
              
              alert(`Login Successful! Welcome to the website ${arr[0].firstName}!`)
              window.location.replace('index.html')
          }else{
//              alert(`Login failed! Email or password incorrect. Please try again.`)
              email_err.style.display = "block"
              pass_err.style.display = "block"
          }
          
    }else{
        fail_err.style.display = "block"
        email_err.style.display = "block"
        pass_err.style.display = "block"
//        alert("No user found. Please Register and then Login.")
    }
    
});
*/