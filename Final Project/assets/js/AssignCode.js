document.getElementById('assignCodeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const employeeName = document.getElementById('employeeName').value;
    const code = document.getElementById('code').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    console.log(`Code assigned to ${employeeName}:`);
    console.log(`Code: ${code}`);
    console.log(`Start Time: ${startTime}`);
    console.log(`End Time: ${endTime}`);
});



document.getElementById('assignCodeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the feedback message as a tooltip
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.style.visibility = 'visible';
    feedbackMessage.style.opacity = '1';

    // Automatically restart the page after 3 seconds
    setTimeout(function() {
        location.reload();
    }, 3000);
});
