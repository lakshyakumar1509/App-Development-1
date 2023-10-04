package com.example.organDonationBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.organDonationBackend.model.*;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;




@Repository
public interface OrganRepository extends JpaRepository<Donor, Long> {
//	@Query("SELECT t FROM Donor t WHERE t.donorId=:a")
//	public List<Donor> getByDonorId(@Param("a") long donorId);

}