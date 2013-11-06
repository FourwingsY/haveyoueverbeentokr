<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="/stylesheets/checkbox.css">
</head>
<body>
	<div id="category" class="category">
		<ul>
			<c:forEach items="${regions }" var="region">
				<li id="cat_${region.id}" choosen=false>${region.name }</li>
			</c:forEach>
		</ul>
		<div>
			<input type="submit" id="submit" class="button" form="cb_form" value="저장" />
			<button id="load" class="button">불러오기</button>
			<button id="reset" class="button">초기화</button>
		</div>
	</div>
		
	<form id="cb_form" action="/save" method="post">
		<div id="cb_list" class="checkbox_list">
			<c:forEach items="${regions }" var="region">
			<div id="cbgroup_${region.id }" class="cbgroup" style="display: none;">
				<c:forEach items="${region.cities}" var="city">
					<label id="label_${city.id }" regionId="${region.id }" name="${city.name}"><input type="checkbox"  id="cb_${city.id }" name="cities" value="${city.id}"/>${city.name }</label>
				</c:forEach>
			</div> 
			</c:forEach>
		</div>
	</form>
	
	<script>
		var formList = document.querySelectorAll('input[type=submit]');
		for (var i=0; i<formList.length; i++) {
			formList[i].addEventListener('click', submit, false);
		}	
		
		function submit(evt) {
			evt.preventDefault(); // prevent submit auto-send 
			
			var eleForm = evt.currentTarget.form; //form element 
			var oFormData = new FormData(eleForm);
			
			var request = new XMLHttpRequest();
			request.open("POST", eleForm.action, true);
			request.send(oFormData);
			
			request.onreadystatechange = function() {
		         if(request.readyState ==4 && request.status ==200) {
					alert("Saved well");
		         }
			}
		}
		
	</script>
</body>
</html>