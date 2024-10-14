let balance = 0;
let totalDeposit = 0;
let totalWithdraw = 0;

// Function to switch between sections
function showPage(pageId) {
    document.querySelectorAll('.content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Deposit form submission
document.getElementById('depositForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const depositAmount = parseInt(document.getElementById('depositAmount').value);
    if (depositAmount >= 100) {
        balance += depositAmount;
        totalDeposit += depositAmount;
        document.getElementById('totalBalance').textContent = balance;
        document.getElementById('totalDeposit').textContent = totalDeposit;
        alert(`Rs ${depositAmount} has been successfully deposited!`);
    } else {
        alert('Minimum deposit is 100Rs.');
    }
});

// Withdraw form submission
document.getElementById('withdrawForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const withdrawAmount = parseInt(document.getElementById('withdrawAmount').value);
    if (withdrawAmount >= 100 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        totalWithdraw += withdrawAmount;
        document.getElementById('totalBalance').textContent = balance;
        document.getElementById('totalWithdraw').textContent = totalWithdraw;
        alert(`Rs ${withdrawAmount} has been successfully withdrawn!`);
    } else if (withdrawAmount < 100) {
        alert('Minimum withdrawal is 100Rs.');
    } else {
        alert('Insufficient balance!');
    }
});
