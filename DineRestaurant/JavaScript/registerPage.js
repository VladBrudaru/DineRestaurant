function validateName(){
    const name=document.getElementById(`name`);

    if(name.value.length==0){
        name.style.border="2px solid red";
        name.focus();
        return false
    }else if(!name.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        name.style.border="2px solid red";
        name.focus()
        return false;
    }else{
        name.style.border="2px solid green";
    }
}

function validatePassword(){
    var password=document.getElementById(`password`);

    if (password.value.length<8){
        password.style.border="2px solid red";
        password.focus();
        return false
    }else{
        password.style.border="2px solid green";
    }
}

function validateEmail(){
    var email=document.getElementById(`email`);

    if(email.value.length==0){
        email.style.border="2px solid red";
        email.focus();
        return false
    }else if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email.style.border="2px solid red";
        email.focus();
        return false
    }else{
        email.style.border="2px solid green";
    }
}

function validateDay(){
    var day=document.getElementById(`day`);

    if(day.value.length<1){
        day.style.border="2px solid red";
        day.focus();
        return false
    }else if (day.value.length>31){
        day.style.border="2px solid red";
        day.focus();
        return false
    }else{
        day.style.border="2px solid green";
    }
}