/*
var win1 = Titanium.UI.createWindow({
	backgroundColor: '#fcc'
});

var label1 = Titanium.UI.createLabel({text: "Message data from Window 2",
	top: "10px", left: "10px",
	width: "200px", height: "50px"
});

var openButton = Titanium.UI.createButton({
	title: "open win #2",
	top: "60px", left: "10px",
	width: "150px", height: "50px"
});

openButton.addEventListener("click", function(event)
{
	setTimeout(function() {
		Titanium.App.fireEvent("sendmsg", { data: "win #1 rocks" });
	}, 1000);
});


win1.add(label1);
win1.add(openButton);

Titanium.App.addEventListener("sendmsg", function(event)
{
	label1.text = event.data;
})

//win1.open();
*/


var win2 = Titanium.UI.createWindow({
    url: 'main_windows/app-event-window.js'
});

win2.open();