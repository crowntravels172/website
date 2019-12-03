
function logoutUser(){
    
    if(localStorage.getItem('activeUser')){
        localStorage.removeItem('activeUser')
        window.location.replace('index.html')
          
    }else{
        alert("Could not log out!")
    }
}