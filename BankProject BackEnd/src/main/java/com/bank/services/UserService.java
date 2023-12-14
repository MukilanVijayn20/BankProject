package com.bank.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Repository.UserRepository;
import com.bank.model.LoanApplication;
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

	@Override
	public User addLoanApplication(LoanApplication application, int id) {
		Optional<User> u=userRepo.findById(id);
		if(u.isEmpty()) {
			return null;
		}
		User oldUser=u.get();
		oldUser.getLoanApplication().add(application);
		return userRepo.save(oldUser);
	}

	@Override
	public User getByUserId(int id) {
		Optional<User> u=userRepo.findById(id);
		if(u.isEmpty()) {
			return null;
		}
		User user=u.get();
		return user;
	}

}
