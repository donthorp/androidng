var w = Ti.UI.currentWindow;

var l = Ti.UI.createLabel({'text' : 'Hello', width : 100, height : 50});
w.add(l);

setTimeout(function() { w.close(); }, 1000);

