/*
 * Testing Script for bootup.
 */

try {
	var logData = "";
	function log(s) { logData += s + "\n"; }

	if (Ti && Titanium && Ti === Titanium) {
		log("Ti === Titanium: Passed");
	} else {
		log("Ti === Titanium: Failed");
	}
	Ti.API.warn("Processing app.js");
	Ti.API.info("Titanium Version: " + Ti.version);
	Ti.API.info("Titanium Version #2: " + Ti.version);
	Ti.API.debug("UUID: " + Ti.Platform.createUUID());

	// Use array so we can easily comment items in and out.
	var files = [];

	//files.push('analytics.js');
	files.push('android-activity-alarm.js');
	//files.push('android-activity-classname.js');
	//files.push('android-activity-external.js'); 
	//files.push('android-activity-launch.js');
	//files.push('android-activity-menu.js');
	//files.push('android-activity-notification.js');	
 	//files.push('android-activity-pending.js');	
	//files.push('app-ks.js');
	//files.push('log.js');
	//files.push('json.js');
	//files.push('accelerometer.js');
	//files.push('db.js');
	//files.push('db-select-empty.js');
	//files.push('fs.js');
	//files.push('fs-create-directory.js');
	//files.push('geo.js');
	//files.push('geo-forward.js');
	//files.push('json-parse.js');
	//files.push('json-parse-escaped.js');
	//files.push('json-parse-xhr.js');
	//files.push('jss.js');
	//files.push('leak-create-window.js');
	//files.push('map.js');
	//files.push('media.js');
	//files.push('media-camera.js');
	//files.push('network-online.js');
	//files.push('platform-width.js');
	//files.push('ui.js');
	//files.push('ui-background-color.js');
	//files.push('ui-borders.js');
	//files.push('ui-email-logfile.js');
	//files.push('ui-imageview.js');
	//files.push('ui-imageview-file.js');
	//files.push('ui-imageview-assign.js');
	//files.push('ui-label.js');
	//files.push('ui-menu.js');
	//files.push('ui-pos1.js');
	//files.push('ui-pos2.js');
	//files.push('ui-pos3.js');
	//files.push('ui-pos4.js');
	//files.push('ui-slider-custom.js');
	//files.push('ui-tabgroup.js');
	//files.push('ui-tableview-api-basic.js');
	//files.push('ui-tableview-api-controls.js');
	//files.push('ui-tableview-single-select.js');
	//files.push('ui-window.js');
	//files.push('ui-window-close-event.js');
	//files.push('ui-window-crash.js');
	//files.push('ui-window-stacked-lightweights.js');
	//files.push('test.js');
	//files.push('picker.js');
	//files.push('timer.js');
	//files.push("app-events.js")

	//files.push("issue-1805.js"); //http://helpdesk.appcelerator.net/tickets/1805
	//files.push("issue-2460.js");  //http://helpdesk.appcelerator.net/tickets/2460
	//files.push('issue-3023.js'); //http://helpdesk.appcelerator.net/tickets/3023
	//files.push('issue-3046.js'); //http://helpdesk.appcelerator.net/tickets/3046
	//files.push('issue-26391.js'); // http://developer.appcelerator.com/helpdesk/view/26391

	Ti.include(files);

	Ti.API.info("Done with included files");
	log("Done");

	logData;
} catch (E) {
	Ti.API.error("Oops: " + E);
}