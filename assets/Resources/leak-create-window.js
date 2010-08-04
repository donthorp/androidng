
var win = Ti.UI.createWindow({'backgroundColor' : 'blue'});
var btn = Ti.UI.createButton({'title' : 'Next'});

btn.addEventListener('click', function() {
	var w = Ti.UI.createWindow({'backgroundColor' : 'red', navBarHidden : false, url : 'leak-helper1.js'});
	w.open();	
});

win.add(btn);
win.open();