const task = document.getElementById("task");
const add = document.getElementById("add");
const list = document.getElementById("list");


let LIST, id;
// get item from localstorage
let data = localStorage.getItem("TODO");

// check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
}else{
    // if data isn't empty
    LIST = [];
    id = 0;
}

// load items to the user's interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.trash);
    });
}

// add to do function

function addToDo(toDo, id, trash){
    
    if(trash){ return; }
    
    
    
    const item = `<li class="list-group-item h4">
                   <input class="form-check-input me-1 text" job="complete" type="checkbox" id="${id}" value="" aria-label="...">
                    ${toDo}
                    <i class="bi bi-x" job="delete" id="${id}"></i>
                  </li>
                `;
                
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}
// remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}


list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    
    // add item to localstorage ( this code must be added where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

// add an item to the list user the enter key
add.addEventListener("click",function(){
    
        const toDo = task.value;
        
        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,
                id : id,
                trash : false
            });
            
            // add item to localstorage ( this code must be added where the LIST array is updated)
            localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }
        task.value = "";
    
});