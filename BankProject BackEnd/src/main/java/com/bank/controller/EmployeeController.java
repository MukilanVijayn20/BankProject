package com.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.model.Employee;
import com.bank.services.IEmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api-emp")
public class EmployeeController {

	@Autowired
	IEmployeeService employeeService;
	
	
	@GetMapping("/getAll")
	public List<Employee> getAllEmployee(){
		return employeeService.getAllEmployee();
	}
	
	@PostMapping("/save")
	public Employee postUser(@RequestBody Employee emp) {
		return employeeService.saveEmployee(emp);
	}
}
