// add a menu.
Titanium.Android.currentActivity.onCreateOptionsMenu = function (e) {
    var menuItem = e.menu.add({ title: 'Window One' });
    menuItem.setIcon('KS_nav_ui.png');
    menuItem.addEventListener('click', function (e) {
        alert('Clicked!');
    });
};
// add some stuff to the window
var win = Titanium.UI.createWindow({
    title: 'Window One',
    backgroundColor: '#fff'
});
win.add(Titanium.UI.createLabel({
    color: '#999',
    text: 'I am Window One',
    font: { fontSize: 20, fontFamily: 'Helvetica Neue' },
    textAlign: 'center',
    width: 'auto'
}));
win.open();