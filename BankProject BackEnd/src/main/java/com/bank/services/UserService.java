package com.bank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Repository.UserRepository;
import com.bank.model.User;

@Service
public class UserService implements IUserService {
	
	@Autowired
	UserRepository userRepo;

	@Override
	public void PostUser(User user) {
		// TODO Auto-generated method stub
		userRepo.save(user);
		
	}

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}

}
