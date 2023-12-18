

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

