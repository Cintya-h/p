// onload and func. call
window.onload = function() {
  showdate();
};

function showdate(){

  let today = new Date();
  let day = today.getDate(); // gives num of day
  let weekday = today.getDay(); //  gives day as num sun-say
  let month = today.getMonth(); // gives month as num starting at 0
  let year = today.getFullYear();

  //array 1
  let dayArray = [];

  dayArray[0] = "sunday";
  dayArray[1] = "monday";
  dayArray[2] = "tuesday";
  dayArray[3] = "wednesday";
  dayArray[4] = "thursday";
  dayArray[5] = "friday";
  dayArray[6] = "saturday"; 

  let daynum = dayArray[weekday]; //array 1
  let monthArray = []; //array 2

  monthArray[0] = "January";
  monthArray[1] = "February";
  monthArray[2] = "March";
  monthArray[3] = "April";
  monthArray[4] = "May";
  monthArray[5] = "June";
  monthArray[6] = "July";
  monthArray[7] = "August";
  monthArray[8] = "September";
  monthArray[9] = "October";
  monthArray[10] = "Novemeber";
  monthArray[11] = "December";

  let monnum = monthArray[month];

  document.getElementById("month").innerHTML = monnum; 
  document.getElementById("date").innerHTML = daynum + "- " + day + "- " + year;
} //end of date 

//start of timer
//func to get the time 
function startTimer() {
  hours = document.getElementById('hoursInput').value;
  minutes = document.getElementById('minutesInput').value;
  seconds = document.getElementById('secondsInput').value;
  // all of the variables from user input
  hrs = parseInt(hours, 10) || 0; // turns hours into seconds
  min = parseInt(minutes, 10) || 0; // turns minutes into seconds
  sec = parseInt(seconds, 10) || 0;
  totalTime = (hrs * 3600) + (min * 60) + sec; // total time in seconds 
  remainingTime = totalTime;
  console.log('Timer started'); // add this line to check if the class is being added

//testing for user input and math
//console.log(totalTime);

updateTimer();

//func to show remaining time on timer
function updateTimer() {
  let hours = Math.floor(remainingTime / 3600);
  let minutes = Math.floor((remainingTime % 3600) / 60);
  let seconds = remainingTime % 60;
  document.getElementById('timer').textContent = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

// Pad numbers with leading zeros
function padNumber(num) {
  return String(num).padStart(2, '0');
}

// Start the timer interval
timerInterval = setInterval(function() {
  if (remainingTime > 0) {
    remainingTime--;
    updateTimer();

    // console.log(`Time remaining: ${remainingTime} seconds`); // Log remaining time in console
  } else {
    clearInterval(timerInterval);
    alert('Timer finished!');
  }

},1000);
}

/*start button click event */
let start = document.getElementById('startbtn');
start.onclick= startTimer;



//start NOTEPAD TODO
let inputbox = document.getElementById("input");
let listCont = document.getElementById("list-container");



function addTask(){
    
    if(inputbox.value === ''){
        alert("oops, it looks like you forgot to type your task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
       
    }
    inputbox.value = "";

}


listCont.addEventListener("click",function(e){
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    
  }
 
}, false);


/*click event for adding items to the list*/ 
        let btn = document.getElementById('todoAdd');
        btn.onclick = addTask;



/*calendar start*/

const currentDate = new Date();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.getElementById('currentMonthYear').textContent = monthNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear();


    function updateActiveClass() {
        const calendarDays = document.getElementById('calendar-days').getElementsByTagName('li');
        const activeElement = document.querySelector('.active');

        const currentIndex = Array.from(calendarDays).indexOf(activeElement);
        const nextIndex = (currentIndex + 1) % calendarDays.length;

        activeElement.classList.remove('active');
        calendarDays[nextIndex].classList.add('active');
    }

    function updateActiveClassEveryMinute() {
        updateActiveClass();
        setInterval(updateActiveClass, 24*60*60 * 1000);
    }
    updateActiveClassEveryMinute();



     