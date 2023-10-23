var workTime;
var breakTime;
document.body.style.backgroundColor = "green"
chrome.storage.local.get(["workDuration"], function(result) {
  workTime = parseInt(result.workDuration);
  console.log("Work time is currently " + workTime);
  count()
  });
function openTimerWindow() {
  chrome.windows.create({
    url: 'breaktimer.html',
    focused: true,
    type: 'popup',
    width: 300,
    height: 200,
  }, function(newWindow) {
    // Handle the new window if necessary
  });
}
function count(){
var countDownDate = new Date().getTime() + workTime * 60 * 1000;
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
  
      if (distance < 0) {
        openTimerWindow();
        close();
      }
    
  }, 1000);
}  
