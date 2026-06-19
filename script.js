document.getElementById('generateBtn').addEventListener('click', generateTable);

function generateTable() {
    const inputField = document.getElementById('numberInput');
    const outputDiv = document.getElementById('tableOutput');
    const n = parseInt(inputField.value);

    if (isNaN(n)) {
        outputDiv.innerHTML = '<p class="error">Invalid number.</p>';
        return;
    }

    outputDiv.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'table-row';
        rowDiv.innerText = `${n} × ${i} = ${n * i}`;
        outputDiv.appendChild(rowDiv);
    }
}