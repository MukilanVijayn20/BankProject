package com.bank.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Repository.LoanApplicationRepository;
import com.bank.model.LoanApplication;
import com.bank.model.LoanEligibility;

@Service
public class LoanApplicationService implements ILoanApplicationService {

	@Autowired
	LoanApplicationRepository applicationRepository;
	
	@Override
	public LoanApplication saveLoanApllication(LoanApplication application) {
		return applicationRepository.save(application);
	}

	@Override
	public List<LoanApplication> getAllLoanApllication() {
		return applicationRepository.findAll();
	}

	@Override
	public List<LoanApplication> approval(int id) {
		Optional<LoanApplication> res=applicationRepository.findById(id);
		if(res.isPresent()) {
			LoanApplication l=res.get();
			l.setLoanStatus("approved");
			applicationRepository.save(l);
		}
		return applicationRepository.findAll(); 
	}

	@Override
	public List<LoanApplication> reject(int id) {
		Optional<LoanApplication> res=applicationRepository.findById(id);
		if(res.isPresent()) {
			LoanApplication l=res.get();
			l.setLoanStatus("rejected");
			applicationRepository.save(l);
		}
		return applicationRepository.findAll();
	}
}
