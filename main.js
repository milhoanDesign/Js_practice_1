
// Wait for the DOM content to load fully before accessing elements
document.addEventListener("DOMContentLoaded", function () {
    
    // Get the input and button elements
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const submitButton = document.getElementById("submitButton");
    const clearButton = document.getElementById("clearButton");
    const outputList = document.getElementById("outputList");

    // Function to handle the submission
    function handleSubmit() {
        const value1 = firstName.value.trim(); // Get and trim the value of input1
        const value2 = lastName.value.trim(); // Get and trim the value of input2

       // Check if both fields have values
        if (value1 && value2) {
            // Combine both values into a guest list <li>
            const result = `Guest Name: ${value1}, ${value2}`; 
            
            // Create a new <li> element and add it to outputList
            const listItem = document.createElement("li");
            listItem.textContent = result; 
            outputList.appendChild(listItem); 
       } else {
            // Handle cases where on or both fields are empty
            alert(`Please fill out both name fields`); 
       }
    }

    // Function to handle the clearing of inputs and output
    function handleClear() {
        firstName.value = "";
        lastName.value = "";
        outputList.innerHTML = "No guests have regisered.";
    }

    // Attach event listeners to the buttons
    submitButton.addEventListener("click", handleSubmit);
    clearButton.addEventListener("click", handleClear);
});