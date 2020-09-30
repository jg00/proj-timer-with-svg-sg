const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const circle = document.querySelector("circle");

const perimeter = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    console.log("Timer started");
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    // Fraction of the perimeter
    const offSet = perimeter * (timeRemaining / duration) - perimeter;
    circle.setAttribute("stroke-dashoffset", offSet);
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
