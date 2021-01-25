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
  
  function namePull(){
    document.getElementById("outputName").innerText = document.getElementById("inputName").value;
  }

  
  document.getElementById("calculate").addEventListener("click", namePull);
  document.getElementById("calculate").addEventListener("click", shotsToKill);
  document.getElementById("calculate").addEventListener("click", ttk);
  document.getElementById("reset").addEventListener("click", resetPage);

