package com.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bank.model.LoanApplication;
import com.bank.model.LoanEligibility;
import com.bank.model.User;
import com.bank.services.IUserService;
import com.bank.services.LoanEligibilityService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	IUserService iUserService;
	
	@Autowired
	LoanEligibilityService les;
	
	@GetMapping("/user")
	public List<User> getAllUser(){
		return iUserService.getAllUser();
	}
	
	@PostMapping("/user")
	public void postUser(@RequestBody User user) {
		iUserService.PostUser(user);
	}
	
	@GetMapping("/eligibility/{panno}")
	public LoanEligibility testElig(@PathVariable String panno) {
		return les.testEligibility(panno);
		
	}
	
	@PostMapping("/addLoan/{id}")
	public User saveLoanApplication(@RequestBody LoanApplication application,@PathVariable int id) {
		return iUserService.addLoanApplication(application, id);
	}
	
	@GetMapping("/user/id/{id}")
	public User getById(@PathVariable int id) {
		return iUserService.getByUserId(id);
	}
}
