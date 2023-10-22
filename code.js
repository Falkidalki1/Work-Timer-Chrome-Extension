document.getElementById("button").addEventListener("click", clicked);

function clicked() {
  var workInput = document.getElementById("work");
  var work = parseInt(workInput.value); // Use .value to get the input value
  var breakInput = document.getElementById("break");
  var breaktime = parseInt(breakInput.value);

  chrome.storage.local.set({ breakDuration: breaktime }, function() {
    // Once the breakDuration value is set, set the workDuration value
    chrome.storage.local.set({ workDuration: work }, function() {
      // Once both values are set, open the timer.html window
      openTimerWindow();
    });
  });
}


function openTimerWindow() {
  chrome.windows.create({
    url: 'timer.html',
    type: 'popup',
    width: 300,
    height: 200,
  }, function(newWindow) {
    // Handle the new window if necessary
  });
}