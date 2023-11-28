package com.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bank.model.User;
import com.bank.services.IUserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	IUserService iUserService;
	
	@GetMapping("/user")
	public List<User> getAllUser(){
		return iUserService.getAllUser();
	}
	
	@PostMapping("/user")
	public void postUser(@RequestBody User user) {
		iUserService.PostUser(user);
	}
}
