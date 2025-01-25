// Function to swap the second and last digits of a number
function swapDigits(numberInput) {
    // Check if the input number has at least 3 digits; if not, alert the user
    if (numberInput.length < 3) {
        alert("Please enter a number with at least 3 digits.");
        return; // Exit the function if the condition is met
    }

    // Convert the input string to an integer for the original number
    var originalNumber = parseInt(numberInput); 
    
    // Initialize a variable to hold the new number after swapping digits
    var newNumber = 0;
    
    // Get the number of digits in the input number
    var numberOfDigits = numberInput.length;

    // Loop through each digit of the number to process the swapping
    for (var i = 0; i < numberOfDigits; i++) {
        // Get the digit at the current position in the string (i-th digit)
        var digit = parseInt(numberInput.charAt(i)); 
        
        // If it's the second digit (index 1), swap it with the last digit
        if (i === 1) {
            digit = parseInt(numberInput.charAt(numberOfDigits - 1));
        } 
        // If it's the last digit, swap it with the second digit
        else if (i === numberOfDigits - 1) {
            digit = parseInt(numberInput.charAt(1));
        }

        // Construct the new number by shifting the existing digits and adding the current one
        newNumber = newNumber * 10 + digit;
    }

    // Display the original and new number to the user
    alert("Original Number: " + originalNumber + "\nNew Number: " + newNumber);
}

// Wait for the DOM content to load, then prompt the user to enter a number
document.addEventListener("DOMContentLoaded", function() {
    // Prompt the user to enter a number (at least 3 digits)
    var numberInput = prompt("Enter a number (at least 3 digits):");

    // Call the swapDigits function to process the entered number
    swapDigits(numberInput);
});
