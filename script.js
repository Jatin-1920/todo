const crudList = document.querySelector('.crud-list')

const list = document.querySelector('.list')

let items = []
function handleSubmit(e){
    e.preventDefault()
const name = e.currentTarget.item.value
if(!name)return
const item = {
    name:name,
id : Date.now(),
complete:false,
}
items.push(item)
e.target.reset()

list.dispatchEvent(new CustomEvent("ItemsUpdated"))
}

function displayList() {
const html = items.map(item=>
    ` <li class="shopping-list">
        <input type="checkbox" name="checkbox" value="${item.id}" class="checkbox" ${item.complete?"checked":""}>
        <span class="itemName">${item.name}</span>
    <button value="${item.id}" aria-label="Remove ${item.name}" class="remove">X</button></li>`
).join("")
list.innerHTML = html;
}

function mirrotToLocalStorage(){
    localStorage.setItem("items",JSON.stringify(items))

}
function getDataFromLocalStorga(){
    const localStorageItems = JSON.parse(localStorage.getItem("items"))
    if(localStorageItems.length){
        items = localStorageItems
        // items.push(...localStorageItems)
list.dispatchEvent(new CustomEvent("ItemsUpdated"))
    }
}


function deleteItems(id){
    items = items.filter(item=>item.id!==id)
    list.dispatchEvent(new CustomEvent("ItemsUpdated"))

}
function markAsComplete(id){
    const itemRef = items.find(item=> item.id === id)
    itemRef.complete = !itemRef.complete
    list.dispatchEvent(new CustomEvent("ItemsUpdated"))
}

crudList.addEventListener("submit", handleSubmit)
list.addEventListener("ItemsUpdated",displayList)
list.addEventListener("ItemsUpdated",mirrotToLocalStorage)


list.addEventListener("click", function(e){
    const id = parseInt(e.target.value)
    if(e.target.matches("button")){
        deleteItems(id)
    }
    if(e.target.matches('input[type="checkbox"]')){
        markAsComplete(id)
    }
})
getDataFromLocalStorga()