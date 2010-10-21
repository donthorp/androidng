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
	//files.push('android-activity-classname.js');
	//files.push('android-activity-external.js'); 
	//files.push('android-activity-launch.js');
	//files.push('android-activity-menu.js');
	//files.push('android-activity-notification.js');	
 	//files.push('android-activity-pending.js');	
	//files.push('android-keyboard.js');
	//files.push('app-ks.js');
	//files.push('log.js');
	//files.push('json.js');
	//files.push('accelerometer.js');
	//files.push('camera.js');
	//files.push('db.js');
	//files.push('db-install.js');
	//files.push('db-select-empty.js');
	//files.push('fs.js');
	//files.push('fs-create-directory.js');
	//files.push('geo.js');
	//files.push('geo-forward.js');
	//files.push('json-parse.js');
	//files.push('json-parse-escaped.js');
	//files.push('json-parse-xhr.js');
	//files.push('leak-create-window.js');
	//files.push('map.js');
	//files.push('media.js');
	//files.push('media-camera.js');
	//files.push('media-video.js');
	//files.push('network-online.js');
	//files.push('platform-width.js');
	//files.push('platform-openurl-mv4.js');
	files.push('quick-test.js');
	//files.push('ui.js');
	//files.push('ui-background-color.js');
	//files.push('ui-borders.js');
	//files.push('ui-email-logfile.js');
	//files.push('ui-parent-child-focus-source.js');
	//files.push('ui-imageview.js');
	//files.push('ui-imageview-file.js');
	//files.push('ui-imageview-assign.js');
	//files.push('ui-label.js');
	//files.push('ui-label-linkify.js');
	//files.push('ui-layout-scrollview-margins.js'); //focusable
	//files.push('ui-layout-scrollview-post-open.js');
	//files.push('ui-menu.js');
	//files.push('ui-pos1.js');
	//files.push('ui-pos2.js');
	//files.push('ui-pos3.js');
	//files.push('ui-pos4.js');
	//files.push('ui-slider-recalculate.js');
	//files.push('ui-slider-custom.js');
	//files.push('ui-tabgroup.js');
	//files.push('ui-tableview-api-basic.js');
	//files.push('ui-tableview-api-controls.js');
	//files.push('ui-tableview-single-select.js');
	//files.push('ui-text-keyboard-password.js');
	//files.push('ui-textarea-single-line.js');
	//files.push('ui-textview-hint.js');
	//files.push('ui-vertical-layout-nested.js');
	//files.push('ui-view-click.js');
	//files.push('ui-window.js');
	//files.push('ui-window-close-event.js');
	//files.push('ui-window-close-2.js');
	//files.push('ui-window-closeonback.js');
	//files.push('ui-window-exitonclose.js');
	//files.push('ui-window-crash.js');
	//files.push('ui-window-soft-input.js');
	//files.push('ui-window-stacked-lightweights.js');
	//files.push('ui-window-text-softinput.js');
	//files.push('test.js');
	//files.push('picker.js');
	//files.push('timer.js');
	//files.push("app-events.js")
	//files.push("webview-network-change.js");

	//files.push("issue-1805.js"); //http://helpdesk.appcelerator.net/tickets/1805
	//files.push("issue-2460.js");  //http://helpdesk.appcelerator.net/tickets/2460
	//files.push('issue-3023.js'); //http://helpdesk.appcelerator.net/tickets/3023
	//files.push('issue-3046.js'); //http://helpdesk.appcelerator.net/tickets/3046
	//files.push('issue-26391.js'); // http://developer.appcelerator.com/helpdesk/view/26391
	//files.push('issue-40151.js'); // http://developer.appcelerator.com/helpdesk/view/40151
	//files.push('issue-41421.js'); // http://developer.appcelerator.com/helpdesk/view/41241
	//files.push('issue-41281.js'); // http://developer.appcelerator.com/helpdesk/view/41281
	//files.push('issue-41631.js'); // http://developer.appcelerator.com/helpdesk/view/41631
	//files.push('issue-43101.js'); //
	//files.push('issue-46031.js');
	//files.push('issue-47321.js');
	//files.push('issue-47401.js');
	//files.push('issue-47681.js');
	//files.push('issue-48381.js');
	//files.push('testlist.js');

	Ti.include(files[0]); // Temporary hack until array form is fixed

	Ti.API.info("Done with included files");
	log("Done");

	logData;
} catch (E) {
	Ti.API.error("Oops: " + E);
}