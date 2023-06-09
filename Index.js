var container = document.getElementById("game1");  
var content = container.innerHTML;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var evtarget=ev.target;
      if (evtarget=="[object HTMLImageElement]"){
           evtarget = evtarget.parentNode;
      }
      else {
      ev.target.appendChild(document.getElementById(data));
      }
}

function reset1(){
    var container = document.getElementById("game1");
    container.innerHTML= html;
}                
var html;
window.onload = function(){
	html = document.getElementById('game1').innerHTML;
};   