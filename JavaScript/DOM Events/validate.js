function validateName(){
    let username = document.getElementById('username');
    let nameerror = document.getElementById('nameError');


    if(username.value.trim()==''){
        nameerror.innerHTML="Username cannot be blank";
        return false;
    }

    if (username.value.length<3){
        nameerror.innerHTML="Username is too short"
        return false;
    }

    else if (username.value.length>30){
        nameerror.innerHTML="Username is too long"
        return false;
    }

    else{
        nameerror.innerHTML="<span> validated </span>"
        return true;
    }
}

function validateMail(){
    let mail = document.getElementById('email');
    let mailerror = document.getElementById('mailError');
    let regEx = /^[\w-\.]+@[\w-]+\.+[\w\.]{2,5}$/g;

    if(mail.value.trim()==''){
        mailerror.innerHTML="Email can't be blank";
        return false;
    }

    else if(!mail.value.match(regEx)){
        mailerror.innerHTML="Invalid Email";
        return false;
    }

    else{
        mailerror.innerHTML="<span> You are good to GO!! </span>"
        return true;
    }
}

function validatePass(){
    let password = document.getElementById('password');
    let passerror = document.getElementById('passError')

    if(password.value.trim()==''){
        passerror.innerHTML="Password can't be blank";
        return false;
    }

    if(password.value.length<8){
        passerror.innerHTML="Password is too short";
        return false;
    }

    else{
        passerror.innerHTML="<span> you are good to go!! </span>";
        return true;
    }

}

function validateForm(){
    if(validateName() && validatePass() && validateMail()){
        return true;
    }
    else{
        return false;
    }
}
