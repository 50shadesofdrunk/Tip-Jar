document.addEventListener('DOMContentLoaded', function () {
    const tipButton = document.querySelector('button');
    const tipInput = document.querySelector('input[type="number"]');
    const progressBar = document.querySelector('.progress-bar');
    const messageSection = document.querySelector('.messages');
    const topContributorsSection = document.querySelector('.top-contributors');
    
    // Example data for top contributors and messages
    const topContributors = [{'name': 'Alice', 'amount': 50}, {'name': 'Bob', 'amount': 35}];
    const messages = [{'name': 'Charlie', 'message': 'Keep up the good work!'}];

    // Update the progress bar based on current tip total
    function updateProgressBar(currentTotal, goalTotal) {
        const progressPercentage = (currentTotal / goalTotal) * 100;
        progressBar.style.width = progressPercentage + '%';
        progressBar.textContent = progressPercentage.toFixed(0) + '%';
    }

    // Display messages from users
    function displayMessages() {
        messages.forEach(message => {
            const messageElement = document.createElement('p');
            messageElement.textContent = `${message.name}: ${message.message}`;
            messageSection.appendChild(messageElement);
        });
    }

    // Display top contributors
    function displayTopContributors() {
        topContributors.forEach(contributor => {
            const contributorElement = document.createElement('p');
            contributorElement.textContent = `${contributor.name}: $${contributor.amount}`;
            topContributorsSection.appendChild(contributorElement);
        });
    }

    // Handle tip submission
    tipButton.addEventListener('click', function () {
        const tipAmount = parseFloat(tipInput.value);
        if (isNaN(tipAmount) || tipAmount <= 0) {
            alert('Please enter a valid tip amount.');
            return;
        }

        // Here, integrate with the payment gateway API
        // For demonstration, we'll assume the tip is successfully processed

        // Update the progress bar and display sections
        updateProgressBar(tipAmount, 100); // Assuming 100 is the goal total
        displayMessages();
        displayTopContributors();

        // Clear the input field
        tipInput.value = '';
    });
});

