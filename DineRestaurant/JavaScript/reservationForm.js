const form=document.getElementsByClassName("bookingForm");


const day=document.getElementById("day");
const month=document.getElementById("month");
const year=document.getElementById("year");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");

const guests=document.getElementById("guests");

function validateName(){
    const regx=/^[a-zA-Z]+ [a-zA-Z]+$/;
    const name=document.getElementById("name").value;
    if(name.length==0){
        document.getElementById('msg1').innerHTML=`Name is required`;
        return false;
    }
    if(!name.match(regx)){
        document.getElementById('msg1').innerHTML=`Write full name`;
        return false;
    }
    
    document.getElementById('msg1').innerHTML=`VALID`;
    return true;

}
validateName()

function validateEmail(){
    const regx1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email=document.getElementById("email").value;
    if(email.length==0){
        document.getElementById('msg2').innerHTML=`Email is required`;
        return false;
    }
    if(!email.match(regx1)){
        document.getElementById('msg2').innerHTML=`Enter email`;
        return false;
    }
    
    document.getElementById('msg2').innerHTML=`VALID`;
    return true;
}

validateEmail()

function validatePhone(){
    const regx3=/^[0-9]{10}$/;
    const phoneNumber=document.getElementById("phoneNumber").value;
    if(phoneNumber.length==0){
        document.getElementById('msg3').innerHTML=`Phone is required`;
        return false;
    }
    if(!phoneNumber.match(regx3)){
        document.getElementById('msg3').innerHTML=`Enter phone number`;
        return false;
    }
    
    document.getElementById('msg3').innerHTML=`VALID`;
    return true;
}

validatePhone()


