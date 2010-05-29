var win = Ti.UI.createWindow();

var v= Ti.UI.createView({
	top: 0,
	height: 50,
	left: 0,
	width: 100,
	//borderWidth: 5,
	//borderColor: 'red',
	// uncomment above two lines, then changing background color actually works
	backgroundColor: 'blue'
});


win.add(v);
var btnRed = Ti.UI.createButton({
	title: 'Red',
	top: 80,
	height: 60,
	width: 100,
	left: 0
});

btnRed.addEventListener('click', function(){
	v.backgroundColor = 'red';
	Ti.API.info('v.backgroundColor == "' + v.backgroundColor + '"');
});

win.add(btnRed);

var btnBlue = Ti.UI.createButton({
	title: 'Blue',
	top: 150,
	height: 60,
	width: 100,
	left: 0
});

btnBlue.addEventListener('click', function(){
	v.backgroundColor = 'blue';
	Ti.API.info('v.backgroundColor == "' + v.backgroundColor + '"');
});
win.add(btnBlue);

win.open();