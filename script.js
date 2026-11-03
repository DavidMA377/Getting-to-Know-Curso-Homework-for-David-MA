const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const peopleInput = document.getElementById("numberOfPeople");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

function formatMoney(amount) {
    return `$${amount.toFixed(2)}`;
}

function showError(message) {
    result.textContent = message;
}

function calculateTip() {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipSelect.value);
    const people = parseFloat(peopleInput.value);

    if (billInput.value.trim() === "" || Number.isNaN(bill) || bill < 0) {
        showError("Please enter a valid bill amount (0 or more).");
        return;
    }

    if (peopleInput.value.trim() === "" || Number.isNaN(people) || people <= 0) {
        showError("Please enter a valid number of people (at least 1).");
        return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    result.innerHTML =
        `Tip: ${formatMoney(tipAmount)}<br>` +
        `Total: ${formatMoney(total)}<br>` +
        `Per person: ${formatMoney(perPerson)}`;
}

calculateButton.addEventListener("click", calculateTip);
