/*
let ticket = []
let temp_ticket = []

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

    document.querySelector('#search-flight').addEventListener('click',function(e){
        e.preventDefault();
        
        temp_ticket.push({
            from: from.value,
            to: to.value,
            passengers: num_passengers.value,
            class: class_type.value,
            departure: dept_date.value,
            return: retn_date.value
        })
        
        if(userLoggedIn !== null){ 
            ticket.push({
                from: temp_ticket[0].from,
                to: temp_ticket[0].to,
                passengers: temp_ticket[0].passengers,
                class: temp_ticket[0].class,
                departure: temp_ticket[0].departure,
                return: temp_ticket[0].return
            })
            userLoggedIn.push(ticket)
            localStorage.setItem('ticket',JSON.stringify(ticket))
        }else{
            login_box.style.display = "block"
            overlay.style.display = "block"
            document.querySelector('#search-flight').addEventListener('click',function(e){
                  ticket.push({
                    from: temp_ticket[0].from,
                    to: temp_ticket[0].to,
                    passengers: temp_ticket[0].passengers,
                    class: temp_ticket[0].class,
                    departure: temp_ticket[0].departure,
                    return: temp_ticket[0].return
                })
            })
        }
        console.log(ticket)   
        console.log(userLoggedIn)   
    })
//    console.log(from.value)
//    console.log(to.value)
//    console.log(num_passengers.value)
//    console.log(class_type.value)
//    console.log(dept_date.value)
//    console.log(retn_date.value)
*/