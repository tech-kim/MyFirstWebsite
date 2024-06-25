document.addEventListener('DOMContentLoaded', function() {
    // Get all rows in the table
    let rows = document.querySelectorAll('.team-stats tbody tr');

    // Iterate through each row
    rows.forEach(function(row) {
        // Get wins and losses from the row
        let wins = parseInt(row.cells[1].textContent); // Wins
        let losses = parseInt(row.cells[2].textContent); // Losses

        // Calculate win rate
        if (wins + losses > 0) {
            let winRate = (wins / (wins + losses)) * 100;

            // Round winRate to one decimal place
            winRate = winRate.toFixed(1);

            // Update the win rate cell in the row
            row.cells[3].textContent = winRate + '%'; // Update to one decimal place and add '%' sign
        } else {
            // If there are no games played, display a default message or handle as needed
            row.cells[3].textContent = '-';
        }
        
        // Debugging logs
        console.log('Wins:', wins);
        console.log('Losses:', losses);
        console.log('Win Rate:', winRate);
    });
});
