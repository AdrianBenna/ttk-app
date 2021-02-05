function shotsToKill() {
    var weaponDamage = 0;
    var playerHealth = 0;
    weaponDamage = document.getElementById("damage").value;
    playerHealth = document.getElementById("health").value;
    shots = Math.ceil(playerHealth / weaponDamage);
    document.getElementById("output").innerHTML = shots + " shots";
}

function ttk() {
    var roundsPerMin = 0;
    var timeToKill = 0;
    roundsPerMin = document.getElementById("rpm").value;
    timeToKill = ((shots - 1) / (roundsPerMin / 60)) * 1000;
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

