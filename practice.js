document.addEventListener('DOMContentLoaded', function () {
    const taskinput = document.getElementById('task-input');
    const addTaskbtn = document.getElementById('add-task-btn');
    const tasklist = document.getElementById('task-list');

    
})

//function to add new task
function AddTask() {
    const taskText = taskinput.value.trim();

    if (taskText === '') {
        alert('please enter task');
        return;

    }

    //created new task list item
    const listitem = document.createElement('li');

    //created task test element
    const taskTextElement = document.createElement('span');
    
    //created delete button
    const deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    deletebtn.classList.add('delete-btn');
    
    //append text and delete button to list item
    listitem.appendChild(taskTextElement);
    listitem.appendChild(deletebtn);

    //append list item to task list
    tasklist.appendChild(listitem);

    //clear input field
    taskinput.value = '';

    deletebtn.addEventListener('click', function () {
        tasklist.removeChild(listitem);
    }
    )};
    

