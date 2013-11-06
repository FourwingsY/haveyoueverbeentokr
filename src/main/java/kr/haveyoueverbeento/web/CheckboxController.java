package kr.haveyoueverbeento.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import kr.haveyoueverbeento.repository.RecordRepository;
import kr.haveyoueverbeento.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class CheckboxController {
	@Autowired
	private RecordRepository RR;
	@Autowired
	private UserRepository UR;
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public @ResponseBody String[] submit(String[] cities, Model model, HttpServletRequest request) {
		// String[] cities = request.getParameterValues("cities");
		
		// get user info
		String userIp = getIp(request);
		User user = UR.findByUserIp(userIp);
		
		if (user == null) {
			user = new User();
			user.setUserIp(userIp);
			model.addAttribute("user", user);
			user = UR.save(user);
		} else {
			// RESET EXISTING RECORD
			List<Record> records = RR.findByUserId(user.getUserId());
			RR.delete(records);	
		}
		
		// DEBUGGING CODE
		System.out.println("* USER ID : " + user.getUserId());
		System.out.println("* USER IP : " + user.getUserIp());
		
		if (cities == null)
			return null;
		
		// save userID - cityID to record Repository
		Record record = new Record();
		for (String cityId : cities) {
			// DEBUGGING CODE
			System.out.println("** "+cityId);
			record.setUserId(user.getUserId());
			record.setCityId(Integer.parseInt(cityId));
			model.addAttribute("record", record);
			RR.save(record);
		}
		
		return cities;
	}
	
	@RequestMapping("/load")
	public String reload(Model model, HttpServletRequest request) {
		String userIp = getIp(request);
		long userId = UR.findByUserIp(userIp).getUserId();
		if (UR.exists(userId)) {
			List<Record> records = RR.findByUserId(userId);
			if (records.size() < 1)
				return "redirect:/";
			model.addAttribute("records", records);
			return "loaded";
		}
		return "/";
	}
	
	@RequestMapping("/reset")
	public String reset(Model model, HttpServletRequest request) {
		System.out.println("reset!!!!!!");
		String userIp = getIp(request);
		User user = UR.findByUserIp(userIp);
		if (user == null)
			return "redirect:/";
		long userId = user.getUserId();
		List<Record> records = RR.findByUserId(userId);
		RR.delete(records);	
		return "redirect:/";
	}
	
	private String getIp(HttpServletRequest request) {
		String userIp = request.getHeader("X-FORWARDED-FOR");
		if (userIp == null) {
			userIp = request.getRemoteAddr();
		}
		return userIp;
	}
	/*
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String submit(String[] cities, Model model, HttpServletRequest request) {
		// String[] cities = request.getParameterValues("cities");
		
		// get user's IP
		String userIp = request.getHeader("X-FORWARDED-FOR");
		if (userIp == null) {
			userIp = request.getRemoteAddr();
		}
		
		// get user id
		User user = UR.findByUserIp(userIp);
		
		if (user == null) {
			user = new User();
			user.setUserIp(userIp);
			model.addAttribute("user", user);
			user = UR.save(user);
		}
		System.out.println("* USER ID : " + user.getUserId());
		System.out.println("* USER IP : " + user.getUserIp());
		
		
		// RESET EXISTING RECORD
		List<Record> records = RR.findByUserId(user.getUserId());
		RR.delete(records);
		
		// save userID - cityID to record Repository
		Record record = new Record();
		for (String cityId : cities) {
			System.out.println("** "+cityId);
			record.setUserId(user.getUserId());
			record.setCityId(Integer.parseInt(cityId));
			model.addAttribute("record", record);
			RR.save(record);
		}
		
		return "redirect:/";
	}
	*/
}
