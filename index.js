const services = [
    { task: "Do Your Homework", price: 10 },
    { task: "Take Your SATs", price: 20 },
    { task: "Falsify Transcripts", price: 30 }
]
const servicesDiv = document.getElementById('services-div')
const taskList = document.getElementById('task-list')
const priceList = document.getElementById('price-list')
const notes = document.getElementById('notes')
let selectedTasks = []
let userNotes = ''
let totalAmount = 0

services.map(taskObj => {
    const taskButton = document.createElement('button')
    taskButton.type = 'button'
    taskButton.textContent = `${taskObj.task}: $${taskObj.price}`
    taskButton.className = 'service-button'
    taskButton.onclick = addService
    servicesDiv.appendChild(taskButton)
})

function addService() {
    console.log("add me plz")
}