var win = Titanium.UI.currentWindow;

var label2 = Titanium.UI.createLabel({text: "Message data from Window 1",
	top: "10px", left: "10px",
	width: "200px", height: "50px"
});

var eventButton = Titanium.UI.createButton({
	title: "send event",
	top: "60px", left: "10px",
	width: "120px", height: "50px"
});

var closeButton = Titanium.UI.createButton({
	title: "close",
	top: "110px", left: "10px",
	width: "100px", height: "50px"
});


eventButton.addEventListener("click", function(event)
{
	Titanium.App.fireEvent("sendmsg", { data: "hello from win #2"});
});

closeButton.addEventListener("click", function(event)
{
	win.close();
});

Titanium.App.addEventListener("sendmsg", function(event)
{
	label2.text = event.data;
});

win.add(label2);
win.add(eventButton);
win.add(closeButton);