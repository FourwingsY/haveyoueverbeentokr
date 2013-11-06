package kr.haveyoueverbeento.web;

import java.util.List;

import kr.haveyoueverbeento.repository.CityRepository;
import kr.haveyoueverbeento.repository.RegionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String main() {
		return "index";
	}
	
	@Autowired
	private CityRepository cityRepository;
	@Autowired
	private RegionRepository regionRepository;
	
	@RequestMapping("/checkbox.html")
	public String checkboxHTML(Model model) {
		
		List<City> citiesList = (List<City>) cityRepository.findAll();
		model.addAttribute("cities", citiesList);
		List<Region> regionsList = (List<Region>) regionRepository.findAll();
		model.addAttribute("regions", regionsList);
		return "checkbox";
	}

}
