var filterWindow = Ti.UI.createWindow({
        backgroundColor:'red',
        url : 'ui-label.js'
    });
 
filterWindow.addEventListener('close', function() {
    Ti.API.info("in filter close");
});
 
filterWindow.open({fullscreen:false, modal:true});