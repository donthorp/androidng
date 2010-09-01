Titanium.UI.setBackgroundColor('#000');

var w = Ti.UI.createWindow({
    fullscreen: true,
    title: 'test'
});

var ta = Titanium.UI.createTextArea({
    value: "Now is the time for all good men to come to the aid of their country.",
    height:100, width:300, top: 0, left: 0,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT
});
w.add(ta);
w.open();