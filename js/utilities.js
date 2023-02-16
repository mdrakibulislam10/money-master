// get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseInt(inputField.value);
    // inputField.value = "";

    return inputValue;
};

// set element value
function setElementValue(elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
};

// calculation Total Expenses
function totalExpenses() {
    const food = getInputValue("food-field");
    const rent = getInputValue("rent-field");
    const clothes = getInputValue("clothes-field");

    const expenses = food + rent + clothes;
    setElementValue("total-expenses", expenses);

    setBalance(expenses);
};

// calculation balance
function setBalance(expenses) {
    const income = getInputValue("income-field");

    const balance = income - expenses;

    setElementValue("balance", balance);
}