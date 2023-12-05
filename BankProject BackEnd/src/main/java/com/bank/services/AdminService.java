package com.bank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Repository.AdminRepository;
import com.bank.model.Admin;

@Service
public class AdminService implements IAdminService {

	@Autowired
	AdminRepository adminRepo;
	
	@Override
	public List<Admin> getAdmin() {
		return adminRepo.findAll();
	}

}
