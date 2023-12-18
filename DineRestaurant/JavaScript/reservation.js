function validateName(){
    const fullName=document.getElementById("name");

    if(fullName.value.length==0){
        fullName.style.border="2px solid red";
        fullName.focus();
        return false
    }else if(!fullName.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        fullName.style.border="2px solid red";
        fullName.focus();
        return false
    }else{
        fullName.style.border="2px solid green";
        
    }
   
}

function validateEmail(){
    const email=document.getElementById("email");

    if(email.value.length==0){
        email.style.border="2px solid red";
        email.focus();
        return false;
    }
    else if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email.style.border="2px solid red";
        return false;
    }else{
        email.style.border="2px solid green";
    }
    
}

function validatePhone(){
    const phoneNumber=document.getElementById("phoneNumber");

    if(phoneNumber.value.length !== 10){
        phoneNumber.style.border="2px solid red";
        phoneNumber.focus();
        return false
    }
    else if(!phoneNumber.value.match(/^[0-9]{10}$/)){
        phoneNumber.style.border="2px solid red";
        phoneNumber.focus();
        return false;
    }else {
        phoneNumber.style.border="2px solid green";
        
    }
}  



function validateGuests(){
    const guests=document.getElementById("guests");

    if(guests.value < 1){
        guests.style.border="2px solid red";
        guests.focus();
        return false;
    }else if(guests.value > 12 ){
        guests.style.border="2px solid red";
        guests.focus();
        return false;
    }else{
        guests.style.border="2px solid green";
    }
}