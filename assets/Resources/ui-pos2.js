var win = Ti.UI.createWindow({ backgroundColor : 'navy'});

var btn = Ti.UI.createButton({ width: 'auto', height: 'auto', title:'Top-Left'});

var container = Ti.UI.createView({ backgroundColor: 'red', width: 'auto', height: 'auto'});
container.add(btn);


var state = 0;
btn.addEventListener('click', function(e) {
	switch (state) {
	case 0:
		container.left = 10;
		container.right = null;
		container.top = 10;
		container.bottom = null;
		btn.title = 'Top-Right';
		state++;
		break;
	case 1:
		container.left = null;
		container.right = 10;
		btn.title = 'Bottom-Right';
		state++;
		break;
	case 2:
		container.top = null;
		container.bottom = 10;
		btn.title = 'Bottom-Left';
		state++;
		break;
	case 3:
		container.right = null;
		container.left = 10;
		btn.title = 'Center';
		state++;
		break;
	case 4:
		container.left = null;
		container.bottom = null;
		btn.title = 'Top-Left';
		state = 0;
		break;
	}
});

win.add(container);
win.open();