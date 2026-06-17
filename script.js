const taskForm = document.querySelector("#input")
const taskInput = document.querySelector(".enter")
const taskCategory = document.querySelector(".category")
const taskContainer = document.querySelector(".tasks-container")

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let title = taskInput.value
    const category = taskCategory.value
    if (title === "" || category === "") {
        alert("Please fill all the fields")
        return
    }
    console.log("Form Submitted!");

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
    const deleteBtn = taskCard.querySelector('.delete')
    deleteBtn.addEventListener('click', () => {
        taskCard.remove()
    })

    const checkBtn = taskCard.querySelector(".check")
    const statusBtn = taskCard.querySelector(".categories h2:last-child")
    checkBtn.addEventListener('click', () => {
        taskCard.classList.toggle("completed")
        if (taskCard.classList.contains("completed")) {
            statusBtn.textContent = "Completed"
        }
        else {
            statusBtn.textContent = "Pending"

        }
    })

    const editBtn = taskCard.querySelector(".edit")
    const titleElement = taskCard.querySelector("h1")
    editBtn.addEventListener('click',()=>{
        let newTitle  = prompt("Edit your task......")
        if(newTitle){
            titleElement.textContent = newTitle
        }
    })


    taskContainer.appendChild(taskCard)
    taskForm.reset()
})










