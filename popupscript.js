document.getElementById("button").addEventListener("click", clicked);
var checkbox = document.querySelector("input[name=checkbox]");
var clicked = false;

function clicked() {
  var workInput = document.getElementById("work");
  var work = parseInt(workInput.value); // Use .value to get the input value
  var breakInput = document.getElementById("break");
  var breaktime = parseInt(breakInput.value);

  chrome.storage.local.set({ breakDuration: breaktime }, function () {
    // Once the breakDuration value is set, set the workDuration value
    chrome.storage.local.set({ workDuration: work }, function () {
      // Once both values are set, open the timer.html window
      openTimerWindow();
    });
  });
}

checkbox.addEventListener('change', function() {
  if (this.checked) {
    clicked = true;
  } else {
    clicked = false;
  }
});

function openTimerWindow() {
  if (clicked == true) {
    chrome.windows.create({
      url: 'breaktimer.html',
      type: 'popup',
      width: 300,
      height: 200,
    }, function (newWindow) {
      // Handle the new window if necessary
    });
  }
  else{
    chrome.windows.create({
      url: 'timer.html',
      type: 'popup',
      width: 300,
      height: 200,
    }, function (newWindow) {
      // Handle the new window if necessary
    });
  }
}