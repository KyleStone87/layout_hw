function myFunction () {
    var x = prompt ("Enter a number between 2 and 10");//have user enter a number between 2 and 10
   if (x >=2 && x <= 10){//if x is within normal range 2-10
        var star = [];//declare variable to house the stars
        for (var i = x; i>0;i--){//creates the rows
            for (var j = 0; j<i;j++){//creates the columns
                star += "* ";
            }
            star += "<br \>";//after all columns, insert carriage return to start a new line
        }
        document.getElementById("star").innerHTML = star;//display the stars in element ID "star"
        var y = Math.log2(x/0.000001); //the amount of 2's to divide by to get less than 0.000001
        document.getElementById("response").innerHTML = 
        "Your input number is "+ x + ". <br \> <br />The number of times to divide the number of "+ x +" by 2 to get a value of less than one millionth is " + y.toFixed(0) + ". <br />"
    // displays y, shortened to remove decimals. Value is rounded up to nearest whole number.
    } 
    else {  //user didn't enter a correct value
        document.getElementById("response").innerHTML = 
        "Your input is " + x + ". A valid number is between 2 and 10. Please reload the page and try again.";
        document.getElementById("star").removeAttribute("borde-style");
    }
    
}
