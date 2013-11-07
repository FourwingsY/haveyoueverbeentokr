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
				loadDocs();
				setOptions();
				cbxInitialize();
			}
			window.onload=init;
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
	
	<div class="banner">
		<h1 align="center">한국, 어디까지 가봤니?</h1>
	</div>
	<div class="wrapper">
		<object id="map" type="image/svg+xml" data="/images/map.svg" ></object>
		<object id="zoom" type="image/svg+xml" data="/images/zoom.svg" ></object>
		<object id="checkboxlist" type="text/html" data="/checkbox.html" ></object>
	</div>
</body>
</html>
