


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multipe values at once like this
console.log(playerName, playerAttack, playerHealth);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
//if player choses to fight, the fight
if (promptFight === "fight" || promptFight === "FIGHT") {

//Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable.
enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so we know that it worked. 
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.")
}
// Subtract the value of 'enemyAttach' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
// if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.  goodbye!");
        // subract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option.  Try again!");
}
};

//fight();
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

