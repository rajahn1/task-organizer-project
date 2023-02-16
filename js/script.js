const addButton = document.querySelector('.btn-success');
const removeButton = document.querySelector('.task img');
const inputTask = document.querySelector('.container-new-task input');
const containerTasks = document.querySelector('.container-tasks');

function removeAndAddTasks () {

    const newTask = document.createElement('div');
    const span = document.createElement('span');
    const xButton = document.createElement('img');
 
    if (!inputTask.value) {
        inputTask.classList.add('error');
        alert('preencha a tarefa');
        return;
    }
    inputTask.classList.remove('error');

    newTask.classList.add('task');

    span.classList.add('.task')
    span.textContent = inputTask.value;

    xButton.src = '../assets/remove.svg';
    xButton.alt = 'remove';
    
    newTask.appendChild(span);
    newTask.appendChild(xButton);
    containerTasks.appendChild(newTask);

    inputTask.value = '';

    xButton.addEventListener('click', (event) => {
        containerTasks.removeChild(newTask);
    })
}

addButton.addEventListener('click', removeAndAddTasks);

inputTask.addEventListener('keypress', (event) =>  {
    if (event.key !== 'Enter') {
        return;
    }
    removeAndAddTasks();
})