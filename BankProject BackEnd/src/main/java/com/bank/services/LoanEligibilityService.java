package com.bank.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Repository.LoanEligibilityRepository;
import com.bank.model.LoanEligibility;

@Service
public class LoanEligibilityService {
	
	@Autowired
	LoanEligibilityRepository eligrepo;
	
	public LoanEligibility testEligibility(String le) {
		
		Optional<LoanEligibility> res=eligrepo.findById(le);
			LoanEligibility l=res.get();
			return l;
	}
		
	
}
			

