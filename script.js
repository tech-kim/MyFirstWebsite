document.addEventListener('DOMContentLoaded', function() {
    // Get the table body
    let tbody = document.getElementById('team-stats-body');

    // Convert the rows to an array for sorting
    let rows = Array.from(tbody.rows);

    // Sort rows based on the win rate (last column)
    rows.sort(function(rowA, rowB) {
        let winRateA = parseFloat(rowA.cells[3].textContent);
        let winRateB = parseFloat(rowB.cells[3].textContent);

        // Sort in descending order
        return winRateB - winRateA;
    });

    // Clear existing rows in tbody
    tbody.innerHTML = '';

    // Append sorted rows back to tbody
    rows.forEach(function(row) {
        tbody.appendChild(row);
    });
});