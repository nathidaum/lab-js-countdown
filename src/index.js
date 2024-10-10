const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown)

// ITERATION 2: Start Countdown
const secondsLeft = document.getElementById("time");

function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;

  // Your code goes here ...
  const id = setInterval(() => {
    remainingTime--;
    secondsLeft.innerText = remainingTime;

    if(remainingTime <= 0) {
      clearInterval(id),
      showToast()}
    },
    1000);
  }

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  
  const toaster = document.getElementById("toast"); 
  toaster.style.display = "block";
  toaster.classList.add("show");

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
