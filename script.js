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
function addTask(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    
    const taskTable = document.getElementById('taskTable').querySelector('tbody');
    const newRow = taskTable.insertRow();
    
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${description}</td>
        <td>${dueDate}</td>
        <td>${priority}</td>
        <td>
            <select class="status">
                <option value="Pendiente">Pendiente</option>
                <option value="Realizada">Realizada</option>
                <option value="No entregada">No entregada</option>
            </select>
        </td>
    `;
    
    newRow.classList.add('task-row', 'pending');
    
    document.getElementById('taskForm').reset();
}
