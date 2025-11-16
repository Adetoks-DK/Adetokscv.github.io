<script>
function play(playerChoice) {
    // Computer random choice
    let choices = ["rock", "paper", "scissors"];
    let compChoice = choices[Math.floor(Math.random() * 3)];

    // Display computer choice
    document.getElementById("computer").innerHTML = "Computer chose: " + compChoice;

    // Determine winner using IF STATEMENTS
    if (playerChoice === compChoice) {
        document.getElementById("result").innerHTML = "It's a TIE!";
    }

    if (playerChoice === "rock" && compChoice === "scissors") {
        document.getElementById("result").innerHTML = "You WIN! Rock smashes scissors.";
    }

    if (playerChoice === "rock" && compChoice === "paper") {
        document.getElementById("result").innerHTML = "You LOSE. Paper covers rock.";
    }

    if (playerChoice === "paper" && compChoice === "rock") {
        document.getElementById("result").innerHTML = "You WIN! Paper covers rock.";
    }

    if (playerChoice === "paper" && compChoice === "scissors") {
        document.getElementById("result").innerHTML = "You LOSE. Scissors cut paper.";
    }

    if (playerChoice === "scissors" && compChoice === "paper") {
        document.getElementById("result").innerHTML = "You WIN! Scissors cut paper.";
    }

    if (playerChoice === "scissors" && compChoice === "rock") {
        document.getElementById("result").innerHTML = "You LOSE. Rock smashes scissors.";
    }
}
</script>