package com.bank.services;

import java.util.List;

import com.bank.model.Employee;

public interface IEmployeeService {
	List<Employee> getAllEmployee();
	Employee saveEmployee(Employee emp);
}
