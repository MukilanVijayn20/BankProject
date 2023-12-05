package com.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.model.Admin;
import com.bank.services.IAdminService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	@Autowired
	IAdminService iAdminService;
	
	@GetMapping("/admin")
	public List<Admin> getAllUser(){
		return iAdminService.getAdmin();
	}
}
