package com.example.organDonationBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.organDonationBackend.model.*;
import com.example.organDonationBackend.repository.*;

@RestController
public class Controller {
	
	@Autowired
    OrganRepository or;
	
	@PostMapping("/savedetails")
	public String insert(@RequestBody Donor donor)
	{
		or.save(donor);
		return "Your records has been added";
	}
	
	@GetMapping("/showSavedDetails")
	public List<Donor> donor()
	{
		 return or.findAll();		
	}
	
	@PutMapping("/putDetails/{id}")
	public Donor updateDetails(@RequestBody Donor d)
	{
		return or.save(d);
	}
	
	
	@DeleteMapping("/deletebyId/{id}")
	public String donorDeletebyId(@PathVariable("donorId") long donorId)
	{
		or.deleteById(donorId);
		return "Your records has been deleted for the donor id:"+donorId+".";
	}
	
//	@GetMapping("/getbyid/{donorId}")
//	List<Donor> getByDonorId(@PathVariable ("donorId") long donorId)
//	{
//		return or.getByDonorId(donorId);
//	}
//	@DeleteMapping("/deleteAll")
//	public String donorDelete()
//	{
//		or.deleteAll();
//		return "Your records has been deleted";
//	}
	

}
