const addTaskBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Lütfen bir görev girin!");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item";

  // Görev metni span içinde
  const span = document.createElement("span");
  span.textContent = taskText;

  // Tamamlandı butonu
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Tamamlandı";
  completeBtn.className = "btn btn-success btn-sm";

  completeBtn.addEventListener("click", () => {
    // Üstü çizili yap
    span.classList.add("completed");
    completeBtn.disabled = true;

    // Yavaşça kaybolma animasyonu
    li.style.opacity = 0;

    setTimeout(() => {
      li.remove();
    }, 1000);
  });

  li.appendChild(span);
  li.appendChild(completeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
