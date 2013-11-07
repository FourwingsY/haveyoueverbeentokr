//<![CDATA[
	function loadDocs() {
		map = document.getElementById("map").getSVGDocument();
		zoom = document.getElementById("zoom").getSVGDocument();
		cbx = document.getElementById("checkboxlist").contentDocument;
	}
	function setOptions() {
		setSVGOption();
		setCheckboxOption();
		setCategotyOption();
		setButtonsOption();
	}

	function setSVGOption() {
		var mapCityList = map.getElementById("cities").getElementsByTagName("path");

		for (var i = 0; i < mapCityList.length; i++) {
			mapCityList[i].onclick = cityClick;
			mapCityList[i].onmouseover = cityOver;
			mapCityList[i].onmouseout = cityOut;
			mapCityList[i].choosen = "false";
		}
		var zoomCityList = zoom.getElementById("zoomcities").getElementsByTagName("path");

		for (var i = 0; i < zoomCityList.length; i++) {
			zoomCityList[i].onclick = cityClick;
			zoomCityList[i].onmouseover = cityOver;
			zoomCityList[i].onmouseout = cityOut;
			zoomCityList[i].choosen = "false";
		}
	}
	function setCheckboxOption() {
		var cbxCheckboxList = cbx.getElementById("cb_list").getElementsByTagName("input");

		for (var i = 0; i < cbxCheckboxList.length; i++) {
			cbxCheckboxList[i].onclick = cityClick;
			cbxCheckboxList[i].onmouseover = cityOver;
			cbxCheckboxList[i].onmouseout = cityOut;

			var label = cbxCheckboxList[i].parentNode;
			label.onmouseover = cityOver;
			label.onmouseout = cityOut;
		}
	}
	function setCategotyOption() {
		var cbxCategoryList = cbx.getElementById("category").getElementsByTagName("li");

		for (var i = 0; i < cbxCategoryList.length; i++) {
			cbxCategoryList[i].onmouseover = categoryOver;
		}
	}

	function cbxInitialize() {
		cbxCatInit();
		cbx.getElementById("cbgroup_0").style.display = "block";
	}
	function cbxCatInit() {
		var cbGroupList = cbx.getElementsByClassName("cbgroup");

		for(var i = 0;i<cbGroupList.length;i++)
			cbGroupList[i].style.display="none";

		var cbxCategoryList = cbx.getElementById("category").getElementsByTagName("li");

		for (var i=0 ; i<cbxCategoryList.length; i++) {
			cbxCategoryList[i].style.backgroundColor = "transparent";
		}

		svgRegionInit();
	}
	function svgRegionInit() {
		var mapRegionList = map.getElementById("regions").getElementsByTagName("path");
		for (var i = 0; i < mapRegionList.length; i++) {
			mapRegionList[i].setAttribute("fill-opacity", 0);
		}
		var zoomRegionList = zoom.getElementById("zoomregions").getElementsByTagName("path");
		for (var i = 0; i < zoomRegionList.length; i++) {
			zoomRegionList[i].setAttribute("fill-opacity", 0);
		}
	}

	function categoryOver(evt) {
		var evtCategory = evt.target;
		var evtRegionId = evtCategory.id.split("_")[1];
		var evtRegion = map.getElementById("region_"+evtRegionId);
		var evtZoomRegion = zoom.getElementById("zoomregion_"+evtRegionId);
		var evtCheckboxGroup = cbx.getElementById("cbgroup_"+evtRegionId);
		
		cbxCatInit();
		evtCheckboxGroup.style.display = "block";
		evtCategory.style.backgroundColor = "beige";
		evtRegion.setAttribute("fill-opacity", 1);
		evtZoomRegion.setAttribute("fill-opacity", 1);
	}

	function cityClick(evt) {
		// whatever target was label or checkbox or path,
		// it's id is same.
		var evtCityId = evt.target.id.split("_")[1];

		var checkboxId = "cb_" + evtCityId;
		var checkbox = cbx.getElementById(checkboxId);
		var label = checkbox.parentNode;

		var pathId = "city_" + evtCityId;
		var path = map.getElementById(pathId);
		var zoomPath = zoom.getElementById("zoom"+pathId);

		if (path.getAttribute("choosen") == "true") {
			path.setAttribute("choosen", "false");
			zoomPath.setAttribute("choosen", "false");
			checkbox.checked = false;
			label.style.backgroundColor = "yellow";
			path.setAttribute("fill","yellow");
			zoomPath.setAttribute("fill","yellow");
		}
		else {
			path.setAttribute("choosen", "true");
			zoomPath.setAttribute("choosen", "true");
			checkbox.checked = true;
			label.style.backgroundColor = "orange";
			path.setAttribute("fill-opacity","1");
			path.setAttribute("fill","orange");
			zoomPath.setAttribute("fill-opacity","1");
			zoomPath.setAttribute("fill","orange");
		}

//		var areaText = map.getElementById("totalarea").firstChild;
//		areaText.nodeValue = getVisitedAreaRatio().toString()+"%";
	}
	function cityOver(evt) {
		var evtCityId = evt.target.id.split("_")[1];

		var checkboxId = "cb_" + evtCityId;
		var checkbox = cbx.getElementById(checkboxId);
		var label = checkbox.parentNode;

		var pathId = "city_" + evtCityId;
		var path = map.getElementById(pathId);
		var zoomPath = zoom.getElementById("zoom"+pathId);

		var categoryId = "cat_"+ path.getAttribute("region");
		var category = cbx.getElementById(categoryId);

		var name = label.getAttribute("name");
		var text = map.getElementById("location").firstChild;
		text.nodeValue = name;

		if (checkbox.checked) {
			path.setAttribute("fill","orange");
			zoomPath.setAttribute("fill","orange");
			checkbox.parentNode.style.backgroundColor = "orange";
		} else {
			path.setAttribute("fill-opacity","1");
			zoomPath.setAttribute("fill-opacity","1");
			checkbox.parentNode.style.backgroundColor = "yellow";
		}

		if (category.style.backgroundColor == "transparent") {
			var e = document.createEvent("MouseEvents");
			e.initMouseEvent("mouseover", 
				true, true, window, 0, 
				0, 0, 0, 0, 
				false, false, false, false, 
				0, null);
			category.dispatchEvent(e);
		}
	}
	function cityOut(evt) {
		var evtCityId = evt.target.id.split("_")[1];

		var checkboxId = "cb_" + evtCityId;
		var checkbox = cbx.getElementById(checkboxId);

		var pathId = "city_" + evtCityId;
		var path = map.getElementById(pathId);
		var zoomPath = zoom.getElementById("zoom"+pathId);

		if (checkbox.checked) {
			path.setAttribute("fill","rgb(255,50,50)");
			zoomPath.setAttribute("fill","rgb(255,50,50)");
			checkbox.parentNode.style.backgroundColor = "rgb(255,50,50)";
		} else {
			path.setAttribute("fill-opacity","0");
			zoomPath.setAttribute("fill-opacity","0");
			checkbox.parentNode.style.backgroundColor = "transparent";
		}
	}
	
	function setButtonsOption() {
		cbx.getElementById("load").onclick = reload;
		cbx.getElementById("reset").onclick = reset;
	}
	function reload() {
		window.location.href="/load";
	}
	function reset() {
		window.location.href="/";
	}
//	function getVisitedAreaRatio() {
//		var TOTAL_AREA = 99959.63;
//		var svgCityList = map.getElementById("cities").getElementsByTagName("path");
//		var areaSum = 0;
//		for (var i = 0; i < svgCityList.length; i++) {
//			if (svgCityList[i].getAttribute("choosen") == "true") {
//				areaSum += Number(svgCityList[i].getAttribute("area"));
//			}
//		}
//		return (areaSum * 100/TOTAL_AREA).toFixed(2);
//	}