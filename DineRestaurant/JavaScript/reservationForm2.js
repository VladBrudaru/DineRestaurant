
var nameError=document.getElementById("msg1");
var emailError=document.getElementById("msg2");
var phoneError=document.getElementById("msg3");
var dayError=document.getElementById("msg4");
var monthError=document.getElementById("msg5");
var yearError=document.getElementById("msg6");
var hoursError=document.getElementById("msg7");
var minutesError=document.getElementById("msg8");
var guestsError=document.getElementById("msg9");

function validateName(){
    const fullName=document.getElementById("name").value;

    if(fullName.value.length==0){
        fullName.style.border="2px solid red";
        fullName.focus();
        return false
    }
    if(!fullName.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML=`Write full name`;
        return false;
    }
    nameError.innerHTML=`<i class="fa-thin fa-circle-check"></i>`;
    return true;
}

function validateEmail(){
    const email=document.getElementById("email").value;

    if(email.length==0){
        emailError.innerHTML=`Email is required`;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML=`Email invalid`;
        return false;
    }
    emailError.innerHTML=`<i class="fa-thin fa-circle-check"></i>`
    return true;
}

function validatePhone(){
    const phoneNumber=document.getElementById("phoneNumber").value;

    if(phoneNumber.length==0){
        phoneError.innerHTML=`Phone number is required`
    }
    if(phoneNumber.length !== 10){
        phoneError.innerHTML=`Phone number should be 10 digits`
    }
    if(!phoneNumber.match(/^[0-9]{10}$/)){
        phoneError.innerHTML=`Phone number incorrect`
        return false;
    }
    phoneError.innerHTML=`<i class="fa-thin fa-circle-check"></i>`
    return true;
}

