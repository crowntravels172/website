
let user = []

//check for existing datas inside of local storage, if yes we want to use them by updating the empty todos array 
const userExist = localStorage.getItem('user');//we'll get a null back if there is no data
if(userExist !== null){//if not null we're good to go, but if there is no data stored then this code block will never run and the todos array will remain empty until user adds a new todo
    user = JSON.parse(userExist);
}

var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var email = document.getElementById("email")
var passwd = document.getElementById("password")
var conf_passwd = document.getElementById("confirm-password")
var myform = document.getElementById("register-form")
var formcontainer = document.getElementById("register-box")
var overlay = document.getElementById("bg-overlay")
var success = document.getElementById("success-popup")

var numer = /[0-9]/
var low_case = /[a-z]/
var upp_case = /[A-Z]/
var accountExists

document.querySelector('#signup').addEventListener('click',function(e){
   e.preventDefault();
    // checking if user array exists in the localstorage:
    if(localStorage.getItem('user')){
        
        var arr = JSON.parse(localStorage.getItem('user'))
        
        for(var i=0; i < arr.length; i++){
            if(arr[i].email === email.value){ // checking if the given email value exists in the local storage:
               accountExists = false
            }
            else{
                accountExists = true
            }
        }
        
        if(accountExists == false){
           alert(`An account exists! Please log in.`)
        }else{
           user.push({
                    firstName:fname.value,
                    lastName:lname.value,
                    email:email.value,
                    password:passwd.value
               })
            localStorage.setItem('user',JSON.stringify(user))
            success.style.display = "block"
            formcontainer.style.display = "none"
            overlay.style.display = "block"
            myform.reset()
        }
          
    }else{
        if(fname.value!= null && lname.value!= null && email.value!= null && passwd.value!= null && conf_passwd.value!= null && passwd.value.length >= 8 && passwd.value.match(low_case) && passwd.value.match(upp_case) && passwd.value.match(numer) && conf_passwd.value === passwd.value ){
        user.push({
            firstName:fname.value,
            lastName:lname.value,
            email:email.value,
            password:passwd.value
        })
            localStorage.setItem('user',JSON.stringify(user))
            success.style.display = "block"
            formcontainer.style.display = "none"
            overlay.style.display = "block"
            myform.reset()
            
        }else{
            success.style.display = "none"
            formcontainer.style.display = "block"
            overlay.style.display = "block"
            alert("All fields are required! Try again.")
        }
    }
    
    
    
});