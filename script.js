const apiUrl = "https://crudcrud.com/api/76036e39d52541b3b2422b3152d607e0/todoform"
const todoList = document.getElementById("todoList");

// Load todos from local storage on page load
window.onload = function () {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    storedTodos.forEach(todo => {
        displayTodo(todo);
    });
};

function addItem() {
    const todoName = document.getElementById("todoName").value;
    const todoDescription = document.getElementById("todoDescription").value;

    if (todoName && todoDescription) {
        const newTodo = {
            title: todoName,
            description: todoDescription,
            completed: false
        };

        axios.post(apiUrl, newTodo)
            .then(response => {
                // Successfully added todo, update UI
                displayTodo(response.data);

                // Save updated todos to local storage
                saveTodosToLocalStorage();
            })
            .catch(error => {
                console.error('Error adding todo:', error);
            });

        // Clear input fields
        document.getElementById("todoName").value = "";
        document.getElementById("todoDescription").value = "";
    } else {
        alert("Please enter both todo name and description.");
    }
}

function displayTodo(todo) {
    const newTodoItem = document.createElement("li");
    newTodoItem.id = `todo-${todo.id}`;
    newTodoItem.innerHTML = `
        <span><strong>${todo.title}</strong>: ${todo.description}</span>
        <div class="actions">
            <button onclick="deleteItem(${todo.id})">Delete</button>
            <button onclick="toggleComplete(${todo.id})">Tick</button>
        </div>
    `;

    todoList.appendChild(newTodoItem);
}

function deleteItem(todoId) {
    axios.delete(`${apiUrl}/${todoId}`)
        .then(() => {
            // Successfully deleted todo, update UI
            const todoItem = document.getElementById(`todo-${todoId}`);
            todoItem.remove();

            // Save updated todos to local storage
            saveTodosToLocalStorage();
        })
        .catch(error => {
            console.error('Error deleting todo:', error);
        });
}

function toggleComplete(todoId) {
    const todoItem = document.getElementById(`todo-${todoId}`);
    todoItem.remove();

    // Save updated todos to local storage
    saveTodosToLocalStorage();
}

function saveTodosToLocalStorage() {
    const todos = Array.from(todoList.children).map(todoItem => {
        return {
            id: parseInt(todoItem.id.split('-')[1]),
            title: todoItem.querySelector('strong').innerText,
            description: todoItem.querySelector('span').innerText.split(": ")[1],
            completed: false // You may update this based on your logic
        };
    });

    // Save todos to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}