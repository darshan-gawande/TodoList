

const input = document.getElementById("input");
const listContainer = document.getElementById("todoList");



function addTask() {
    if(input.value === "") {
        alert("you have to add something");
    } else {
        const list = document.createElement("li");
        list.innerHTML = input.value;
        listContainer.appendChild(list);
        list.classList.add("p-2","m-2", "font-medium");
       
         span = document.createElement("span");
         span.innerHTML = "🗑";
        list.appendChild(span);
        span.classList.add("cursor-pointer");

        span.addEventListener("click", () => {
        list.remove();
    })
    }
    input.value = "";
    saveData();
};

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
};

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// showData();


