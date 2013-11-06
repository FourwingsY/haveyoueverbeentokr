package kr.haveyoueverbeento.web;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Region {
	@Id
	private int id;
	@Column
	private String name;
	
	@OneToMany(mappedBy = "region", fetch = FetchType.EAGER)
	private List<City> cities;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public List<City> getCities() {
		return this.cities;
	}
}
