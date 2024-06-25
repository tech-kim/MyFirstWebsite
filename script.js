document.addEventListener('DOMContentLoaded', function() {
    // Get all rows in the table
    let rows = document.querySelectorAll('.team-stats tbody tr');

    // Iterate through each row
    rows.forEach(function(row) {
        // Get wins and losses from the row
        let wins = parseInt(row.cells[1].textContent); // Wins
        let losses = parseInt(row.cells[2].textContent); // Losses

        // Calculate win rate
        let winRate = (wins / (wins + losses)) * 100;

        // Update the win rate cell in the row
        row.cells[3].textContent = winRate.toFixed(1); // Update to one decimal place
    });
});
