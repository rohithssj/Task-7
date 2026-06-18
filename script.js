const taskForm = document.querySelector("#input")
const taskInput = document.querySelector(".enter")
const taskCategory = document.querySelector(".category")
const taskContainer = document.querySelector(".tasks-container")
const moonBtn = document.querySelector(".moon")
const totalTasks = document.querySelector(".total")
const completedTasks = document.querySelector(".completedTasks")
const pendingTasks = document.querySelector(".pending")

taskContainer.style.display = "none"

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let title = taskInput.value
    const category = taskCategory.value
    if (title === "" || category === "") {
        alert("Please fill all the fields")
        return
    }
    console.log("Form Submitted!");

    taskContainer.style.display = "block"

    const taskCard = document.createElement("div")

    taskCard.classList.add("task-body")

    taskCard.innerHTML = `
     <h1>${title}</h1>
                <div class="categories">
                    <h2>${category}</h2>
                    <h2>Pending</h2>
                </div>

                <div class="status">
                    <span><i class="ri-edit-2-line edit"></i></span>
                    <span><i class="ri-check-line check"></i></span>
                    <span><i class="ri-delete-bin-line delete"></i></span>
                </div>
`
    //     const deleteBtn = taskCard.querySelector('.delete')
    //     deleteBtn.addEventListener('click', () => {
    //         taskCard.remove()
    //         updateStats()

    //     })

    //     const checkBtn = taskCard.querySelector(".check")
    //     const statusBtn = taskCard.querySelector(".categories h2:last-child")
    //     checkBtn.addEventListener('click', () => {
    //         taskCard.classList.toggle("completed")
    //         if (taskCard.classList.contains("completed")) {
    //             statusBtn.textContent = "Completed"
    //         }
    //         else {
    //             statusBtn.textContent = "Pending"

    //         }
    //         updateStats()
    //     })

    //     const editBtn = taskCard.querySelector(".edit")
    //     const titleElement = taskCard.querySelector("h1")
    //     editBtn.addEventListener('click', () => {
    //         let newTitle = prompt("Edit your task......")
    //         if (newTitle) {
    //             titleElement.textContent = newTitle
    //         }
    //     })

    taskContainer.appendChild(taskCard)
    updateStats()
    taskForm.reset()
})

taskContainer.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.classList.contains("delete")) {
        const taskCard = e.target.closest(".task-body")
        taskCard.remove()
        updateStats()
    }
    if (e.target.classList.contains("check")) {
        const taskCard = e.target.closest(".task-body")
        const statusText = taskCard.querySelector(".categories h2:last-child")
        taskCard.classList.toggle("completed")
        if (taskCard.classList.contains("completed")) {
            statusText.textContent = "Completed"
        }
        else {
            statusText.textContent = "Pending"
        }
        updateStats()
    }



    if (e.target.classList.contains("edit")) {
        const taskCard = e.target.closest(".task-body")
        const titleElement = taskCard.querySelector("h1")
        const newTitle = prompt("Edit Task...", titleElement.textContent)
        if (titleElement) {
            titleElement.textContent = newTitle
        }
    }

})

moonBtn.addEventListener('click', () => {
    if (document.body.dataset.theme == "light") {
        document.body.setAttribute(
            "data-theme", "dark"

        )
        moonBtn.classList.remove("ri-moon-line")
        moonBtn.classList.add("ri-sun-line")


    }
    else {
        document.body.setAttribute(
            "data-theme", "light"
        )
        moonBtn.classList.remove("ri-sun-line")
        moonBtn.classList.add("ri-moon-line")

    }
})


const updateStats = () => {
    const total = document.querySelectorAll(".task-body").length
    const completed = document.querySelectorAll(".task-body.completed").length
    const pending = total - completed

    totalTasks.textContent = total

    completedTasks.textContent = completed
    pendingTasks.textContent = pending
}











