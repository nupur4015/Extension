var reset=document.getElementById("reset");
var change=document.getElementById("switch");
var pause=document.getElementById("pause");
var wmin=document.getElementById("w-min");
var bmin=document.getElementById("b-min");
var wset=document.getElementById("w-set");
var bset=document.getElementById("b-set");
var timeleft=document.getElementById("timeleft")
var wmins,wsec,time,bsec=0,bmins=0,minutes,seconds;
var work=true;
var countdown=null;


let datamin = localStorage.getItem("MIN");
let datasec = localStorage.getItem("SEC");
if(datamin){
    minutes=JSON.parse(datamin);
}
else
minutes=00;
if(datasec){
    seconds=JSON.parse(datasec);
}
else
seconds=00;

reset.addEventListener("click",function(){
    minutes=minutes+5;
    localStorage.setItem("MIN",JSON.stringify(minutes));
});

change.addEventListener("click",function(){
    work=!work;
    if(work){
        bmins=minutes;
        bsec=seconds;
        update(wmins,wsec);

    }else{
        wmins=minutes;
        wsec=seconds;
        update(bmins,bsec);
    }
});

wset.addEventListener("click",function(){
if(wmin.value){
    wmins=wmin.value
    wsec=0;
    update(wmins,wsec);
}

});

bset.addEventListener("click",function(){
    if(bmin.value){
        bmins=bmin.value
        bsec=0;
        }
    
    });

countdown=setInterval(function(){ if(!(minutes==0 && seconds==0)) update(minutes,seconds);else timeleft.innerHTML= "0";}, 1000);
function update(min,sec){
    time=min*60+sec;
    minutes=Math.floor(time/60);
    seconds=time%60;
    seconds=seconds<10 ? '0' +seconds : seconds;
    timeleft.innerHTML= minutes +":"+ seconds;
    if(!(minutes==0 && seconds==0)){
    if(seconds==0){
        minutes--;
        seconds=59;
    }
    else
    seconds--;}
    localStorage.setItem("MIN",JSON.stringify(minutes));
    localStorage.setItem("SEC",JSON.stringify(seconds));

}

    
    
    