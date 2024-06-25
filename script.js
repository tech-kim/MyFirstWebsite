document.addEventListener('DOMContentLoaded', function() {
    // Get all rows in the table
    let rows = document.querySelectorAll('.team-stats tbody tr');

    // Create an array to store row data with calculated win rates
    let rowData = [];

    // Iterate through each row
    rows.forEach(function(row) {
        // Get wins and losses from the row
        let wins = parseInt(row.cells[1].textContent); // Wins
        let losses = parseInt(row.cells[2].textContent); // Losses

        // Calculate win rate
        let winRate = (wins / (wins + losses)) * 100;

        // Round winRate to one decimal place
        winRate = winRate.toFixed(1);

        // Store row data with win rate in rowData array
        rowData.push({
            row: row,
            winRate: parseFloat(winRate) // Convert win rate back to float for sorting
        });
    });

    // Sort rowData based on winRate in descending order
    rowData.sort(function(a, b) {
        return b.winRate - a.winRate; // Sort in descending order
    });

    // Clear existing rows in tbody
    let tbody = document.querySelector('.team-stats tbody');
    tbody.innerHTML = '';

    // Append sorted rows back to tbody
    rowData.forEach(function(data) {
        tbody.appendChild(data.row);
    });
});
