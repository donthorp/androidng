var win = Ti.UI.createWindow({
	navBarHidden : false,
	backgroundColor : 'gray',
	exitOnClose : true
});

var label = Ti.UI.createLabel({
	text : 'Key'
});
win.add(label);

win.addEventListener('android:back', function() {
	var dlg = Ti.UI.createAlertDialog({ message : 'Exit?', buttonNames : ['OK','Cancel']});
	dlg.addEventListener("click", function(e) {
		if (e.index == 0) {
			dlg.hide();
			win.close();
		}
	});
	dlg.show();
});

win.addEventListener('android:focus', function() {
	label.text = "You clicked focus";
});

win.addEventListener('android:camera', function() {
	label.text = "You clicked camera";
});

win.addEventListener('android:search', function() {
	label.text = "You clicked search";
});

win.addEventListener('android:volup', function() {
	label.text = "You clicked volup";
});

win.addEventListener('android:voldown', function() {
	label.text = "You clicked voldown";
});


win.open({animated : false});