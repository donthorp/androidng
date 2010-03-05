var win = Ti.UI.createWindow();

if (Ti.Network.online) {
	label = Ti.UI.createLabel({title: 'Online'});
	win.backgroundColor = 'green';
} else {
	label = Ti.UI.createLabel({title: 'Offline'});
	win.backgroundColor = 'red';
}

label.font = { fontSize:'28pt', fontWeight:'bold'};
win.add(label);
win.open();