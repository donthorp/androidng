var tg = Ti.UI.createTabGroup({});

var win1 = Ti.UI.createWindow({
	url:'ui-window.js'
});
var tab1 = Titanium.UI.createTab({
    title:'Tab 1',
    window:win1
});

var win2 = Ti.UI.createWindow({
	url:'ui-label.js'
});
var tab2 = Titanium.UI.createTab({
    title:'Tab 2',
    window:win2
});

tg.addTab(tab1);
tg.addTab(tab2);
tg.open();