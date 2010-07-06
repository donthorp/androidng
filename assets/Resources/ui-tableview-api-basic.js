var win = Ti.UI.createWindow();

// create table view data object
var data = [];

data.push(Ti.UI.createTableViewRow({hasChild:true,title:'Row 1', leftImage : 'media/appcelerator_small.png' }));
data.push(Ti.UI.createTableViewRow({hasDetail:true,title:'Row 2', leftImage : 'media/appcelerator_small.png', rightImage : 'media/appcelerator_small.png'}));
data.push(Ti.UI.createTableViewRow({hasCheck:true,title:'Row 3', height:25, rightImage : 'media/appcelerator_small.png'}));

var lotsOText = 'Row 4 has a lot of text in it. Trying to see if it will wrap or not. ' +
'Looks like it wraps within the specified height, but it needs to take up more room. ' +
'So in the default minimum of 48, it takes up almost exactly three lines. So adding more ' +
'to see if the line will expand.';

data.push(Ti.UI.createTableViewRow({title: lotsOText, height: 'auto'}));

//for(i = 0; i < 50; i++) {
//	data.push(Ti.UI.createTableViewRow({title: "Row " + i+1, height: 'auto'}));
//}

// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	minRowHeight : 40
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata}).show();
});

// add table view to the window
win.add(tableview);
win.open();

