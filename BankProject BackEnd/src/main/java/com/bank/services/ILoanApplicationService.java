package com.bank.services;

import java.util.List;

import com.bank.model.LoanApplication;

public interface ILoanApplicationService {

	LoanApplication saveLoanApllication(LoanApplication application);
	List<LoanApplication> getAllLoanApllication();
	List<LoanApplication> approval(int id);
	List<LoanApplication> reject(int id);
}
