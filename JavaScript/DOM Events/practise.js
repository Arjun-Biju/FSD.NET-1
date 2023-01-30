function validName(){
    let vn = document.getElementById("name");
    let vEn = document.getElementById("nameError");
    let regName = /^\D{0,30}$/g

    if(!vn.value.match(regName)||vn.value.trim()==""){
        vEn.innerHTML="Invalid Format: Enter alphabets alone";
        return false;
    }

    else{
        vEn.innerHTML="<span>Valid format!</span>";
        return true;
    }
}

function validNum(){
    let vnum = document.getElementById("number");
    let vEnum = document.getElementById("numError");
    let regNum = /^\d{10,13}$/g

    if(!vnum.value.match(regNum)||vnum.value.trim()==""){
        vEnum.innerHTML="Invalid Format: Enter numbers alone";
        return false;
    }

    else{
        vEnum.innerHTML="<span>Valid format!</span>";
        return true;
    }
}

function validPass(){
    let vp = document.getElementById("password");
    let vEp = document.getElementById("passError")
    let regPass = /^\w{8,20}$/g

    if(!vp.value.match(regPass)||vp.value.trim()==""){
        vEp.innerHTML="Invalid format or too short: Enter AlphaNumerics alone";
        return false;
    }

    else{
        vEp.innerHTML="<span>Password is good</span>"
        return true;
    }
}

function subMit(){
    if(validName() && validNum() && validPass()){
        return true
    }
    else{
        return false
    }
}