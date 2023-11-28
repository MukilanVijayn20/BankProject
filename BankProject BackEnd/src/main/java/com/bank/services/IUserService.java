package com.bank.services;

import java.util.List;

import com.bank.model.User;

public interface IUserService {
	
	void PostUser(User user);
	List<User> getAllUser();

}
