package com.example.organDonationBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.organDonationBackend.model.*;

@Repository
public interface OrganRepository extends JpaRepository<Donor, Long>{


}
