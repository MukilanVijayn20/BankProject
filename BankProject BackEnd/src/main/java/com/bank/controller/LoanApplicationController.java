package com.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.model.LoanApplication;
import com.bank.services.ILoanApplicationService;

@RestController
@RequestMapping("/loan-app")
@CrossOrigin(origins = "http://localhost:4200")
public class LoanApplicationController {

	
	@Autowired
	ILoanApplicationService applicationService;
	
	@GetMapping("/allLoan")
	public List<LoanApplication> getAllLoanApplication(){
		return applicationService.getAllLoanApllication();
	}
	
	@PostMapping("/allLoan")
	public LoanApplication saveLoanApplication(@RequestBody LoanApplication application){
		return applicationService.saveLoanApllication(application);
	}
}
