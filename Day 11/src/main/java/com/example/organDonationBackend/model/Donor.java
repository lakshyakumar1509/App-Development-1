package com.example.organDonationBackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;




@Entity
@Table(name="donorrtable")
public class Donor {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY) 
	private long donorId;
	
	@Column(name="donor_Name")
    private String donorName;
	
	@Column(name="emailId")
    private String emailId;
	
	
	@Column(name="age")
    private int age;
	
	@Column(name="bloodGroup")
    private String bloodGroup;
	
	@Column(name="phone_No")
	private long phoneNo;	
	
	 
	public Donor() {
		super();
	}


	public Donor(long donorId, String donorName, String emailId, int age, String bloodGroup, long phoneNo) {
		super();
		this.donorId = donorId;
		this.donorName = donorName;
		this.emailId = emailId;
		this.age = age;
		this.bloodGroup = bloodGroup;
		this.phoneNo = phoneNo;
	}
	

}