var w = Ti.UI.createWindow();

var data = [ 
	{title:'Row 1', hasCheck:true}, 
	{title:'Row 2', hasCheck:false}, 
	{title:'Row 3', hasCheck:false}, 
	{title:'Row 4', hasCheck:false}, 
	{title:'Row 5', hasCheck:false},
];

var tv = Ti.UI.createTableView({data:data}); 
w.add(tv); 
tv.addEventListener('click', function(e) 
{
	for (var i=0;i<tv.data[0].rows.length;i++) 
	{ 
		var row = tv.data[0].rows[i]; 
		row.hasCheck=false; 
		Ti.API.info("THIS IS FALSE DAMN IT");
	} 
	e.row.hasCheck = true;

}); 

w.open();
