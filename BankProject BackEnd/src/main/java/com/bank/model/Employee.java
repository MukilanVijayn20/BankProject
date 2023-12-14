package com.bank.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Employee {

	@Id
	@GeneratedValue(generator = "emp_gen",strategy = GenerationType.AUTO)
	@SequenceGenerator(name = "emp_gen",sequenceName = "emp_seq",initialValue = 5001,allocationSize = 1)
	private int id;
	private String empEmail;
	private String empPassword;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmpEmail() {
		return empEmail;
	}
	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
	}
	public String getEmpPassword() {
		return empPassword;
	}
	public void setEmpPassword(String empPassword) {
		this.empPassword = empPassword;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", empEmail=" + empEmail + ", empPassword=" + empPassword + "]";
	}
	public Employee(String empEmail, String empPassword) {
		super();
		this.empEmail = empEmail;
		this.empPassword = empPassword;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
