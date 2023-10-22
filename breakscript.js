var workTime;
var breakTime;
document.body.style.backgroundColor = "red"
chrome.storage.local.get(["workDuration"], function(result) {
  workTime = parseInt(result.workDuration);
  console.log("Work time is currently " + workTime);
  });

  chrome.storage.local.get(["breakDuration"], function(result) {
    breakTime = parseInt(result.breakDuration);
    console.log("Break time is currently " + breakTime);
    count()
  });

// Set the date we're counting down to
function openTimerWindow() {
  chrome.windows.create({
    url: 'timer.html',
    focused: true,
    type: 'popup',
    width: 300,
    height: 200,
  }, function(newWindow) {
    // Handle the new window if necessary
  });}
function count(){
var countDownDate = new Date().getTime() + breakTime * 60 * 1000;
console.log(breakTime + 3)
// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for hours, minutes, and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Format the numbers with leading zeros
    var formattedHours = hours.toString().padStart(2, '0');
    var formattedMinutes = minutes.toString().padStart(2, '0');
    var formattedSeconds = seconds.toString().padStart(2, '0');
  
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML =  formattedHours + ":"
    + formattedMinutes + ":" + formattedSeconds;
  
    // If the count down is finished, write some text
    if (distance < 0) {
      openTimerWindow();
      close();
    }
  }, 1000);
}  
