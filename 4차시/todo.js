let tasks = [];

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return; // 빈 값 방지
  tasks.push(input.value);
  input.value = "";
  render();
});

const render = () => {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // 초기화
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    li.onclick = function() {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    };

    const deletelist = document.createElement("button");
    deletelist.textContent = "X";
    deletelist.style.marginLeft = "10px";

    deletelist.onclick = function(event) {
      event.stopPropagation(); 
      
      tasks.splice(index, 1); 
      render(); 
    };

    li.appendChild(deletelist); 
    
    list.appendChild(li);
  });
};