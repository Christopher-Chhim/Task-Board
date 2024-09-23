# Task-Board

## Description

My motivation in developing this project was to implement jQuery for the first time. It was the first JavaScript library I learned and I wanted to implement its library to make for readability and practical purposes. I also need jQuery to make my task cards drag and droppable. I wanted to build this project to create a template for other developers to make their own kanban boards for their projects. Kanban boards are a helpful tool to organize my task list and help plan for my schedule accordingly so I wanted to share this with others. A Kanban board addresses several key challenges faced in project and task management:

1. Visualing Workflow:

- Many teams struggle to keep track of tasks, their current state, and who is responsible for them. A Kanban board provides a clear, visual representation of tasks across different stages of a workflow, helping team members instantly see what's in progress, what needs to be done, and what's completed.

2. Managing Task Overload:

Teams often experience task overload without realizing how much work is being handled simultaneously. A Kanban board helps limit the number of tasks in progress by emphasizing a controlled flow, preventing bottlenecks.

3. Improving Communication:

It helps reduce the need for constant status update meetings by providing real-time progress tracking that is easily accessible. The visual nature of the board improves transparency, making it easier for team members to collaborate and stay aligned.

4. Prioritization:

Tasks can be organized and prioritized, so everyone knows which tasks are most important and which need immediate attention. It improves efficiency and focus by ensuring that work is done in the right order.

5. Deadline Awareness:

Color-coding tasks by due dates helps users quickly identify overdue or urgent tasks, improving time management.

## Installation

Download VSCode.
Download jQuery.
Clone or download the repository to your local machine.
Open the index.html file in your preferred browser.

## Usage

When you open the Task Board Application, all tasks saved in localStorage will be displayed in their respective progress columns:

- Not Yet Started
- In Progress
- Completed

Tasks are color-coded:

- Yellow: Tasks nearing their deadline.
- Red: Tasks that are overdue.

The application has several features and it changes according to what the user wishes to do with the kanban board. If the user wishes to add a new task, they have to click the "Add Task" button. A modal will appear where you can enter the following:
- Title: The name of the task.
- Description: A short description of the task.
- Deadline Date: The due date of the task (this determines color-coding).
Click "Save" to add the task to the board. The task will appear in the Not Yet Started column. If the user wishes to delete a task, they click on the task's "Delete" button. When the user clicks the delete button, the task will be removed from the board and will not reappear upon page refreshing.

## Features

Data Persistence
- All tasks are stored in localStorage. This means that even after you refresh the page, your tasks will persist with their progress and status intact.

Managing Task Progress
Tasks can be dragged and dropped between columns:
- Not Yet Started → In Progress
- In Progress → Completed
- And vice versa.
Once a task is dropped into a new column, its progress state will be updated and persisted across page refreshes.

## How to Contribute

- Task Editing: Allow users to edit task details after they've been created.
- Sorting/Filtering: Add features for sorting tasks by date or priority.
- Collaboration: Enable multiple users to work on the same task board in real time.

## License

MIT License

Copyright <2024> <Christopher Chhim>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![opensource](https://img.shields.io/badge/generator-open_source-blue)

 