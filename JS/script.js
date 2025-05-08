function changecolor() {
    var d = document.getElementsByClassName("color")[0];
    d.style.backgroundColor = "white";
    d.style.width = "500px";
}





function update() {
    var a = document.getElementById("input").value; 
    document.getElementById("result").textContent = a; 
}


var a="";
function repeat(){
    a=a+ "RCB<br>";
   document.getElementById("exil").innerHTML=a;
}




var b=document.getElementById("ipl").value;
function team(event)
{
    if(event.target.textContent=="RCB")
    {
    ipl.textContent=event.target.textContent+" 👑";
    }
    if(event.target.textContent=="CSK")
    {
    ipl.textContent=event.target.textContent+" 🌈";
    }
    if(event.target.textContent=="MI")
    {
    ipl.textContent=event.target.textContent+" 💩";
    }
}




 function up(event)
{
    event.target.remove();
}


function up(event) {
    event.target.remove();
}

function addList() {
    var name = document.getElementById("name").value;
    var list = document.getElementById("list");
    list.innerHTML += `<li><span style="font-size: 2em; font-weight: bold;">${name}</span> <button onclick="deleteList(event)">DELETE</button></li>`;
}

function deleteList(event) {
    event.target.parentElement.remove();
}

function alertclick(){
    alert("vanakkam da mapla");
}

function hoverAlert() {
    alert("poda puulluka");
}



var butt=document.getElementById("three");
butt.addEventListener("click",function(){
    alert("vanakkam da mapla");
})
butt.addEventListener("mouseover",function()
{
    alert("poda pullukka");
})




var a=Math.floor(Math.random()*10)+1;
function guess(){
    var h=10;
 var d=document.getElementById("guess").value;
    if(d==a && h>1)
    {
      alert("Masss");
    }
    else if(d!=a && h>1){
        document.getElementById("result1").innerHTML="Wrong,Try again";
        var h=h-1;
        document.getElementById("guess1").innerHTML="remaining guesses: "+h;
    }
    else{
        alert("game over");
    }
}
