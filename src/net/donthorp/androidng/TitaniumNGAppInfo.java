package net.donthorp.androidng;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

public class TitaniumNGAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";

	public TitaniumNGAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();

		properties.setBool("ti.android.debug", true);

		properties.setString("ti.android.google.map.api.key", "0Rq5tT4bUSXduTPp-FltklB_7oi4E7YRNic20sg");
		properties.setBool("ti.android.root.reappears.restart", true);
	}

	public String getId() {
		return "net.donthorp.androidng";
	}

	public String getName() {
		return "TitaniumNG";
	}

	public String getVersion() {
		return "1.0";
	}

	public String getPublisher() {
		return "dthorp";
	}

	public String getUrl() {
		return "http://donthorp.net";
	}

	public String getCopyright() {
		return "2010 by Don Thorp";
	}

	public String getDescription() {
		return "No description provided";
	}

	public String getIcon() {
		return "default_app_logo.png";
	}

	public boolean isAnalyticsEnabled() {
		return true;
	}

	public String getGUID() {
		return "77773f33fd1f4e95a06d2d217170866d";
	}

	@Override
	public boolean isFullscreen() {
		return false;
	}

	@Override
	public boolean isNavBarHidden() {
		return false;
	}
}
