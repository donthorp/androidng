var win = Ti.UI.createWindow({
	backgroundColor : 'black',
	exitOnClose : true,
	navBarHidden : false
});

var b = Ti.UI.createButton({
	title : 'Install DB',
	width : 90, height : 50
});

b.addEventListener('click', function(e) {
	var db = Ti.Database.install('/db/dealsplus.sqlite', 'newdeal.db');

	if (db === null) {
		Ti.UI.createNotification({
			message : 'No Joy'
		}).show();
	} else {
		db.close();
		Ti.UI.createNotification({
			message : 'Installed'
		}).show();
	}	
});

win.add(b);
win.open({ animated : false});