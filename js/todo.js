const todoForm = document.getElementById('todo-form');

const toDoInput = todoForm.querySelector('input')

const toDoList = document.getElementById('todo-list');

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
}

todoForm.addEventListener('submit',handleToDoSubmit);