const todoForm = document.getElementById('todo-form');
const toDoInput = todoForm.querySelector('input')
const toDoList = document.getElementById('todo-list');

function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    paintToDo(newTodo)
}

todoForm.addEventListener('submit',handleToDoSubmit);