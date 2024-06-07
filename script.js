document.getElementById('taskForm').addEventListener('submit', addTask);
document.getElementById('deleteBtn').addEventListener('click', deleteTasks);
document.getElementById('search').addEventListener('input', searchTasks);
document.getElementById('searchBtn').addEventListener('click', searchTasks);

// Modal elements
const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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
        <td>
            <input type="checkbox" class="delete-checkbox">
        </td>
    `;
    
    newRow.classList.add('task-row', 'pending');
    
    newRow.querySelector('.status').addEventListener('change', function() {
        const status = this.value;
        newRow.classList.remove('pending', 'completed', 'not-delivered');
        
        if (status === 'Pendiente') {
            newRow.classList.add('pending');
        } else if (status === 'Realizada') {
            newRow.classList.add('completed');
            modal.style.display = "block";
        } else if (status === 'No entregada') {
            newRow.classList.add('not-delivered');
        }
    });
    
    document.getElementById('taskForm').reset();
}

function deleteTasks() {
    const checkboxes = document.querySelectorAll('.delete-checkbox:checked');
    
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        row.remove();
    });
}

function searchTasks() {
    const query = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#taskTable tbody tr');
    
    rows.forEach(row => {
        const title = row.cells[0].textContent.toLowerCase();
        
        if (title.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
