package com.bank.services;

import java.util.List;

import com.bank.model.LoanApplication;
import com.bank.model.User;

public interface IUserService {
	
	void PostUser(User user);
	List<User> getAllUser();
	User addLoanApplication(LoanApplication application,int id);
	User getByUserId(int id);
}
