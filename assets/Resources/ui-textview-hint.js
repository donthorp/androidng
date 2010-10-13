var win = Ti.UI.createWindow({
	backgroundColor : 'black',
	exitOnClose : true,
	navBarHidden : false,
});

var count = 0;

var b = Ti.UI.createButton({
	top : 5, left : 5, right : 5,
	title : "Set Hint"
});
b.addEventListener('click', function(e) {
	Ti.API.info("CLICKED SET HINT");
	tf2.hintText = "A hint " + count;
	count += 1;
	tf2.textAlign = 'center';
	tf2.verticalAlign = 'top';
});

var b1 = Ti.UI.createButton({
	top : 50, left : 5, right : 5,
	title : "Set Hint"
});
b1.addEventListener('click', function(e) {
	Ti.API.info("CLICKED SET ALIGN LEFT");
	tf2.hintText = "A hint";
	tf2.textAlign = 'left';
});

var tf2 = Ti.UI.createTextField({ 
	hintText:'Test', textAlign:'left', left : 0, right : 0, height : 200
}); // doesn't

win.add(b);
win.add(b1);
win.add(tf2);

win.open({ animated : false });
