/*
var weaponDamage = document.getElementById("damage");
var roundsPerMin = document.getElementById("rpm");
var playerHealth = document.getElementById("health");


function getDamage(yip){
        document.getElementById("damage").innerText = yip;
     return document.getElementById("output").innerText = yip;
}

function getRounds(){
    return document.getElementById("rpm").innerText;
}

function getHealth(){
    return document.getElementById("health").innerText;
}


  function myFunction() {
    var x = document.getElementById("damage").value;
    document.getElementById("output").innerHTML = x;
  }

  function myFunctionAA() {
    var y = document.getElementById("rpm").value;
    document.getElementById("output1").innerHTML = y;
  }

  function myFunctionBB() {
    var z = document.getElementById("health").value;
    document.getElementById("output2").innerHTML = z;
  }

  document.getElementById("calculate").addEventListener("click", myFunction);
  document.getElementById("calculate").addEventListener("click", myFunctionAA);
  document.getElementById("calculate").addEventListener("click", myFunctionBB);

*/
var shots = 0;

function shotsToKill() {
    var weaponDamage = document.getElementById("damage").value;
    var playerHealth = document.getElementById("health").value;
    shots = Math.ceil(playerHealth / weaponDamage);
    document.getElementById("output").innerHTML = shots + " shots to kill";
    
}



function ttk() {
    var roundsPerMin = document.getElementById("rpm").value;
    var timeToKill = ((shots - 1) / (roundsPerMin / 60)) * 1000;
    document.getElementById("output1").innerHTML = timeToKill.toPrecision(3) + " milliseconds";
}

  function resetPage(){
    window.location.reload();
  }
  


  document.getElementById("calculate").addEventListener("click", shotsToKill);
  document.getElementById("calculate").addEventListener("click", ttk);
  document.getElementById("reset").addEventListener("click", resetPage);

