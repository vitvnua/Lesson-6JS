// Task model
let tasks = [
    {
        text: 'Learn js',
        id: '1'
    },
    {
        text: 'Learn angular',
        id: '2'
    },
    {
        text: 'Learn react',
        id: '3'
    }
];

// Get element list-group
let ul = document.querySelector('.list-group');

// tasks.forEach(task => {
//     let li = listTemplate(task);
//     // insertAdjacentElement
//     ul.insertAdjacentElement("afterbegin", li);
// });

tasks.forEach(task => ul.insertAdjacentElement("afterbegin", listTemplate(task)));

function listTemplate(task) {
    // Create element
    let li = document.createElement('li');
    // Add task text
    li.textContent = task.text;
    // Set id
    li.setAttribute('data-id', task.id);
    // Add class
    li.classList.add('list-group-item');
    // Return created li
    return li;
}

// AddTask
function addTask(text) {
    // Create task object
    const newTask = {text, id: String(tasks.length+1)};
    // Add task on tasks
    tasks.unshift(newTask);
    // Add li at ul
    ul.insertAdjacentElement("afterbegin", listTemplate(newTask))
}

// Delete task
function deleteTask(id) {
    // найти по id элемент массива и удалить из массива
    // найти элемент на страницы с таким же id и удалить его из разметки

    let idNew = id;
    id = Number(id);
    let itemList = document.getElementsByClassName('list-group-item');
    if(!id && id !== 0 || !idNew) return tasks, messageAlert('You enter not id');
    for (let i of tasks) {
        if(i.id == id) {
            tasks.splice(tasks.indexOf(i),1);
            for (let j of itemList) {
                if(j.dataset.id == id) {
                    j.remove();
                }
            }
            return tasks, messageAlert('Entered id = ' + id + ' deleted');
        }
    }
    return tasks, messageAlert('Not found id = ' + id);
}

// Alert
function messageAlert(text) {
    // удалять существующий алерт
    // создать элемент div
    // дать ему класс alert alert-info
    // вставить в алерт текст
    // добавить этот алерт в начало контейнра перед формой

    let messageBox = document.querySelector('container, form');
    let mesageForm = messageBox.parentElement;
    let alert =  mesageForm.getElementsByClassName('alert alert-info');

    if(alert.length > 0) {
        for(let i of alert) {
            mesageForm.removeChild(i);
        }
    }

    let alerts =  document.createElement('div');
    alerts.setAttribute('class', 'alert alert-info');
    alerts.textContent = text;
    mesageForm.insertAdjacentElement("afterbegin", alerts);
}







