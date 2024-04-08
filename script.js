const input = document.getElementById("input");
const listContainer = document.getElementById("todoList");


function addTask() {
    if(input.value === "") {
        alert("you have to add something");
    } else {
        const list = document.createElement("li");
        list.innerHTML = input.value;
        listContainer.appendChild(list);

        const span = document.createElement("span");
         span.innerHTML = "🗑";
        list.appendChild(span);
        list.classList.add("float-right","cursor-pointer","item-center");
    }
}

