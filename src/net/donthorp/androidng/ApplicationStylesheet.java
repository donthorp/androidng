/**
 * Appcelerator Titanium
 * WARNING: This is a generated file.  Do not modify.
 */
package net.donthorp.androidng;

import java.util.HashMap;
import org.appcelerator.titanium.ITiStylesheet;

public class ApplicationStylesheet implements ITiStylesheet 
{
	private static HashMap<String,HashMap<String,HashMap<String,String>>> classesMap;
	private static HashMap<String,HashMap<String,HashMap<String,String>>> idsMap;
	private static HashMap<String,HashMap<String,HashMap<String,HashMap<String,String>>>> classesDensityMap;
	private static HashMap<String,HashMap<String,HashMap<String,HashMap<String,String>>>> idsDensityMap;

	public ApplicationStylesheet()
	{
		classesMap = new HashMap<String,HashMap<String,HashMap<String,String>>>();
		idsMap = new HashMap<String,HashMap<String,HashMap<String,String>>>();
		classesDensityMap = new HashMap<String,HashMap<String,HashMap<String,HashMap<String,String>>>>();
		idsDensityMap = new HashMap<String,HashMap<String,HashMap<String,HashMap<String,String>>>>();
		
		HashMap<String,HashMap<String,String>> m1282944562434445 = new HashMap<String,HashMap<String,String>>();
		classesMap.put("app",m1282944562434445);


		HashMap<String,HashMap<String,String>> m1282944562434497 = new HashMap<String,HashMap<String,String>>();
		HashMap<String,String> m1282944562434505 = new HashMap<String,String>();
		m1282944562434497.put("label1",m1282944562434505);
		m1282944562434505.put("color","white");
		m1282944562434505.put("text","Hello");
		m1282944562434505.put("backgroundColor","blue");
		m1282944562434505.put("height","50");
		HashMap<String,String> m1282944562434533 = new HashMap<String,String>();
		m1282944562434497.put("win1",m1282944562434533);
		m1282944562434533.put("backgroundColor","gray");
		idsMap.put("app",m1282944562434497);


		HashMap<String,HashMap<String,String>> m1282944562434552 = new HashMap<String,HashMap<String,String>>();


		HashMap<String,HashMap<String,String>> m1282944562434567 = new HashMap<String,HashMap<String,String>>();


	}

	public HashMap<String,String> getStylesheet(String objectId, String type, String density, String basename)
	{
		HashMap<String,String> result = new HashMap<String,String>();
		if (classesMap!=null && classesMap.containsKey(basename))
		{
			HashMap<String,String> r = classesMap.get(basename).get(type);
			if (r!=null) result.putAll(r);
		}
		if (classesDensityMap!=null && classesDensityMap.containsKey(basename))
		{
			HashMap<String,HashMap<String,String>> r = classesDensityMap.get(basename).get(density);
			if (r!=null && r.containsKey(type)) 
			{
				HashMap<String,String> r2 = r.get(type);
				if (r2!=null) result.putAll(r2);
			}
		}
		if (idsMap!=null && idsMap.containsKey(basename))
		{
			HashMap<String,String> r = idsMap.get(basename).get(objectId);
			if (r!=null) result.putAll(r);
		}
		if (idsDensityMap!=null && idsDensityMap.containsKey(basename))
		{
			HashMap<String,HashMap<String,String>> r = idsDensityMap.get(basename).get(density);
			if (r!=null && r.containsKey(objectId)) 
			{
				HashMap<String,String> r2 = r.get(objectId);
				if (r2!=null) result.putAll(r2);
			}
		}
		return result;
	}
}

