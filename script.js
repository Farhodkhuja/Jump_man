const man = document.getElementById("man");
const mush = document.getElementById("mush");
const timer = document.getElementById("timer");

alert('Start')
document.addEventListener("keydown", function(event){
    jump();
});
function jump () {
    if (man.classList != "jump"){
        man.classList.add("jump");
    }
    setTimeout( function(){
        man.classList.remove("jump");
    }, 300)
}
function time () {
     if (man.classList != "time" ){
        man.classList.add("time")
    }
}
let isAlive = setInterval( function() {
     let manTop = parseInt(window.getComputedStyle(man).getPropertyValue("top"));
     let mushLeft = parseInt(window.getComputedStyle(mush).getPropertyValue("left"));
     let timerStop = parseInt(window.getComputedStyle(timer).getPropertyPriority("stop"))

     if (mushLeft < 50 & mushLeft > 0 & manTop >= 50) {
        alert("GAME OVER!!");
     }
 }, 10);