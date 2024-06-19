//Q1

function toggleTheme() {
    const appElement = document.getElementById("app");
    const themeButton = document.getElementById("toggle");

    appElement.classList.toggle("day-mode");
    appElement.classList.toggle("night-mode");

    themeButton.classList.toggle("button-day");
    themeButton.classList.toggle("button-night");
}


//Q2

function createNewDiv(width, height, content) {
    const containerElement = document.getElementById("container");

    const divElement = document.createElement("div");

    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.style.border = "1px solid black"

    divElement.textContent = content;

    containerElement.appendChild(divElement);
}

//Q3

function toggleVisibility() {
    let element = document.getElementById("useless-paragraph");
    if(element.style.display === "none"){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
  }