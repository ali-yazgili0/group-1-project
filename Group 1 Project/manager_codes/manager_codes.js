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