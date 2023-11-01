
const view = {
    renderTasks: function(taskList) {
      const taskListElement = document.getElementById('taskList');
      taskListElement.innerHTML = '';
  
      taskList.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          
          <span>${task.text}</span>
          <button class="completeButton" id="completeButton">${task.completed ? 'Pendiente' : 'Completada'}</button>
          <button class="deleteButton" id="deleteButton">Eliminar</button>
        `;
  
        const completeButton = taskItem.querySelector('.completeButton');
        completeButton.addEventListener('click', () => controller.toggleTaskCompletion(index));
  
        const deleteButton = taskItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => controller.deleteTask(index));
  
        taskListElement.appendChild(taskItem);
      });
    }
  };
  