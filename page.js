function initPick() {
  var init = "img/mystery.svg";
  document.getElementById('oppResult').src = init;
  localStorage.playerWins = 0;
  localStorage.oppWins = 0;
  localStorage.playerLosses = 0;
  localStorage.oppLosses = 0;
  localStorage.ties = 0;
}

function rockPick() {
  function genPick() {
    var pick = "img/mystery.svg";
    if (Math.floor(Math.random() * 3) == 2) {
      var pick = "img/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var pick = "img/paper.svg";
    } else {
      var pick = "img/scissors.svg";
    }
    document.getElementById('oppResult').src = pick;
    if (pick == "img/rock.svg") {
      document.getElementById('result').innerHTML = "Your skills are evenly matched - no hits have been made.";
      localStorage.ties++;
      console.log("Ties are:" + localStorage.ties);
    } else if (pick == "img/paper.svg") {
      document.getElementById('result').innerHTML = "Caught off Guard! The enemy has made a hit.";
      localStorage.playerLosses++;
      localStorage.oppWins++;
      console.log("Opponent Wins are:" + localStorage.oppWins + "and Player Losses: " + localStorage.playerLosses);
    } else {
      document.getElementById('result').innerHTML = "Success! You have hit the enemy.";
      localStorage.playerWins++;
      localStorage.oppLosses++;
      console.log("Opponent Losses are:" + localStorage.oppLosses + "and Player Wins: " + localStorage.playerWins);
    }
    displayHearts();
  }
  genPick();
}

function paperPick() {
  function genPick() {
    var pick = "img/mystery.svg";
    if (Math.floor(Math.random() * 3) == 2) {
      var pick = "img/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var pick = "img/paper.svg";
    } else {
      var pick = "img/scissors.svg";
    }
    document.getElementById('oppResult').src = pick;
    if (pick == "img/paper.svg") {
      document.getElementById('result').innerHTML = "Your skills are evenly matched - no hits have been made.";
      localStorage.ties++;
      console.log("Ties are:" + localStorage.ties);
    } else if (pick == "img/scissors.svg") {
      document.getElementById('result').innerHTML = "Caught off Guard! The enemy has made a hit.";
      localStorage.playerLosses++;
      localStorage.oppWins++;
      console.log("Opponent Wins are:" + localStorage.oppWins + "and Player Losses: " + localStorage.playerLosses);
    } else {
      document.getElementById('result').innerHTML = "Success! You have hit the enemy.";
      localStorage.playerWins++;
      localStorage.oppLosses++;
      console.log("Opponent Losses are:" + localStorage.oppLosses + "and Player Wins: " + localStorage.playerWins);
    }
    displayHearts();
  }
  genPick();
}

function scissorsPick() {
  function genPick() {
    var pick = "img/mystery.svg";
    if (Math.floor(Math.random() * 3) == 2) {
      var pick = "img/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var pick = "img/paper.svg";
    } else {
      var pick = "img/scissors.svg";
    }
    document.getElementById('oppResult').src = pick;
    if (pick == "img/scissors.svg") {
      document.getElementById('result').innerHTML = "Your skills are evenly matched - no hits have been made.";
      localStorage.ties++;
      console.log("Ties are:" + localStorage.ties);
    } else if (pick == "img/rock.svg") {
      document.getElementById('result').innerHTML = "Caught off Guard! The enemy has made a hit.";
      localStorage.playerLosses++;
      localStorage.oppWins++;
    } else {
      document.getElementById('result').innerHTML = "Success! You have hit the enemy.";
      localStorage.playerWins++;
      localStorage.oppLosses++;
    }
    displayHearts();
  }
  genPick();
}


function displayHearts() {
  console.log("Inside displayHearts");
  if(localStorage.playerLosses == 3){
    document.getElementById('playerHearts').innerHTML = '<i class="heart far fa-regular fa-heart"></i><i class="heart far fa-regular fa-heart"></i><i class="heart far fa-regular fa-heart"></i>';
  }
  else if(localStorage.playerLosses == 2){
    document.getElementById('playerHearts').innerHTML = '<i class="heart fa fa-solid fa-heart"></i><i class="heart far fa-regular fa-heart"></i><i class="heart far fa-regular fa-heart"></i>';
  } 
  else if(localStorage.playerLosses == 1){
    document.getElementById('playerHearts').innerHTML = '<i class="heart fa fa-solid fa-heart"></i><i class="heart fa fa-solid fa-heart"></i><i class="heart far fa-regular fa-heart"></i>';
  }


  if(localStorage.oppLosses == 3){
    document.getElementById('oppHearts').innerHTML = '<i class="heart far fa-regular fa-heart"></i><i class="heart far fa-regular fa-heart"></i><i class="heart far fa-regular fa-heart"></i>';
  }
  else if(localStorage.oppLosses == 2){
    document.getElementById('oppHearts').innerHTML = '<i class="heart fa fa-solid fa-heart"></i><i class="heart far fa-regular fa-heart"></i><i class="heart far fa-regular fa-heart"></i>';
  } 
  else if(localStorage.oppLosses == 1){
    document.getElementById('oppHearts').innerHTML = '<i class="heart fa fa-solid fa-heart"></i><i class="heart fa fa-solid fa-heart"></i><i class="heart far fa-regular fa-heart"></i>';
  }

  if(localStorage.playerLosses >= 3 || localStorage.oppLosses >= 3){
    document.getElementById('result').innerHTML = "<p class='gameOver'>GAME OVER</p><button class='playAgain' onClick='window.location.reload();'>Play Again?</button>";
  }
}