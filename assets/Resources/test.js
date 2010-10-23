var dialog = Titanium.UI.createOptionDialog({
	options:['Option 1', 'Option 2', 'Option 3'],
	buttonNames : ['Cancel'],
	destructive:2,
	cancel:1,
	title:'I am a title'
});

dialog.show();