let itemCreate = document.getElementById("itemCreate")
let myInput = document.getElementById("myInput")
let myList = document.getElementById("myList")

itemCreate.addEventListener("submit", 
    (data)=> {
        data.preventDefault()
    createItem (myInput.value) 
    })

createItem = (d) => {
    let myTemplate = `<li>${d}<button onclick ="deleteItem(this)"> Delete </button></li>`
    myList.insertAdjacentHTML("beforeend", myTemplate)
    myInput.value = ""
    myInput.focus()
}

function deleteItem (x) {
    x.parentElement.remove()
}