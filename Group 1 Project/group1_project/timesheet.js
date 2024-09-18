        // Toggle edit mode for time entries
        document.querySelectorAll('.edit-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                let timeEntry = this.parentElement;
                let timeText = timeEntry.querySelector('.time-text');
                let timeInputs = timeEntry.querySelectorAll('.time-input');

                // Toggle visibility of text and inputs
                timeText.style.display = timeText.style.display === 'none' ? 'block' : 'none';
                timeInputs.forEach(input => {
                    input.style.display = input.style.display === 'none' ? 'inline' : 'none';
                });
            });
        });

        // Save button functionality
        document.querySelector('.save-button').addEventListener('click', function() {
            document.querySelectorAll('.time-entry').forEach(entry => {
                let timeText = entry.querySelector('.time-text');
                let timeInputs = entry.querySelectorAll('.time-input');

                // Update the text with the new input values
                let code = timeInputs[0].value;
                let hours = timeInputs[1].value;

                timeText.innerHTML = code + '<br>' + hours;

                // Hide the inputs and show the text
                timeText.style.display = 'block';
                timeInputs.forEach(input => {
                    input.style.display = 'none';
                });
            });
        });