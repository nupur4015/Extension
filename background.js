let x=[],LIST,i=0;
x[0]="<no_url>";
let data = localStorage.getItem("SITES");
if(data){
    LIST = JSON.parse(data);
    loadList(LIST);}

    function loadList(array){
      array.forEach(function(item){
          if(item.trash==false)
          {x[i]=item.name;
          i++;}
      });
  }

  updateFilters(x);
  window.addListener("storage",function(){
    i=0;
    let data = localStorage.getItem("SITES");
if(data){
    LIST = JSON.parse(data);
    loadList(LIST);}

    function loadList(array){
      array.forEach(function(item){
          if(item.trash==false)
          {x[i]=item.name;
          i++;}
      });
  }
  updateFilters(x);

  });
function blockRequest(details) 
{ return {cancel: true}; } 


function updateFilters(x) 
{  
  chrome.webRequest.onBeforeRequest.addListener(blockRequest, 
    {urls: x}, 
    ['blocking']); } 


    

