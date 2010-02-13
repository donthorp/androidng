// window container
var win = Titanium.UI.createWindow({
	height:80,
	width:200
});

// black view
var v1 = Titanium.UI.createView({
	height:80,
	width:200,
	backgroundColor:'#000',
	borderColor:'red',
	borderRadius:10,
	opacity:0.8
});

win.add(v1);

win.open();