// get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseInt(inputField.value);
    // inputField.value = "";

    return inputValue;
};

// get element value
function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    return parseInt(elementField.innerText);
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
    if (isNaN(food) || isNaN(rent) || isNaN(clothes) || food < 0 || rent < 0 || clothes < 0) {
        alert("please input your expenses above '0'!");
        return;
    }

    const expenses = food + rent + clothes;
    setElementValue("total-expenses", expenses);

    setBalance(expenses);
};

// calculation balance
function setBalance(expenses) {
    const income = getInputValue("income-field");

    const expensesField = document.getElementById("total-expenses");

    if (isNaN(income) || income < 0) {
        alert("please input your income above '0'!");
        expensesField.innerText = "";
        return;
    }
    if (expenses > income) {
        alert("hey, how your income is less than expenses? Input your income greater than expenses!");
        expensesField.innerText = "";
        return;
    }

    const balance = income - expenses;

    setElementValue("balance", balance);
};

//-----------------------------------------------
// calculation saving amount
function setSavingAmount() {
    const income = getInputValue("income-field");
    const percentage = getInputValue("save-percentage");
    if (isNaN(percentage) || percentage < 0) {
        alert("please input your percentage above '0'!");
        return;
    }

    const savings = income * percentage / 100;
    setElementValue("saving-amount", savings);

    setRemainingBalance(savings);
};

// calculation remaining balance
function setRemainingBalance(savings) {
    const balance = getElementValue("balance");
    if (savings > balance) {
        alert("You have not enough money for savings. and please input 0-100 number!");
        document.getElementById("saving-amount").innerText = "";
        return;
    }

    const remainingBalance = balance - savings;

    setElementValue("remaining-balance", remainingBalance);
};