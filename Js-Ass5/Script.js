//Q1

function showRandomNumber() {
    let randomNum = Math.floor(Math.random() * 43 - 21);
    
    const numberParagraph = document.getElementById("number");
    numberParagraph.textContent = randomNum;

    const messageDiv = document.createElement("div");
    messageDiv.textContent = randomNum < 0 ? "Cold" : "Hot";
    document.body.appendChild(messageDiv);
}

//Q2

function validateAge(event) {
    let ageValue = event.target.value;
    const errorContainer = document.getElementById("error-messages");
    const submitBtn = document.querySelector("form button[type='submit']");

    errorContainer.textContent = "";

    if (ageValue === "" || ageValue < 5) {
        errorContainer.textContent = ageValue === "" ? "Please select your age" : "You must be at least 5 years old to join";
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
}

//Q3

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("todoForm");
    const input = document.getElementById("todoInput");
    const button = document.getElementById("addButton");
    const list = document.getElementById("todoList");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        addTodoItem();
    });

    function addTodoItem() {
        const text = input.value.trim();
        if (text !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="task">${text}</span>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;
            list.appendChild(listItem);
            input.value = "";
        } else {
            alert("Enter a valid task.");
        }
    }

    list.addEventListener("click", function(event) {
        if (event.target.classList.contains("complete")) {
            const taskItem = event.target.parentElement.querySelector(".task");
            taskItem.classList.toggle("done");
        }

        if (event.target.classList.contains("delete")) {
            const taskItem = event.target.parentElement;
            taskItem.remove();
        }
    });
});
