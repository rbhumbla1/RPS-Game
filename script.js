var userInput = "";
var compSel = "";
var valArr = ["R", "P", "S"];
var rand = 0;
var again = "true";
var stats = {
    wins: 0,
    loses: 0,
    ties: 0
};

//function to play the game
function playGame() {
    while (again) {

        userInput = window.prompt("Please select one : R, P or S");
        userInput = userInput.toUpperCase();
        

        if (userInput == "") {
            window.alert("Please input one of the values: R, P or S");
        } else if (userInput != null) {

            //user selection
            window.alert("You selected " + userInput);

            // Computer selection
            rand = Math.floor(Math.random() * 10) % 3;
            compSel = valArr[rand];
            window.alert("Computer selected " + compSel);

            //put login for win, loses & ties
            if(userInput === compSel){
                stats.ties++;
                window.alert("It is a tie!");
            }else if ((userInput === "R" && compSel === "S") ||
                        (userInput === "P" && compSel === "R") ||
                        (userInput === "S" && compSel === "P")){
                stats.wins++;
                window.alert("You win!");
            }else {
                stats.loses++;
                window.alert("You lost!");
            }

            //display stats
            window.alert("Stats so far:\n Wins:"+ stats.wins + "\nLosses:" + stats.loses + "\nTies:" + stats.ties);

            //see if we want to run again
            again = window.confirm("Play again?");
        } else {
            again = false;
        }

        //call play game recursively instead of while?
    }
}

//put while statement here
setTimeout(playGame, 1000);
// playGame();