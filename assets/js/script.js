// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || -1;
// Todo: create a function to generate a unique task id
function generateTaskId() {
    // const newTask = {
    //     name: taskName,
    //     dueDate: taskDate,
    //     status: 'to-do',
    // };
}


// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div/>');
    const taskName = $('<h2/>');
    const taskDate = $('<p/>');
    const taskDescription = $('<p/>');
    
    taskName.text(task.title);
    taskDate.text(task.date);
    taskDescription.text(task.description);

    taskCard.append(taskName);
    taskCard.append(taskDate);
    taskCard.append(taskDescription);


 return taskCard;


}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList(event) {
event.preventDefault();
    for(let i=0; i < taskList.length;i++){
       const currentTask = createTaskCard(taskList[i]);
        console.log(currentTask)
        $('#todo-cards').append(currentTask);



    }

}

// Todo: create a function to handle adding a new task
// Modal contains: task title, due date, task description, and add task button.

function handleAddTask(event) {


    const task = {
        title: $("#taskTitle").val(),
        date: $("#taskDate").val(),
        description: $("#taskDescription").val()
    };

    taskList.push(task);
    localStorage.setItem("task", JSON.stringify(taskList));
    renderTaskList(event);

}



// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    const cardDeleteBtn = $('<button>')
        .addClass('btn btn-danger delete')
        .text('Delete')
        .attr('data-task-id', task.id);
    cardDeleteBtn.on('click', handleDeleteTask);
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // User clicks button
    $("#addTaskBtn").on('click', function (event) {
       handleAddTask(event);
    });
    // Submit button

    // Modal pop up


    // User clicks add task button


    // Build the card in todo column
    // Drag and drop cards
});

