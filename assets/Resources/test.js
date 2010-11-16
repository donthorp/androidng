Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win = Titanium.UI.createWindow({  
    title:'Tab',
    backgroundColor:'#fff'
});

var tab = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'Tab',
    window:win
});

var alt = Titanium.UI.createAlertDialog({
  title: 'clicked!',
  message: ''
});


var button = Titanium.UI.createButton({
	title:'Fires synthetic event',
	height:40,
	width:200,
	top:10
});

var button2 = Titanium.UI.createButton({
	title:'Simple Click event',
	height:40,
	width:200,
	top:100
});

button.addEventListener("click", function() {
  win.fireEvent("foo");
});

button2.addEventListener("click", function() {
  alt.show();
});

win.add(button);
win.add(button2);

win.addEventListener("foo", function() {
  alt.show();
});

tabGroup.addTab(tab);

tabGroup.open();
