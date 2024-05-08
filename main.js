
// Pseudo code for handling form input and output

// 1. Retrieve DOM elements
document.addEventListener('DOMContentLoaded', function() {


    // - Get references to the form inputs, the output list, and the buttons by their IDs
     const firstName = document.getElementById('firstName');
     const lastName = document.getElementById('lastName');
     const submitButton = document.getElementById('submitButton');
     const clearButton = document.getElementById('clearButton'); 
     const outputList = document.getElementById('outputList'); 

    // 2. Function: Handle form submission

    function handleSubmit () {
        // - Get the values entered into the "First Name" and "Last Name" fields
        const firstNameValue = firstName.value.trim(); 
        const lastNameValue = lastName.value.trim(); 
        
        // - If both fields are filled, create a new list item combining the names
        if (firstNameValue && lastNameValue) {
            const listItem = document.createElement("li"); 
            listItem.textContent = `${firstNameValue} ${lastNameValue}`; 
            
            // - Append the new list item to the "outputList" (Guest List) section
            outputList.appendChild(listItem); 

            // - Clear the input fields after submission
            firstName.value = "";
            lastName.value = "";

            //Set the focus back to the firstName
            firstName.focus(); 
       
        } else {
            alert("Please enter all fields"); 
        }
    }
    
    
    // 3. Function: Clear form input fields
    function handleClear () {
        // - Set the "First Name" and "Last Name" input fields to empty strings
        firstName.value = "";
        lastName.value = ""; 
        outputList.innerHTML = ""; 
        firstName.focus(); 
         
    }
    // 4. Event listeners for buttons
        // - Listen for clicks on the "Submit" button to call the form submission function
        submitButton.addEventListener('click', handleSubmit);

        // - Listen for clicks on the "Clear" button to call the clear form function
        clearButton.addEventListener('click', handleClear); 
    })