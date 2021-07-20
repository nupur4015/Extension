var site = document.getElementById("site");
var block = document.getElementById("block");
var names = document.getElementById("names");
let WEBSITE, ID;

let DATA = localStorage.getItem("SITES");
if(DATA){
    WEBSITE = JSON.parse(DATA);
    ID = WEBSITE.length; 
    loadList(WEBSITE);
}else{
    
    WEBSITE = [];
    ID = 0;
}

function loadList(array){
    array.forEach(function(item){
        ADDSITE(item.name, item.ID, item.trash);
    });
}

function ADDSITE(url, ID, trash){
    
    if(trash){ return; }
    
    var item = `<li class="list-group-item d-flex  h5">
                    <p class="mx-4">${url}</p>
                    <i class="bi bi-x" job="delete" id="${ID}"></i>
                  </li>
                `;
                
                
    var position = "beforeend";
    
    names.insertAdjacentHTML(position, item);
}

function REMOVESITE(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    WEBSITE[element.id].trash = true;
}



names.addEventListener("click", function(event){
    var element = event.target; 
    var elementJob = element.attributes.job.value; 
    
    if(elementJob == "delete"){
        REMOVESITE(element);
    }
    
    
    localStorage.setItem("SITES", JSON.stringify(WEBSITE));
});


block.addEventListener("click",function(){
    
        var url = "*://www."+site.value+"/*";
        
        
        if(url){
            ADDSITE(url, ID, false);
            
        WEBSITE.push({
                name : url,
                ID : ID,
                trash : false
            });
            localStorage.setItem("SITES", JSON.stringify(WEBSITE));
            
            ID++;
        }
        site.value = "";
});