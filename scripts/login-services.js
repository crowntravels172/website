let ticket = []
//let temp_ticket = []

//const tempTick = localStorage.getItem('temp_ticket');
//if(tempTick !== null){
//    ticket = JSON.parse(temp_ticket);
//}

const newTicket = localStorage.getItem('ticket');
if(newTicket !== null){
    ticket = JSON.parse(newTicket);
}


var from = document.getElementById("from-select")
var to = document.getElementById("to-select")
var dept_date = document.getElementById("depart")
var retn_date = document.getElementById("return")
var num_passengers = document.getElementById("passengers-select")
var class_type = document.getElementById("class-select")
var login_box = document.getElementById("login-box")
var overlay = document.getElementById("bg-overlay")
var userLoggedIn = localStorage.getItem('activeUser')

var signUpBtn = document.getElementById("signup-btn")
var loginBtn = document.getElementById("signin-btn")
var logoutBtn = document.getElementById("signout-btn")
var userDetails = document.getElementById("user-info")
var user_name = document.getElementById("user-name")
var user_email = document.getElementById("user-email")
var myAccountBtn = document.getElementById("account-btn")
var myPurchasesBtn = document.getElementById("purchases-btn")
var index
var registeredUser
function availableFeatures(){
    
    if(activeUserExist !== null){
        if(localStorage.getItem('user')){
            registeredUser= JSON.parse(localStorage.getItem('user'))
        }
        activeUser = JSON.parse(activeUserExist)
//        registeredUser = JSON.parse(user)
        
        signUpBtn.style.display = "none"
        loginBtn.style.display = "none"
        logoutBtn.style.display = "block"
        userDetails.style.display = "block"
        for(var i=0; i<registeredUser.length; i++){
            if(registeredUser[i].email === activeUser[0].email  ){ // if login email corresponds to the registered email do the following:
                user_name.innerHTML = "Logged in as " + registeredUser[i].firstName
                user_email.innerHTML = registeredUser[i].email
                myAccountBtn.style.display = "block"
                myPurchasesBtn.style.display = "block"
               }
        }
        document.querySelector('#search-flight').addEventListener('click',function(e){
            if(from.value === "" || to.value === "" || dept_date.value === "" || num_passengers.value === "" || class_type.value === ""){
                 alert("All fields are required!")
            }else{
                activeUser[1] = ({
                from: from.value,
                to: to.value,
                passengers: num_passengers.value,
                class: class_type.value,
                departure: dept_date.value,
//                return: retn_date.value
            })
            localStorage.setItem('activeUser',JSON.stringify(activeUser))
            window.location.replace('search-result.html')
            }
        })
        
    }else{
        signUpBtn.style.display = "block"
        loginBtn.style.display = "block"
        logoutBtn.style.display = "none"
        userDetails.style.display = "none"
        
        myAccountBtn.style.display = "none"
        myPurchasesBtn.style.display = "none"
    }
}