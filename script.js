const taskForm = document.querySelector("#input")
const taskInput = document.querySelector(".enter")
const taskCategory = document.querySelector(".category")
const taskContainer = document.querySelector(".tasks-container")
const moonBtn = document.querySelector(".moon")
const totalTasks = document.querySelector(".total")
const completedTasks = document.querySelector(".completedTasks")
const pendingTasks = document.querySelector(".pending")
let taskId = 0
const selectInput = document.querySelector("#select-enter")
const filter = document.querySelector("#select-category")
taskContainer.style.display = "none"



selectInput.addEventListener('input', (() => {
    const searchValue = selectInput.value.toLowerCase()

    const tasks = document.querySelectorAll(".task-body")

    tasks.forEach(task => {
        const title = task.querySelector("h1").textContent.toLowerCase()
        if (title.includes(searchValue)) {
            task.style.display = "block"
        }
        else {
            task.style.display = "none"

        }
    })

}))

filter.addEventListener("change", (() => {
    const selected = filter.value.toLowerCase()

    const tasks = document.querySelectorAll(".task-body")
    tasks.forEach(task => {
        const taskCategory = task.dataset.category

        if (selected === "" || taskCategory === selected) {
            task.style.display = "block"
        }
        else {
            task.style.display = "none"
        }
    })
}))




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
    taskId++
    taskCard.setAttribute("data-id", taskId)
    taskCard.setAttribute("data-category", category.toLowerCase())

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
    if (taskCard.hasAttribute("data-id")) {
        console.log("Task has ID")
    }
    taskContainer.appendChild(taskCard)
    saveCards()
    updateStats()
    taskForm.reset()
})

taskContainer.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.classList.contains("delete")) {
        const taskCard = e.target.closest(".task-body")
        console.log(taskCard.getAttribute("data-id"));
        taskCard.remove()
        saveCards()
        updateStats()
    }
    if (e.target.classList.contains("check")) {
        const taskCard = e.target.closest(".task-body")
        const statusText = taskCard.querySelector(".categories h2:last-child")
        taskCard.classList.toggle("completed")
        if (taskCard.classList.contains("completed")) {
            statusText.textContent = "Completed"
            taskCard.setAttribute("data-status", "completed")
        }
        else {
            statusText.textContent = "Pending"
            taskCard.setAttribute("data-status", "pending")

        }
        updateStats()
        saveCards()

    }



    if (e.target.classList.contains("edit")) {
        const taskCard = e.target.closest(".task-body")
        const titleElement = taskCard.querySelector("h1")
        const newTitle = prompt("Edit Task...", titleElement.textContent)
        if (titleElement) {
            titleElement.textContent = newTitle
        }
        saveCards()

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


const saveCards = () => {
    localStorage.setItem("tasks", taskContainer.innerHTML)
}


window.addEventListener("DOMContentLoaded", () => {

    const savedTasks =
        localStorage.getItem("tasks")

    if (savedTasks) {

        taskContainer.innerHTML =
            savedTasks

        updateStats()

    }

})


const grandparent = document.querySelector(".grandparent")

const parent = document.querySelector(".parent")

const child = document.querySelector(".child-btn")



grandparent.addEventListener("click", () => {
    console.log("Grandparent Bubble")
})

parent.addEventListener("click", () => {
    console.log("Parent Bubble")
})

child.addEventListener("click", () => {
    console.log("Child Bubble")
})



grandparent.addEventListener("click", () => {
    console.log("Grandparent Capture")
}, true)

parent.addEventListener("click", () => {
    console.log("Parent Capture")
}, true)


const demoBtn = document.querySelector("#demoBtn")

const demoInput = document.querySelector("#demoInput")

demoBtn.addEventListener("click", () => {

    console.log("Property:", demoInput.value)

    console.log("Attribute:", demoInput.getAttribute("value"))

})


const clearBtn = document.querySelector("#clear")

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})








