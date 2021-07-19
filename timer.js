var reset=document.getElementById("reset");
var change=document.getElementById("switch");
var pause=document.getElementById("pause");
var wmin=document.getElementById("w-min");
var bmin=document.getElementById("b-min");
var wset=document.getElementById("w-set");
var bset=document.getElementById("b-set");
var timeleft=document.getElementById("timeleft");
var wb=document.getElementById("wb");
var alarm=document.getElementById("music");
var wmins=0,wsec=0,time,bsec=0,bmins=0,minutes,seconds;
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
    if(typeof(minutes)=="string")
    minutes=5;
    else
    minutes=minutes+5;
    localStorage.setItem("MIN",JSON.stringify(minutes));
});

change.addEventListener("click",function(){
    alarm.pause();
    work=!work;
    if(work){
        bmins=minutes;
        bsec=seconds;
        wb.innerHTML="You're at work";
        update(wmins,wsec);

    }else{
        wmins=minutes;
        wsec=seconds;
        wb.innerHTML="You're on break";
        update(bmins,bsec);
    }
});

wset.addEventListener("click",function(){
if(wmin.value){
    alarm.pause();
    wmins=wmin.value
    wsec=0;
    wb.innerHTML="You're at work";
    update(wmins,wsec);
}

});

bset.addEventListener("click",function(){
    if(bmin.value){
        alarm.pause();
        bmins=bmin.value
        bsec=0;
        }
});

countdown=setInterval(function(){ 
    if(!(minutes==0 && seconds==0)) 
    update(minutes,seconds);
    else {
        timeleft.innerHTML= "0";  
        wb.innerHTML="";
     alarm.play(); } 
    }, 1000);


pause.addEventListener("click",function(){
    alarm.pause();
    if(pause.firstChild.class=="bi bi-play-fill"){
        pause.firstChild.class="bi bi-pause";

    countdown=setInterval(function(){ 
        if(!(minutes==0 && seconds==0)) 
        update(minutes,seconds);
        else{ 
            timeleft.innerHTML= "0"; 
            wb.innerHTML="";
            alarm.play(); }
    }, 1000);

    }else{
        pause.firstChild.class="bi bi-play-fill";
         clearInterval(countdown);
    }

});
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

    
    
    