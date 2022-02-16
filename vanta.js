var width;
var points = 15.0;
var maxDistance = 20.0;

window.addEventListener("resize", () => {
  width = window.innerWidth;
  if (width < 400) {
    points = 10.0;
    maxDistance = 15.0;
  }
});

VANTA.NET({
  el: "#landingPage",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 100.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: "#65f0de",
  backgroundColor: "#010f2b",
  points: points,
  maxDistance: maxDistance,
});
