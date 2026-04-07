<<<<<<< HEAD
//Game State
=======
// --- Game State ---
>>>>>>> 6177152 (Play and Buttons)
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let totalGuesses = 0;
<<<<<<< HEAD
let scores = 0;

//Player Name
let playerName = prompt("Enter your name:");

//Play
//get level
document.getElementById("playBtn").addEventListener("click", function(){
    let radios = document.getElementsByName("level");
    let range = 3;
    for (let i=0; i < radios.length; i++){
        if(radios[i].checked){
            range = parseint(radios[i].value);
        }
    }
})

//round setup
answer = Math.floor(Math.random() * range) + 1;

document.getElementById("msg").textContent = playerName + ", guess a number between 1 and " + range;
=======
let scores = [];


// --- Player Name ---
let playerName = prompt("Enter your name:");

// --- Play ---
document.getElementById("playBtn").addEventListener("click", function () {
  let radios = document.getElementsByName("level");
  let range = 3;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      range = parseInt(radios[i].value);
    }
  }
  //pick answer

    answer = Math.floor(Math.random() * range) + 1;
    // Disable & Enable buttons and radio choices
    document.getElementById("msg").textContent = playerName + ", guess a number between 1 and " + range;
    document.getElementById("guess").value="";
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = false;
    document.getElementById("playBtn").disabled = true;

    let levelRadios = document.getElementsByName("level");
    for (let i = 0; i < levelRadios.length; i++) {
        levelRadios[i].disabled = true;
    }

});
>>>>>>> 6177152 (Play and Buttons)
