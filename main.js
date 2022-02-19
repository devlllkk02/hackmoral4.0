// function countdown() {
//   let dueDate = new Date("February 19, 2022 18:00:00");
//   let nowDate = new Date();

//   let timeDifference = dueDate.getTime() - nowDate.getTime();
//   if (timeDifference <= 0) {
//     clearTimeout(timer);
//   }

//   let seconds = Math.floor(timeDifference / 1000);
//   let minitues = Math.floor(seconds / 60);
//   let hours = Math.floor(minitues / 60);
//   let days = Math.floor(hours / 24);

//   hours = hours % 24;
//   minitues = minitues % 60;
//   seconds = seconds % 60;

//   if (seconds >= 0 && seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   if (minitues >= 0 && minitues < 10) {
//     minitues = "0" + minitues;
//   }

//   if (hours >= 0 && hours < 10) {
//     hours = "0" + hours;
//   }
//   document.getElementById("timer__days").innerHTML = days;
//   document.getElementById("timer__hours").innerHTML = hours;
//   document.getElementById("timer__minutes").innerHTML = minitues;
//   document.getElementById("timer__seconds").innerHTML = seconds;
//   var timer = setTimeout("countdown()", 1000);
// }
// countdown();
