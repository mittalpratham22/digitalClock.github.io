let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let ctr=document.getElementById("ctr");

setInterval(()=>{

    let currentTime= new Date();
    hrs.innerHTML=(currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    ctr.innerHTML=(currentTime.getMilliseconds()<100?"0":"") + Math.trunc(currentTime.getMilliseconds()/10);

},10)

