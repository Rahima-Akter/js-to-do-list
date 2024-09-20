
const createBtn = document.getElementById('create-btn');
const clearAllBtn = document.getElementById('clear-all-btn');
const taskList = document.getElementById('list-container');

let taskCount = 0;
createBtn.addEventListener('click', function () {
    const inputBox = document.getElementById('input-box').value;
    if (inputBox !== '') {
        taskCount++;

        // add task to the to-do-list
        let task = document.createElement(`div`);
        task.innerHTML = (`${taskCount}.<span class="ml-5">${inputBox}</span> <button onclick="clearTask()" class="delete-btn bg-red-600 py-2 px-5 rounded-full text-sm text-white float-end">delete</button>`)
        taskList.appendChild(task);
        document.getElementById('input-box').value = '';

        // clears only one task ,whichever the user likes
        const deleteBtn = task.querySelector('.delete-btn').addEventListener('click', function(){
            taskList.removeChild(task);
        });
    }
});

// clear the entire to-do-list
clearAllBtn.addEventListener('click', function(){
    taskList.innerHTML = '';
    taskCount = 0;
})
