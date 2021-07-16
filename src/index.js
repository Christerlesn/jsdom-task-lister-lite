document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const taskList = document.getElementById('tasks')
  const taskName = document.getElementById('new-task-description')

  function buildListItem(){
    let task = document.createElement("li")
    task.textContent = taskName.value + ' '

    return task
  }

  function addToDo(){
    preventDefault()

    task = buildListItem() 
    list.appendChild(task)

    target.reset()
  }

  form.addEventListener("submit", addToDo)
});
