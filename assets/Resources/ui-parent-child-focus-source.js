var w = Ti.UI.createWindow({ backgroundColor : 'blue' , name : 'w'});
w.addEventListener('focus', function(e) {
	Ti.API.info("Window Focus: " + e.type + " " + e.source + " " + e.source.name);
});

var b = Ti.UI.createButton({ title : 'Click Me', width : 100, height : 50 , top : 20, name : 'b'});
b.addEventListener('focus', function(e) {
	Ti.API.info("Button Focus: " + e.type + " " + e.source + " " + e.source.name);
});

var b1 = Ti.UI.createButton({ title : 'Click Me', width : 100, height : 50, top : 90, name : 'b1' });
b1.addEventListener('focus', function(e) {
	Ti.API.info("Button 1 Focus: " + e.type + " " + e.source + " " + e.source.name);
});

w.add(b);
w.add(b1);

w.open({ animated : false});