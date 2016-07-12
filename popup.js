// If an IP from a previous use is present, it uses that.
if(typeof localStorage["samServerIP"] != 'undefined'){
  document.getElementById("serverip").value = localStorage["samServerIP"];
}

var sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function(){
  // Gets the server's IP from the input field
  var serverIP = document.getElementById("serverip").value;

  // Sets form's action to IP
  document.getElementById('samsForm').action = serverIP;

  // Stores it for later use
  localStorage["samServerIP"] = serverIP;
})

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  var url = tabs[0].url;
  document.getElementById("url").value=url;
});
