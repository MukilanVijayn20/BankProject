package com.bank.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String fullName;
	private String mobileNumber;
	private String email;
	private String password;
	
	@OneToMany(cascade = CascadeType.ALL)
	List<LoanApplication> loanApplication;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public List<LoanApplication> getLoanApplication() {
		return loanApplication;
	}
	public void setLoanApplication(List<LoanApplication> loanApplication) {
		this.loanApplication = loanApplication;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", fullName=" + fullName + ", mobileNumber=" + mobileNumber + ", email=" + email
				+ ", password=" + password + ", loanApplication=" + loanApplication + "]";
	}
	public User(String fullName, String mobileNumber, String email, String password,
			List<LoanApplication> loanApplication) {
		super();
		this.fullName = fullName;
		this.mobileNumber = mobileNumber;
		this.email = email;
		this.password = password;
		this.loanApplication = loanApplication;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
