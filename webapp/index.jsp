<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" type="text/css" href="/stylesheets/index.css">
		<script type="text/javascript" src="/javascripts/script.js"></script>
		<script type="text/javascript">
			function init() {
				document.getElementById("wrapper").style.display = "none";
				setBannerClickable();
				resize();
			}
			function setBannerClickable() {
				var banner = document.getElementsByClassName("banner")[0];

				banner.onclick = loadElements;
			}
			function doMove() {
				var bContainer = document.getElementById("banner_container");
				
				if (bContainer.offsetHeight < 120)
					return;

				// reduce bContainer height
				bContainer.style.height = (bContainer.offsetHeight-10) + 'px';
				resize();
				setTimeout(doMove, 20);
					
			}
			function loadElements() {
				doMove();
				var wrapper = document.getElementById("wrapper");
				wrapper.style.display = "block";
				setTimeout(function() {loadDocs();
					setOptions();
					cbxInitialize();}, 100);
			}
			function resize() {
				var banner = document.getElementsByClassName("banner")[0];
				var bContainer = document.getElementById("banner_container");
				// repositioning
				var y = bContainer.offsetHeight / 2 - banner.offsetHeight / 2 ;
				banner.style.top = y.toString() + "px";

				// font resizing
				banner.style.width = "99%";
				if (banner.offsetWidth < 820)
					banner.style.fontSize = "10px";
				else banner.style.fontSize = "20px";
			}

			window.onload = init;
			window.onresize = resize;
		</script>
	</head>

	
	<!--[if IE]>
		<style type="text/css">
		body {
			filter:blur(add=false, direction=270 strength=10);
			-ms-filter:blur(add=false, direction=270 strength=10);
		}
		</style>
		<h1 style="color:#FF0000; padding:0.5em; font-size:50pt !important;">Please, Don't Use Internet Explorer</h1>
	<![endif]-->
<body>
	<div id="banner_container">
	<div class="banner">
		<h1 align="center">Have You ever been to... KOREA?</h1>
	</div>
	</div>
	<div id="wrapper">
		<object id="map" type="image/svg+xml" data="/images/map.svg" ></object>
		<object id="zoom" type="image/svg+xml" data="/images/zoom.svg" ></object>
		<object id="checkboxlist" type="text/html" data="/checkbox.html" ></object>
	</div>
</body>
</html>
