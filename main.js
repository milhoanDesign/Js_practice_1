

// 1. Retrieve DOM elements
document.addEventListener('DOMContentLoaded', function() {


    // - Get references to the form inputs, the output list, and the buttons by their IDs
     const firstName = document.getElementById('firstName');
     const lastName = document.getElementById('lastName');
     const guestCountSelect = document.getElementById('selectGuests');
     const submitButton = document.getElementById('submitButton');
     const clearButton = document.getElementById('clearButton'); 
     const outputList = document.getElementById('outputList'); 


     // - Initilize Counters
     let totalGuests = 0; 
     let totalFriends = 0;
     
     function updateTotals () {
        // Update text in the Guest Total heading
        const guestHeading = document.getElementById('totalGuests');
        guestHeading.textContent = `Guests Total: ${totalGuests}`;

        // - Update text in the Friends Total heading
        const friendsHeading = document.getElementById('totalFriends');
        friendsHeading.textContent = `Friends Total: ${totalFriends}`; 
     }

    // 2. Function: Handle form submission

    function handleSubmit () {
        // - Get the values entered into the "First Name" and "Last Name" fields
        const firstNameValue = firstName.value.trim(); 
        const lastNameValue = lastName.value.trim(); 
        const guestCount = parseInt(guestCountSelect.value, 10); 
        
        // - If both fields are filled, create a new list item combining the names
        if (firstNameValue && lastNameValue) {
            const listItem = document.createElement("li"); 
            listItem.textContent = `${firstNameValue} ${lastNameValue}. Number of guests: ${guestCount}`; 
            
            // - Append the new list item to the "outputList" (Guest List) section
            outputList.appendChild(listItem); 

            // - Update totals
            totalGuests += 1; 
            totalFriends += guestCount; // each count adds one friend

            // - Update Totals
            updateTotals(); 

            // - Clear the input fields after submission
            firstName.value = "";
            lastName.value = "";
            guestCountSelect.value = '0'; 

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
        
        // - Set the select field back to 0
        guestCountSelect.value = '0';


        // - Clear the list items
        outputList.innerHTML = ""; 
        totalGuests = 0; 
        totalFriends = 0; 

        // Update totals call
        updateTotals(); 

        // - Add focus to first name input
        firstName.focus(); 
         
    }
    // 4. Event listeners for buttons
        // - Listen for clicks on the "Submit" button to call the form submission function
        submitButton.addEventListener('click', handleSubmit);

        // - Listen for clicks on the "Clear" button to call the clear form function
        clearButton.addEventListener('click', handleClear); 
    })