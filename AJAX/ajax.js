function ajax(){
    let request = new XMLHttpRequest()
    request.open("GET",'./jason.json',true)
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            console.log(response);
            var jpeople = response.people;
            console.log(jpeople);
            var output;
            for(i=0;i<jpeople.length;i++){
                output += "<li>" + jpeople[i].name + "</li>";
            }
            document.getElementById("demo").innerHTML= output;
        }
    }
    request.send()
}

function myFunc(){
    let funct=document.getElementById("press")
    var a=1;
    try{
        alert("value of a: "+ a);
    }

    catch(err){
        console.log("Error:" + err.description)
    }
}

function chEck(){
    let enter = document.getElementById("enter")
    let press = document.getElementById("press")
    let num = document.getElementById("num")

    let x = enter.value;
    num.innerHTML="";
    try{
        if(x=='') throw "field is empty";
        if(isNaN(x)) throw "Not a number";
        if(x<5) throw "low value";
        if(x>10) throw "high value";}

    catch(error){
        num.innerHTML="Input is " + error;
    }

    finally{
        enter.value="";
    }
}