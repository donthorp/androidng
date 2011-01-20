Ti.API.info("@ win_test.js");
var win = Ti.UI.currentWindow;
win.backgroundColor = "#b5aea5";

var xhrComplete = false;

var activity = Ti.Android.currentActivity;
activity.onCreateOptionsMenu = function(e) {
  var aMenu = e.menu;
  var test1 = aMenu.add({
    title: 'Test1',
  });
  test1.addEventListener('click', function() {
    alert("alert: Test1");
  });
  
  var test2 = aMenu.add({
    title: 'Test2',
  });
  test2.addEventListener('click', function() {
    alert("alert: Test2");
    Ti.API.info("Ti.API.info: Test2");
  });
  
  //Now, make a request and add a menu item from a non-UI thread...
  var request = Ti.Network.createHTTPClient({
    timeout: 15000 //15 seconds
  });
  
  request.onload = function(e) {
    Ti.API.info('HTTPClient onload, status: ' + this.status);
    Ti.API.info("Adding additional menu item (this will fail)");
    setTimeout(function() {
		xhrComplete = true;
	}, 5000);    
  };
  
  var url = "http://www.google.com/";
  Ti.API.info('Making GET call to: ' + url);
  request.open("GET", url, true);
  request.send();
}

activity.onPrepareOptionsMenu = function(e) {
	var aMenu = e.menu;
	
	if (aMenu.size() < 3 && xhrComplete) {
	    var test3 = aMenu.add({
	      title: 'Test3',
   		 });
	    test3.addEventListener('click', function() {
	      alert("alert: Test3");
	    });
	}	
};


var displayName = Ti.UI.createLabel({
  top: 0,
  left: 0,
  font:{fontSize: 20, fontWeight:'bold'},
  height: 30,
  width: 320,
  color:'#000000',
  text:"Testing 123"
});
win.add(displayName)