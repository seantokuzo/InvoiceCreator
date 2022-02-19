const services = [
    { task: "Do Your Homework", price: 10 },
    { task: "Take Your SATs", price: 20 },
    { task: "Falsify Transcripts", price: 30 },
    { task: "Dinner Date w/ Dean", price: 40 },
    { task: "CEO Meet n Greet", price: 50 },
    { task: "Illuminati Initiation", price: 100 }
]
const servicesDiv = document.getElementById('services-div')
const tasksDiv = document.getElementById('tasks-div')
const notes = document.getElementById('notes')
const amount = document.getElementById('amount')
let selectedTasks = []

function addNote(e) {
    notes.innerText = e.target.value
}
const notesInput = document.getElementById('notes-input')
notesInput.oninput = ((event) => addNote(event))

services.map(taskObj => {
    const taskButton = document.createElement('button')
    taskButton.type = 'button'
    taskButton.textContent = `${taskObj.task}: $${taskObj.price}`
    taskButton.className = 'service-button'
    taskButton.onclick = (() => addService(taskObj))
    servicesDiv.appendChild(taskButton)
})

function renderTasksList() {
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(tasksDiv);
    selectedTasks.map((taskObj, i) => {
        const newDiv = document.createElement('div')
        newDiv.className = "added-task-div"
        newDiv.id = `added-task${i}`
        tasksDiv.appendChild(newDiv)
        const taskTitle = document.createElement('h2')
        taskTitle.className = "added-task-title"
        taskTitle.innerText = taskObj.task
        newDiv.appendChild(taskTitle)
        const remove = document.createElement('p')
        remove.className = "added-task-remove"
        remove.id = i
        remove.innerText = "Remove"
        remove.onclick = ((event) => removeService(event))
        newDiv.appendChild(remove)
        const dollar = document.createElement('h2')
        dollar.className = "dollar"
        dollar.innerText = "$"
        newDiv.appendChild(dollar)
        const price = document.createElement('h2')
        price.className = "price"
        price.innerText = `${taskObj.price}`
        newDiv.appendChild(price)
    })
    const totalAmount = selectedTasks.reduce((acc, task) => {
        return acc + task.price
    }, 0)
    amount.innerText = `$${totalAmount}`
}


function removeService(e) {
    const index = parseInt(e.target.id)
    selectedTasks.splice(index, 1)
    renderTasksList()
}

function addService(taskObj) {
    if (selectedTasks.length < 11 && !selectedTasks.includes(taskObj)) {
        selectedTasks.push(taskObj)
        renderTasksList()
    } else return
}

function resetAll() {
    selectedTasks = []
    notes.innerText = ''
    notesInput.value = ''
    renderTasksList()
}

{/* <div class="added-task-div">
    <h2 class="added-task-title">Do Your Homework</h2>
    <p class="added-task-remove">Remove</p>
    <h2 class="dollar">$</h2>
    <h2 class="price">10</h2>
</div> */}