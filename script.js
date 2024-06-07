document.getElementById('taskForm').addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    
    // Aquí iría el código para agregar la tarea a la tabla (en commits posteriores)
    
    document.getElementById('taskForm').reset();
}
