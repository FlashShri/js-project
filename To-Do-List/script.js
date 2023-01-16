

const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const ulElement = document.querySelector(".list");


// get the data from localstorage and parse it from string ti obj
let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {

    // calling our main fun with previous data
    toDoList(task); 

  });
}


formElement.addEventListener("submit", (event)=>{
    event.preventDefault() ; // sumit value without refresh the page
    toDoList();
})

function toDoList(task) {

    // creating a variable which holds the value
    let newTask = inputElement.value;
    
    // check if previous data present
    if(task)
    {
        newTask = task.name ;
    }

    // after taking input create a new li element and assing the value
    const liEl = document.createElement("li");
    liEl.innerText = newTask;
    ulElement.appendChild(liEl);

    // after creating and assing the value empty the input element
    inputElement.value = "";

    // if checked icon is clicked then add ".checked" class to it
    if( task && task.checked){
        liEl.classList.add("checked"); // 
    }

    //creating check icon for new entry
    const checkButton = document.createElement("div");
    checkButton.innerHTML = `<i class="fa-solid fa-circle-check"></i>` ;
    liEl.appendChild(checkButton);

    //creating trash icon for new entry
    const trashButton = document.createElement("div");
    trashButton.innerHTML = `<i class="fa-solid fa-circle-minus"></i>` ;
    liEl.appendChild(trashButton);

    // event listener for check and trash icon
    checkButton.addEventListener("click", ()=>{
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });

    trashButton.addEventListener("click", ()=>{
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();

}



function updateLocalStorage() {

    // getting all the entries
    const liElements = document.querySelectorAll("li");


    // create array for entries
    list = [];
    liElements.forEach((liEl) => {
        // push each entry as object 
        list.push({
          name: liEl.innerText,
          checked: liEl.classList.contains("checked"),
        });
      });

      // set the data in localstorage as string 
    localStorage.setItem("list", JSON.stringify(list));
}