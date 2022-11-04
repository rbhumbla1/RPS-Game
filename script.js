var userInput = "";
var compSel = "";
var valArr = ["R", "P", "S"];
var rand = 0;
var again = "true";
var wins = 0;
var loses = 0;
var ties = 0;

//function to play the game
function playGame() {
    while (again) {

        userInput = window.prompt("Please select one : R, P or S");

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
                ties++;
            }else if ((userInput === "R" && compSel === "S") )

            //display stats

            //see if we want to run again
            again = window.confirm("Play again?");
        } else {
            again = false;
        }

        //call play game recursively instead of while?
    }
}

//put while statement here
playGame();