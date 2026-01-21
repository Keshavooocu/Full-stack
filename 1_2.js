let balance = 1000;

const balanceDisplay = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const messageDiv = document.getElementById('message');

document.getElementById('depositBtn').addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        messageDiv.textContent = "Enter a valid positive amount!";
        return;
    }
    balance += amount;
    balanceDisplay.textContent = balance.toFixed(2);
    messageDiv.textContent = "";
    amountInput.value = "";
});

document.getElementById('withdrawBtn').addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        messageDiv.textContent = "Enter a valid positive amount!";
        return;
    }
    if (amount > balance) {
        messageDiv.textContent = "Insufficient funds!";
        return;
    }
    balance -= amount;
    balanceDisplay.textContent = balance.toFixed(2);
    messageDiv.textContent = "";
    amountInput.value = "";
});