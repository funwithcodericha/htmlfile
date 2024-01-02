// app.js
// app.js
document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');

    // Load expenses from local storage
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach(function (expense , index) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.appendChild(document.createTextNode(`${expense.name} ($${expense.amount}) - Category: ${expense.category}`));
            const editButton = document.createElement('button');
        editButton.className = 'btn btn-primary btn-sm float-right ml-2';
        editButton.innerHTML = 'Edit';
        editButton.addEventListener('click', function () {
            editExpense(index);
        });
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm float-right ml-2';
            deleteButton.innerHTML = 'Delete';
            deleteButton.addEventListener('click', function () {
            deleteExpense(index);
           });
           li.appendChild(editButton)
           li.appendChild(deleteButton);
            expenseList.appendChild(li);
        });
    }
    
function deleteExpense(index) {
   
    expenses.splice(index, 1);

    
    localStorage.setItem('expenses', JSON.stringify(expenses));

    
    renderExpenses();
}
// Inside the JavaScript file (app.js)
function editExpense(index) {
    // Retrieve the expense to edit
    const editedExpense = expenses[index];

    // Populate the form fields with the expense details
    document.getElementById('expenseName').value = editedExpense.name;
    document.getElementById('expenseAmount').value = editedExpense.amount;
    document.getElementById('expenseCategory').value = editedExpense.category;

    // Remove the edited expense from the array
    expenses.splice(index, 1);

    // Save the updated expenses to local storage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Render the updated expenses
    renderExpenses();
}



    // Event listener for form submission
    expenseForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const expenseName = document.getElementById('expenseName').value;
        const expenseAmount = document.getElementById('expenseAmount').value;
        const expenseCategory = document.getElementById('expenseCategory').value;

        // Validate and add to expenses array
        if (expenseName && expenseAmount && expenseCategory) {
            const newExpense = {
                name: expenseName,
                amount: parseFloat(expenseAmount),
                category: expenseCategory
            };
            expenses.push(newExpense);

            // Save to local storage
            localStorage.setItem('expenses', JSON.stringify(expenses));

            // Render expenses
            renderExpenses();

            // Clear form fields
            expenseForm.reset();
        }
    });

    // Initial render
    renderExpenses();
});
