let taskInput = document.querySelector("#taskInput");
let taskBarItems = document.querySelector("ul");
function addBtnClicked() {
    if (taskInput.value == "") {
        alert("You must write something!");
    } else {
        var li = document.createElement("li")
        li.innerHTML = `<div class="task">
        <span><svg id="mark" class="mark fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" focusable="false"><path id="markPath" d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill="#e93903"></path></svg></span>
        <p id="taskText">${taskInput.value}</p>
        <svg id="trash" class="trash fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" focusable="false"><path id="trashPath" d="M8.5 4h3a1.5 1.5 0 00-3 0zm-1 0a2.5 2.5 0 015 0h5a.5.5 0 010 1h-1.05l-1.2 10.34A3 3 0 0112.27 18H7.73a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h5zM5.74 15.23A2 2 0 007.73 17h4.54a2 2 0 001.99-1.77L15.44 5H4.56l1.18 10.23zM8.5 7.5c.28 0 .5.22.5.5v6a.5.5 0 01-1 0V8c0-.28.22-.5.5-.5zM12 8a.5.5 0 00-1 0v6a.5.5 0 001 0V8z" fill="#e93903"></path></svg>
    </div>`
        li.classList.add("li")
        taskBarItems.appendChild(li)
    }
    taskInput.value = "";
    saveData();
}
taskBarItems.addEventListener("click", function (e) {
    if ((e.target.id === "trash") || (e.target.id === "trashPath")) {
        e.target.parentNode.parentNode.style.display = "none"
        saveData()
    }
    else if (e.target.id === "mark") {
        e.target.parentNode.nextElementSibling.style.textDecoration = "line-through"
        e.target.parentNode.innerHTML = `<svg id="markChecked" class="fluentIcon checkBox-hover ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" focusable="false"><path id="markCheckedPath" d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z" fill="#e93903"></path></svg>`
        saveData()
    }
    else if (e.target.id === "markPath") {
        e.target.parentNode.parentNode.nextElementSibling.style.textDecoration = "line-through"
        e.target.parentNode.parentNode.innerHTML = `<svg id="markChecked" class="fluentIcon checkBox-hover ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="#e93903" aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" focusable="false"><path id="markCheckedPath" d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z" fill="#e93903"></path></svg>`
        saveData()
    }
    else if (e.target.id === "markChecked") {
        e.target.parentNode.nextElementSibling.style.textDecoration = "none"
        e.target.parentNode.innerHTML = `<svg id="mark" class="mark fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" focusable="false"><path id="markPath" d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill="#e93903"></path></svg>`
        saveData()
    }
    else if (e.target.id === "markCheckedPath") {
        e.target.parentNode.parentNode.nextElementSibling.style.textDecoration = "none"
        e.target.parentNode.parentNode.innerHTML = `<svg id="mark" class="mark fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" focusable="false"><path id="markPath" d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill="#e93903"></path></svg>`
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", taskBarItems.innerHTML);
}
function showData() {
    taskBarItems.innerHTML = localStorage.getItem("data")
}
showData()