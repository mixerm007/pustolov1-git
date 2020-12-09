const meniBtn = document.getElementsByClassName('meni')[0]
const navLinkovi = document.getElementsByClassName('nav-linkovi')[0]

meniBtn.addEventListener('click', ()=> {
    navLinkovi.classList.toggle('active')
})
var countDownDate = new Date("Dec 28, 2020 15:37:25").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
    
  var dani = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuti = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sekunde = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("counter").innerHTML = dani + "d " + hour + "h "
  + minuti + "m " + sekunde + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);