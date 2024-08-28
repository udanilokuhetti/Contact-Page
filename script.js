const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const query = document.getElementsByName('query'); // Get all query radio buttons
const message = document.getElementById('message');
const agree = document.getElementById('agree');

function valid(event) {
    // Prevent the form from submitting initially
    event.preventDefault();

    // Check if any field is empty
    if (fName.value.trim() === "" || 
        lName.value.trim() === "" || 
        email.value.trim() === "" || 
        message.value.trim() === "") {
        
        alert("All fields are required.");
        return false; // Prevent form submission
    }

    // Check if any query radio button is selected
    let querySelected = false;
    for (let i = 0; i < query.length; i++) {
        if (query[i].checked) {
            querySelected = true;
            break;
        }
    }
    if (!querySelected) {
        alert("Please select a query type.");
        return false;
    }

    // Check if the user has agreed
    if (!agree.checked) {
        alert("To submit this form, please consent to being contacted.");
        return false; // Prevent form submission
    }
    
    // Additional email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // Success message
    alert("Message Sent! Thanks for completing the form. We'll be in touch soon!");

    // Allow form submission after the success message
    event.target.submit();
    return true;
}
