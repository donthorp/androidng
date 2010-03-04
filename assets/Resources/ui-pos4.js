var row = Ti.UI.createWindow({ left: 0, right: 0, height:100, top: 100, backgroundColor: 'blue'});

var label = Ti.UI.createLabel({
		text: 'Cell at row 1' ,
		color: '#420404',
		shadowColor:'#FFFFE6',
		shadowOffset:{x:0,y:1},
		textAlign:'left',
		top:20,
		left:85,
		width: 'auto',
		height:'auto',
		font:{fontWeight:'bold',fontSize:18}
	});
row.add(label);

var label2 = Ti.UI.createLabel({
	text: "Other information could go here if you'd like",
	color: '#420404',
	shadowColor:'#FFFFE6',
	textAlign:'left',
	shadowOffset:{x:0,y:1},
	font:{fontWeight:'bold',fontSize:13},
	bottom:22,
	height:'auto',
	left:85,
	right:50
});
row.add(label2);

row.open();