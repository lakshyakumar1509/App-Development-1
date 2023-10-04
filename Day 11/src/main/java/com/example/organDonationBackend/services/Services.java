package com.example.organDonationBackend.services;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.organDonationBackend.model.Donor;
import com.example.organDonationBackend.repository.OrganRepository;

@Service

public class Services {
	@Autowired
	OrganRepository or;
	
	
//	public List<Donor> getByDonorId(long donorId)
//	{
//		return or.getById(donorId);
//	}

}