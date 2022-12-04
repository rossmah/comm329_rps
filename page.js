// called by body onload, sets initial image for opponent
function initPick() {
  var init = "img/mystery.svg";
  document.getElementById('oppResult').src = init;
  localStorage.playerWins = 0;
  localStorage.oppWins = 0;
  localStorage.playerLosses = 0;
  localStorage.oppLosses = 0;
  localStorage.ties = 0;
}

// called by onclick when rock button is clicked
function rockPick() {
  // generates a random pick for opponent
  function genPick() {
    var pick = "img/mystery.svg";
    if (Math.floor(Math.random() * 3) == 2) {
      var pick = "img/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var pick = "img/paper.svg";
    } else {
      var pick = "img/scissors.svg";
    }
    // sets the opponent's image for the generated pick
    document.getElementById('oppResult').src = pick;
    // comparison logic
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
  // runs the function
  genPick();
}

// called by onclick when paper button is clicked
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


// called by onclick when scissors button is clicked
function scissorsPick() {
  // generates a random pick for opponent
  function genPick() {
    var pick = "img/mystery.svg";
    if (Math.floor(Math.random() * 3) == 2) {
      var pick = "img/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var pick = "img/paper.svg";
    } else {
      var pick = "img/scissors.svg";
    }
    // sets the opponent's image for the generated pick
    document.getElementById('oppResult').src = pick;
    // comparison logic
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
  // runs the function
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


//Sets the score
function memory() {
  //Sets the number of wins to 0 if this is your first time playing
  if (localStorage.wins == undefined) {
    localStorage.wins = 0;
  }
  //Sets the number of wins displayed equal to the number stored in the browser
  document.getElementById("winNumber").innerHTML = localStorage.wins;
  //Sets the number of losses to 0 if this is your first time playing
  if (localStorage.losses == undefined) {
    localStorage.losses = 0;
  }
  //Sets the number of losses displayed equal to the number stored in the browser
  document.getElementById("loseNumber").innerHTML = localStorage.losses;
  //Sets the number of ties to 0 if this is your first time playing
  if (localStorage.ties == undefined) {
    localStorage.ties = 0;
  }
  //Sets the number of ties displayed equal to the number stored in the browser
  document.getElementById("tieNumber").innerHTML = localStorage.ties;
}

//Resets the score to 0
function reset() {
  //Changes the opponent's choice image to a question mark
  document.getElementById("opponentChoice").src = "img/questionMark.svg";
  //Sets the wins, losses, and ties in the browser to 0 and changes the numbers displayed to match them
  localStorage.wins = 0;
  document.getElementById("winNumber").innerHTML = localStorage.wins;
  localStorage.losses = 0;
  document.getElementById("loseNumber").innerHTML = localStorage.losses;
  localStorage.ties = 0;
  document.getElementById("tieNumber").innerHTML = localStorage.ties;
}