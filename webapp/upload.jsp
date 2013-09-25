<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="/submit" method="post" enctype="multipart/form-data">
	<label>사진의 제목은?</label>
	<input type="text" name="title" size=100>
	<br>
	<input type="image" width=640 height=60 value="미리보기">
	<br>
	<input type="file" name="image">
	<br>
	<textarea name="article" rows="5" cols="90">사진의 설명을 입력하세요</textarea>
	<input type="submit" value="업로드">
</form>
</body>
</html>