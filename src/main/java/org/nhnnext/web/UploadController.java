package org.nhnnext.web;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UploadController {
	@RequestMapping(value="/submit", method=RequestMethod.POST)
	public String submit(String title, String article) {
		System.out.println("title: "+title+", article: "+article);
		return "submit";
	}
}
