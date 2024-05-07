
document.addEventListener('DOMContentLoaded', function() {
    // Get the input and button elements
    const firstName = document.getElementById('input1');
    const lastName = document.getElementById('input2');
    const submit = document.getElementById('submitButton');
    const clear = document.getElementById('clearButton');
    const outputText = document.getElementById(outputText); 

    // Function to handle the submissions
    function submit () {
        const value1 = firstName.value.trim(); // Get and trim the value of input 1
        const value2 = lastName.value.trim(); // Get and trim value 2
        
        // Combine each value into a result
        const result = `${lastName} + "," + ${firstName}`; 

        // Update output <p> with the result
        outputText.textContent = result; 
    }

    // Function to handle clear button
    function clear () {
        firstName.value = "";
        lastName.value = ""; 
        outputText.value = "Names will be listed here:";
    }

    // Add event listeners to the buttons
    submitButton.addEventListener('click', submit); 
    clearButton.addEventListener('click', clear); 
})