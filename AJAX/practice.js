var xhttp = new XMLHttpRequest;
xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        var response = JSON.parse(this.responseText);
        var output=""
        for(let i=0;i<response.length;i++){
            output +="<li>" + response[i].name + "</li>";
        }
        document.getElementById("list").innerHTML=output;
    }
}

function myFunc(){
    try {
        var input = document.getElementById("enter");
        if(isNaN(input.value)) throw "Should be a number"
        else{
        let a = 3; 
        let b = a/input.value;
        if(!isFinite(b)) throw "Denominator shouldn't be zero"
    
    }
}
        
     catch (error) {
        let err = document.getElementById("errorm");
        err.innerHTML= "Error:" + error;
    }

    finally{
        input.value = "";
        setTimeout(clear,3500)
    }
}

function clear(){
    let err = document.getElementById("errorm");
    err.innerHTML="";

}