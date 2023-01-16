

const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const ulElement = document.querySelector(".list");




formElement.addEventListener("submit", (event)=>{
    event.preventDefault() ;
    toDoList();
})

function toDoList(task) {
    let newTask = inputElement.value;
    
    if(task){
        newTask = this.task ;
    }
    //console.log(newTask);

    const liEl = document.createElement("li");

    liEl.innerText = newTask;
    ulElement.appendChild(liEl);
    inputElement.value = "";



}