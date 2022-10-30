var i = 0

document.addEventListener( 'DOMContentLoaded', function() {
var splide = new Splide( '.splide', {
  type  : 'fade',
  rewind: true,
} );
splide.mount();
})

var typed = new Typed('.type', {
    strings: ["a Gamer.", "a Geek.","a 3-D Designer.", "a Programmer." ,"ThermalDust095"],
    typeSpeed: 80
    });

const progress = document.getElementsByClassName("progress-bar")

const TotalHeight = document.body.scrollHeight - window.innerHeight

window.onscroll = function(){
  const progressHeight = (window.pageYOffset/TotalHeight)*100;

  progress[0].setAttribute("style","height:"+ progressHeight + "%;");
}

const discord = document.getElementsByClassName("discord")[0]
const popUp = document.getElementsByClassName("pop-up")[0]
var close = document.getElementsByClassName("close")[0];

function dis_click(){
  popUp.style.display = "block";
}

close.onclick = function(){
  popUp.style.display = "none";   
}



const menu = document.getElementById("menu")
const ther = document.getElementsByClassName("ther")[0]
const cross = document.getElementsByClassName("cross")[0]
const whole = document.getElementById("whole")
const others = document.getElementsByClassName("breh")

const mediaQuery = window.matchMedia('(max-width: 700px)')


if(mediaQuery.matches){
menu.onclick = function(){
  ther.setAttribute("style","right:0;width:300px;")
  whole.setAttribute("style","display:block;")

}

cross.onclick = function(){
  ther.setAttribute("style","right:-300px;width:0px")
  whole.setAttribute("style","display:none;")
}

for(i=0;i<4;i++){
  others[i].onclick = function(){
    ther.setAttribute("style","right:-300px;width:0px")
    whole.setAttribute("style","display:none;")
  }
}
}
