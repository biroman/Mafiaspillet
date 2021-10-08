var hotelBtn            = document.getElementById("hotel-btn");
var skytBtn             = document.getElementById("skyt-btn");
var nullStillContainer  = document.getElementById("nullstill-container");
var nullStillBtn        = document.getElementById("nullstill-drap");
var hotellInfo          = document.getElementById("hotell-info");
var timerCount          = document.getElementById("timer");

var insideHotel = true;

var nullStill= false;

nullStillContainer.style.display = "none";

hotelBtn.addEventListener("click", () => {
    if (interval) {
        interval = clearInterval(interval);
        return;
      }
      var startTime = new Date();
      interval = setInterval(function() {
        // "timer" is the element showing the time
        timer.innerHTML = (new Date() - startTime) / 1000;
      })
    });


hotelBtn.addEventListener("click", () => {
	if (insideHotel == true){
        insideHotel = false;
        hotelBtn.style.backgroundColor = "#550000";
    }else{
        insideHotel = true;
        hotelBtn.style.backgroundColor = "#3e7600";
    }
});

skytBtn.addEventListener("click", () => {
    if (insideHotel == true){
        hotellInfo.innerHTML = `Du må gå ut av hotell for å skyte!`;


    }else{
        nullStill = true;
        nullStillContainer.style.display = "flex";
        hotellInfo.innerHTML = `Du skøyt, men fant ikke.`;
    }
});


nullStillBtn.addEventListener("click", () => {
    if (insideHotel == true){
        hotellInfo.innerHTML = `Du må gå ut av hotell for å nulle!`;

    }else{
        nullStill = false;
        nullStillContainer.style.display = "none";
        hotellInfo.innerHTML = `Du nullstilte!`;
    }
});


// interval variable
var interval;
// "btn" is the element you want to click to start/stop it
btn.addEventListener('click', function() {
  if (interval) {
    clearInterval(interval);
    return;
  }
  var startTime = new Date();
  interval = setInterval(function() {
    // "timer" is the element showing the time
    timer.innerHTML = (new Date() - startTime) / 1000;
  });
});




