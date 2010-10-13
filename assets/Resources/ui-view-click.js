var w = Ti.UI.createWindow({ backgroundColor : 'black'});

var v = Ti.UI.createView({	
	top:100,
	left:100,
	height:40,
	width:40,
	backgroundColor:'red'
});

w.add(v);

v.addEventListener("click",function(e) {
	alert("you tapped the red box!");
});

var b = Ti.UI.createButton({ title : 'Add Full View' });
b.addEventListener('click', function(e) {
	var fv = Ti.UI.createView({ left : 0, top : 0, right : 0, bottom : 0, backgroundColor : 'blue', opacity : 0.5});
	fv.touchEnabled = false;
	fv.addEventListener('click', function(e) {
		// Do Nothing
	});
	w.add(fv);
});
w.add(b);
w.open({ animated : false });