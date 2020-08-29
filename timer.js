//We are creating a class element, it will take in a reference to a DOM method of the duration input (the number entered inside the brackets). we are creating a class because it alows us to quickly create objects which are similar (startbutton etc). so now we are creating the templates for these new instsnces. javascript calls a constructor method every time it creates a new instance of a class. Timer is the name of our class and best practice is to capatalise it.
class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
// We created a reference to them incase we need to work with them in the future. inside all of our differnt methods. if i dont connect this, it says the event listener is is undefined.
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
        this.onStart = callbacks.onStart;
        this.onTick = callbacks.onTick;
        this.onComplete = callbacks.onComplete;
    }
    

//this event listener for when start button is clicked. so start() method will fire when we click on the pausebutton
    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
}

//if we press this button i want it to start counting by a second. we are passing in a reference of tick for it to invoke. the seconad argument is expressed in milliseconds. for it to not wait a second before it starts we called it manually right before. interval means timer. to make the tick run more smoothly we made it run every 50 milliseconds.
start = () => {
    if (this.onStart){
       this.onStart(this.timeRemaining); 
    }
    this.tick();
    this.interval = setInterval(this.tick, 50);
    
};

//clearinterval stops the counter. this gives us access to the interval variale inside start.
pause =() => {
   clearInterval(this.interval)
}

//we needed parseFloat to take the string and turn it into a number. we are then saying the value of durationInput is going to be timeremaining takeaway 1. what the user put in takeaway 1. if we were given that callback lets go ahead and call it.
tick = () => {
   if (this.timeRemaining <= 0) {
       this.pause();
       if (this.onComplete){
           this.onComplete();
       }
   }else{
    this.timeRemaining = this.timeRemaining - .05;
   
    if (this.onTick){
        this.onTick(this.timeRemaining);
    }
   }
};

//we use getter to access properties
get timeRemaining(){
    return parseFloat(this.durationInput.value);
}

//setter to mutate them
//to round upp the timer to two decimal points we used toFixe

set timeRemaining(time){
    this.durationInput.value = time.toFixed(2);
}


}