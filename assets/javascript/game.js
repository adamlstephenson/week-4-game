
// Functions
//========================================================

$("document").ready(function() {

    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // function startGame() {
                // Generate and show random number

    var randomNumber = Math.floor(Math.random() * 101) +19;
    $("#random-number").text(randomNumber);

                // Assign random numbers to  crystals

        var crystal = Math.floor(Math.random() * 11) +1;
        $("#crystal").val(crystal);
        console.log(crystal);
        var emerald = Math.floor(Math.random() * 11) +1;
        $("#emerald").val(emerald);
        console.log(emerald);
        var sapphire = Math.floor(Math.random() * 11) +1;
        $("#sapphire").val(sapphire);
        console.log(sapphire);
        var zircon = Math.floor(Math.random() * 11) +1;
        $("#zircon").val(zircon)
        console.log(zircon);

    // }



    // Show wins and losses

    $("#wins").text("wins   " + wins);
    $("#losses").text("losses   " + losses);

    // Show totalScore

    $("#scorecounter").text(totalScore);

    // Set up click events
        // Print the value of each crystal that is clicked
            // Add values to existing totalScore

        $("#crystals").on("click", "img", function(event) {
           
                $("#scorecounter").html(totalScore + event.value);

                   if (totalScore === randomNumber) {
                       $("#result").text("You won!");
                       wins++;
                       $("#wins").text(wins);
                      // gameStart();
                   } 
                   else if (totalScore > randomNumber) {
                       $("#result").text("You lost");
                       losses--;
                       $("#losses").text(losses);
                       // gameStart ();
                   }




        });


    // If totalScore === random number then add win and start over
        // Else if score goes above random number then add loss anf start over




});





// Game Process
//========================================================