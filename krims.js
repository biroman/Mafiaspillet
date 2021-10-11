var hotelBtn            = document.getElementById("hotel-btn");
var hotellInfo          = document.getElementById("hotell-info");
var timerCount          = document.getElementById("timer");
var hotelBtnTime        = document.getElementById("hotel-timer");
var hotelBtnSjekkUt     = document.getElementById("hotel-btn-sjekk-ut");

var interval;
var insideHotel = true;




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
            hotelBtnSjekkUt.innerHTML = `Book hotell`;
            hotelBtnTime.innerHTML = ``;
          }, 70)

    }else{
        setTimeout(function () {
            insideHotel = true;
            hotelBtn.style.backgroundColor = "#3e7600";
            hotelBtnSjekkUt.innerHTML = `Sjekk ut`;
            hotelBtnTime.innerHTML = `(69 t 69 m)`;
          }, 80)

    }
});
hotelBtn.addEventListener("mousedown", () => {
	if (insideHotel){
        setTimeout(function () {
            insideHotel = false;
            hotelBtn.style.backgroundColor = "#550000";
            hotelBtnSjekkUt.innerHTML = `Book hotell`;
            hotelBtnTime.innerHTML = ``;
          }, 70)

    }else{
        setTimeout(function () {
            insideHotel = true;
            hotelBtn.style.backgroundColor = "#3e7600";
            hotelBtnSjekkUt.innerHTML = `Sjekk ut`;
            hotelBtnTime.innerHTML = `(69 t 69 m)`;
          }, 80)

    }
});


/*setTimeout(function () {
    console.log('Hello world')
  }, 1000)*/
