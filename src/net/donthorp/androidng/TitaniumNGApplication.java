/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2010 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
package net.donthorp.androidng;

import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiContext;

public class TitaniumNGApplication extends TiApplication
{

	@Override
	public void onCreate() {
		super.onCreate();

		appInfo = new TitaniumNGAppInfo(this);
	}

	@Override
	protected void bootModules(TiContext context) {
		modules.add(new ti.modules.titanium.geolocation.GeolocationModule(context));
		// Locale module
		modules.add(new ti.modules.titanium.locale.LocaleModule(context));
		// App module
		modules.add(new ti.modules.titanium.app.AppModule(context));
		// Analytics module
		modules.add(new ti.modules.titanium.analytics.AnalyticsModule(context));
		// API module
		modules.add(new ti.modules.titanium.api.APIModule(context));
		// XML module
		modules.add(new ti.modules.titanium.xml.XMLModule(context));
		// Accelerometer module
		modules.add(new ti.modules.titanium.accelerometer.AccelerometerModule(context));
		// Contacts module
		modules.add(new ti.modules.titanium.contacts.ContactsModule(context));
		// Media module
		modules.add(new ti.modules.titanium.media.MediaModule(context));
		// Platform module
		modules.add(new ti.modules.titanium.platform.PlatformModule(context));
		// JSON module
		modules.add(new ti.modules.titanium.json.JSONModule(context));
		// Android module
		modules.add(new ti.modules.titanium.android.AndroidModule(context));
		// Utils module
		modules.add(new ti.modules.titanium.utils.UtilsModule(context));
		// Map module
		modules.add(new ti.modules.titanium.map.MapModule(context));
		// UI.Clipboard module
		modules.add(new ti.modules.titanium.ui.clipboard.ClipboardModule(context));
		// Yahoo module
		modules.add(new ti.modules.titanium.yahoo.YahooModule(context));
		// Facebook module
		modules.add(new ti.modules.titanium.facebook.FacebookModule(context));
		// UI.Android module
		//modules.add(new ti.modules.titanium.ui.android.AndroidModule(context));
		// App.Properties module
		modules.add(new ti.modules.titanium.app.properties.PropertiesModule(context));
		// Network module
		modules.add(new ti.modules.titanium.network.NetworkModule(context));
		// Database module
		modules.add(new ti.modules.titanium.database.DatabaseModule(context));
		// UI.iPhone module
		modules.add(new ti.modules.titanium.ui.iphone.iPhoneModule(context));
		// UI module
		modules.add(new ti.modules.titanium.ui.UIModule(context));
		// Filesystem module
		modules.add(new ti.modules.titanium.filesystem.FilesystemModule(context));
		// UI.ActivityIndicator module
		modules.add(new ti.modules.titanium.ui.activityindicator.ActivityIndicatorModule(context));
		// Gesture module
		modules.add(new ti.modules.titanium.gesture.GestureModule(context));
	}
}
