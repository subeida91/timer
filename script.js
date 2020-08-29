//query selectors. select three elements using query selector.
//i'm grabbing the input with an id of duration, start, and pause.
const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')

//saving the radius 
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

    

//This is where we create our instance of timers.
//we added in functions to deal with the borders. every time it ticks it runs by 1 px. we are adjusting our value for stroke-dashoffset using this code. 
let duration;
const timer = new Timer(durationInput, startButton, pauseButton,{
    onStart(totalDuration){
      duration = totalDuration;
    },

    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter
        )
    },

    onComplete() {
        console.log("timer is compelted")
    }
  });
  

