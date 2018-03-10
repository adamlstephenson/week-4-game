// Variables
//========================================================

var wins = 0;
var losses = 0;
var totalScore = 0;


// Functions
//========================================================

$("document").ready(function() {

    // function startGame() {
                // Generate and show random number

        $("#random-number").text(Math.floor(Math.random() * 101) +19);

                // Assign random numbers to  crystals

        var crystal = Math.floor(Math.random() * 11) +1;
        console.log(crystal);
        var emerald = Math.floor(Math.random() * 11) +1;
        var sapphire = Math.floor(Math.random() * 11) +1;
        var zircon = Math.floor(Math.random() * 11) +1;

    // }



    // Show wins and losses

    $("#wins").text("wins   " + wins);
    $("#losses").text("losses   " + losses);

    // Show totalScore

    // Set up click events
        // Print the value of each crystal that is clicked
            // Add values to existing totalScore

    // If totalScore === random number then add win and start over
        // Else if score goes above random number then add loss anf start over




});





// Game Process
//========================================================