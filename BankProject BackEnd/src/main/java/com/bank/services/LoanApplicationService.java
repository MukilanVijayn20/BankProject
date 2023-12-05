package com.bank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Repository.LoanApplicationRepository;
import com.bank.model.LoanApplication;

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

}
