
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
console.log(input);
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}

addBtn.addEventListener("click" ,() => {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value ;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    deleteBtn.addEventListener("click" , (e) => {
        e.stopPropagation();
        li.remove();
        saveTasks();
    });
       
    taskList.appendChild(li);
    input.value = "";
    saveTasks();
    
});

loadTasks();