// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    if (nextId == null){
        nextId = 1;
    } else {
        nextId++;
    }
    localStorage.setItem("nextId",JSON.stringify(nextId));
    return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const taskCard = $("<div/>")
    .addClass("draggable card")
    .attr("data-task-id", task.id);
  const cardBody = $("<div/>").addClass("card-body");
  const taskName = $("<h2/>");
  const taskDate = $("<p/>");
  const taskDescription = $("<p/>");
  const cardDeleteBtn = $("<button>")
    .addClass("btn btn-danger delete") //Bootstrap classes
    .text("Delete")
    .attr("data-task-id", task.id);
  cardDeleteBtn.on("click", handleDeleteTask);

    if(task.date && task.status !== 'done'){
        const now = dayjs();
        const taskDueDate = dayjs(task.date, 'DD/MM/YYYY');

        if (now.isSame(taskDueDate, 'day')){
            taskCard.addClass('bg-warning text-white');
        } else if (now.isAfter(taskDueDate)){
            taskCard.addClass('bg-danger text-white');
            cardDeleteBtn.addClass('border-light');
        }
    }
  
  taskName.text(task.title); //Updating html elements with what is being passed in as an argument.
  taskDate.text(task.date);
  taskDescription.text(task.description);

  cardBody.append(taskDate, taskDescription, cardDeleteBtn); //Adding p (taskDate), p (taskDescription) to the inner div (taskCard)
  taskCard.append(taskName, cardBody); //Adding h2 (taskName), div (cardBody)

  return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList(event) {
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  
  if (!taskList) {
    taskList = [];
  }

  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const todoList = $("#todo-cards");
  todoList.empty(); //Empties existing cards

  const inProgress = $("#in-progress-cards");
  inProgress.empty(); //Empties existing cards

  const done = $("#done-cards");
  done.empty(); //Empties existing cards

  for (let task of taskList) {
    if (task.status === "to-do") {
      todoList.append(createTaskCard(task));
    } else if (task.status === "in-progress") {
      inProgress.append(createTaskCard(task));
    } else if (task.status === "done") {
      done.append(createTaskCard(task));
    }
  }

  $(".draggable").draggable({
    opacity: 0.7,
    zIndex: 100,

    helper: function (e) {
      const original = $(e.target).hasClass("ui-draggable")
        ? $(e.target)
        : $(e.target).closest(".ui-draggable");
      return original.clone().css({
        width: original.outerWidth(),
      });
    },
  });
}

// Todo: create a function to handle adding a new task
// Modal contains: task title, due date, task description, and add task button.

function handleAddTask(event) {
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  event.preventDefault();
  event.stopPropagation();

  const task = {
    title: $("#taskTitle").val(),
    date: $("#taskDate").val(),
    description: $("#taskDescription").val(),
    id: generateTaskId(),
    status: "to-do",
  };
  console.log(task);
  taskList.push(task);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList(event);
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
const id = $(event.target).data("task-id");
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let updatedTasks = taskList.filter(task => {
  return task.id !== id;
})
localStorage.setItem("tasks", JSON.stringify(updatedTasks));
renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  event.preventDefault();
  const tasks = renderTaskList();
  const cardId = ui.draggable[0].dataset.taskId;
  const newStatus = event.target.id;
  $(".draggable").draggable({
    stop: function (event, ui) {},
  });


  for (let task of taskList){
    if (task.id === cardId){
      task.status = newStatus;
    }
  }

  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  // User clicks button
  $("#addTaskBtn").on("click", function (event) {
    handleAddTask(event);
  });

  renderTaskList();
  // Submit button
  // Modal pop up
  // User clicks add task button
  // Build the card in todo column
  // Drag and drop cards
});
