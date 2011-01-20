Titanium.UI.setBackgroundColor('#000');


var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#000',
    exitOnClose:true,
    navBarHidden:true,
    orientationModes: [Ti.UI.PORTRAIT],
    zIndex:-1
});

win1.open();

var win3 = Ti.UI.createWindow({
	backgroundColor:'#FFF'
});

var button = Titanium.UI.createButton({
    title:'Close',
    top:190,
    left:30,
    height:50,
    width:250,
    font:{fontSize:20}
});

win3.add(button);

win3.open();

button.addEventListener('click', function(){

	win3.close();
	win3.open();
});

