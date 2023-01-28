var x=document.getElementById("heading");
x.innerHTML="<h4>Javascript lessons</h4>";
x.innerText="This is for testing purposes";

var y=document.getElementById("text");
y.innerHTML="<h3>Testing DOM</h3><p>DOM is working fine</p>"

var z=document.getElementsByTagName("p")
z[0].style.color="green";