var task = document.getElementById("task");
var add = document.getElementById("add");
var list = document.getElementById("list");
var CHECK = "bi-check-square";
var UNCHECK = "bi-square";
let LIST, id;

let data = localStorage.getItem("TODO");
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; 
    loadList(LIST);
}else{
    
    LIST = [];
    id = 0;
}


function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id,item.done, item.trash);
    });
}


function addToDo(toDo, id,done, trash){
    
    if(trash){ return; }
    
    var DONE = done ? CHECK : UNCHECK;
    
    var item = `<li class="list-group-item d-flex  h5">
                    <i class="bi ${DONE}" job="complete" id="${id}"></i>
                    <p class="mx-4">${toDo}</p>
                    <i class="bi bi-x" job="delete" id="${id}"></i>
                  </li>
                `;
                
                
    var position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;

}


list.addEventListener("click", function(event){
    var element = event.target; 
    var elementJob = element.attributes.job.value; 
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    
    
    localStorage.setItem("TODO", JSON.stringify(LIST));
});


add.addEventListener("click",function(){
    
        var toDo = task.value;
        
        
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }
        task.value = "";
});