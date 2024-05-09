
// Initialize counters
let totalGuests = 0;
let totalFriends = 0;

function updateTotals() {
    // Update text in the "Guests Total" heading
    const guestHeading = document.querySelector("h3:contains('Guests Total:')");
    guestHeading.textContent = `Guests Total: ${totalGuests}`;

    // Update text in the "Friends Total" heading
    const friendHeading = document.querySelector("h3:contains('Friends Total:')");
    friendHeading.textContent = `Friends Total: ${totalFriends}`;
}

function handleSubmit() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const guestCount = parseInt(guestCountSelect.value, 10);

    if (firstNameValue && lastNameValue) {
        // Create the new list item
        const listItem = document.createElement("li");
        listItem.textContent = `${firstNameValue} ${lastNameValue}. Number of guests: ${guestCount}`;
        outputList.appendChild(listItem);

        // Update totals
        totalFriends += 1; // Each submission adds one "friend"
        totalGuests += guestCount;

        // Update totals in headings
        updateTotals();

        // Clear input fields
        firstName.value = "";
        lastName.value = "";
        guestCountSelect.value = '0';

        // Focus back to the first name input
        firstName.focus();
    } else {
        alert("Please enter all fields");
    }
}

function handleClear() {
    // Clear all input fields
    firstName.value = "";
    lastName.value = "";
    guestCountSelect.value = '0';

    // Clear the guest list and reset totals
    outputList.innerHTML = "";
    totalGuests = 0;
    totalFriends = 0;

    // Update totals in headings
    updateTotals();

    // Focus back to the first name input
    firstName.focus();
}

// Event listeners
submitButton.addEventListener('click', handleSubmit);
clearButton.addEventListener('click', handleClear);
