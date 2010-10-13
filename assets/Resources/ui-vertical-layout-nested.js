var win = Ti.UI.createWindow({ backgroundColor : 'white', layout : 'vertical'});

var v1 = Ti.UI.createView({ backgroundColor : 'blue', height : 50});
var v2 = Ti.UI.createView({ backgroundColor : 'red', height : 50});

var s1 = Ti.UI.createScrollView({ backgroundColor : 'orange', height : 'auto', contentHeight : 'auto'});

var c1 = Ti.UI.createView({ backgroundColor : 'black', height:'auto', width:'auto', layout:'vertical'});
var v3 = Ti.UI.createView({ backgroundColor : 'green', height : 50, width:'100'});
var v4 = Ti.UI.createView({ backgroundColor : 'purple', height : 50, left:0, right:0});

c1.add(v3);
c1.add(v4);
s1.add(c1);

win.add(v1);
win.add(v2);
win.add(s1);

win.open({ animated : 'false'});