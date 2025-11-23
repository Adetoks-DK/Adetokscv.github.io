<script>
let roundsPlayed = 0;
let gameOver = false;

function play(playerChoice) {
    if (gameOver) return; // Stop if user already won

    roundsPlayed++;

    let choices = ["rock", "paper", "scissors"];    
    let compChoice = choices[Math.floor(Math.random() * 3)]; // New guess each round

    document.getElementById("computer").innerHTML = "Computer chose: " + compChoice;

    let resultText = "";

    if (playerChoice === compChoice) {
        resultText = "It's a TIE!";
    }

    if (playerChoice === "rock" && compChoice === "scissors") {
        resultText = "You WIN! Rock smashes scissors.";
        gameOver = true;
    }

    if (playerChoice === "rock" && compChoice === "paper") {
        resultText = "You LOSE. Paper covers rock.";
    }

    if (playerChoice === "paper" && compChoice === "rock") {
        resultText = "You WIN! Paper covers rock.";
        gameOver = true;
    }

    if (playerChoice === "paper" && compChoice === "scissors") {
        resultText = "You LOSE. Scissors cut paper.";
    }

    if (playerChoice === "scissors" && compChoice === "paper") {
        resultText = "You WIN! Scissors cut paper.";
        gameOver = true;
    }

    if (playerChoice === "scissors" && compChoice === "rock") {
        resultText = "You LOSE. Rock smashes scissors.";
    }

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("rounds").innerHTML = "Round: " + roundsPlayed + " / 3";

    if (roundsPlayed >= 3 && !gameOver) {
        gameOver = true;
        document.getElementById("result").innerHTML += "<br>Game over! You did not win in 3 rounds.";
    }
}
</script>