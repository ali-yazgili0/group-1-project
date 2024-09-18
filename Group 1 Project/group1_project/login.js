function redirectUser(event) {
    event.preventDefault();  // Prevent form from submitting and reloading the page

    const username = document.getElementById('username').value;

    // Check if the email contains 'manager' or 'employee'
    if (username.includes('manager')) {
        // Redirect to the manager's page
        window.location.href = 'manager_timesheet.html';
    } else if (username.includes('employee')) {
        // Redirect to the employee's page
        window.location.href = 'timesheet_test.html';
    } else {
        // Default action if neither 'manager' nor 'employee' is found in the email
        alert("Invalid username. Please include 'manager' or 'employee' in the email.");
    }
}