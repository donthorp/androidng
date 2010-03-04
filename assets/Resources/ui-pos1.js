var win = Ti.UI.createWindow({ backgroundColor : 'navy'});

var btn = Ti.UI.createButton({ width: 'auto', height: 'auto', title:'Top-Left'});

var state = 0;
btn.addEventListener('click', function(e) {
	switch (state) {
	case 0:
		btn.left = 10;
		btn.right = null;
		btn.top = 10;
		btn.bottom = null;
		btn.title = 'Top-Right';
		state++;
		break;
	case 1:
		btn.left = null;
		btn.right = 10;
		btn.title = 'Bottom-Right';
		state++;
		break;
	case 2:
		btn.top = null;
		btn.bottom = 10;
		btn.title = 'Bottom-Left';
		state++;
		break;
	case 3:
		btn.right = null;
		btn.left = 10;
		btn.title = 'Center';
		state++;
		break;
	case 4:
		btn.left = null;
		btn.bottom = null;
		btn.title = 'Top-Left';
		state = 0;
		break;
	}
});

win.add(btn);
win.open();