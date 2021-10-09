var hotelBtn            = document.getElementById("hotel-btn");
var skytBtn             = document.getElementById("skyt-btn");
var nullStillContainer  = document.getElementById("nullstill-container");
var nullStillBtn        = document.getElementById("nullstill-drap");
var hotellInfo          = document.getElementById("hotell-info");
var timerCount          = document.getElementById("timer");

var interval;
var insideHotel = true;
var nullStill = false;



nullStillContainer.style.display = "none";

hotelBtn.addEventListener("mousedown", () => {
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


hotelBtn.addEventListener("mousedown", () => {
	if (insideHotel){
        setTimeout(function () {
            insideHotel = false;
            hotelBtn.style.backgroundColor = "#550000";
          }, 70)

    }else{
        setTimeout(function () {
            insideHotel = true;
            hotelBtn.style.backgroundColor = "#3e7600";
          }, 80)

    }
});

skytBtn.addEventListener("mousedown", () => {
    if (insideHotel){
        hotellInfo.innerHTML = `Du må gå ut av hotell for å skyte!`;

    }else{
        setTimeout(function () {
            nullStill = true;
            nullStillContainer.style.display = "flex";
          }, 150)
        hotellInfo.innerHTML = `Du skjøt, men fant ikke.`;
    }
});

nullStillBtn.addEventListener("mousedown", () => {
    if (insideHotel){
        hotellInfo.innerHTML = `Du må gå ut av hotell for å nulle!`;

    }else{
        setTimeout(function () {
            nullStill = false;
            nullStillContainer.style.display = "none";
          }, 150)

        hotellInfo.innerHTML = `Du nullstilte!`;
    }
});

/*setTimeout(function () {
    console.log('Hello world')
  }, 1000)*/
