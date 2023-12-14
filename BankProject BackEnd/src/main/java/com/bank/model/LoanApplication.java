package com.bank.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class LoanApplication {

	@Id
	@GeneratedValue(generator = "app_gen",strategy = GenerationType.AUTO)
	@SequenceGenerator(name="app_gen", sequenceName = "app_seq",initialValue = 1001,allocationSize = 1)
	private int id;
	private String fullName;
	private String gender;
	private LocalDate dateOfBirth;
	private String mobile;
	private String pancard;
	private String email;
	private String city;
	private int pincode;
	private double loanAmount;
	private double loanTenure;
	private double monthlyIncome;
	private String loanStatus;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getPancard() {
		return pancard;
	}
	public void setPancard(String pancard) {
		this.pancard = pancard;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public double getLoanAmount() {
		return loanAmount;
	}
	public void setLoanAmount(double loanAmount) {
		this.loanAmount = loanAmount;
	}
	public double getLoanTenure() {
		return loanTenure;
	}
	public void setLoanTenure(double loanTenure) {
		this.loanTenure = loanTenure;
	}
	public double getMonthlyIncome() {
		return monthlyIncome;
	}
	public void setMonthlyIncome(double monthlyIncome) {
		this.monthlyIncome = monthlyIncome;
	}
	public String getLoanStatus() {
		return loanStatus;
	}
	public void setLoanStatus(String loanStatus) {
		this.loanStatus = loanStatus;
	}
	public LoanApplication(String fullName, String gender, LocalDate dateOfBirth, String mobile, String pancard,
			String email, String city, int pincode, double loanAmount, double loanTenure, double monthlyIncome,
			String loanStatus) {
		super();
		this.fullName = fullName;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.mobile = mobile;
		this.pancard = pancard;
		this.email = email;
		this.city = city;
		this.pincode = pincode;
		this.loanAmount = loanAmount;
		this.loanTenure = loanTenure;
		this.monthlyIncome = monthlyIncome;
		this.loanStatus = loanStatus;
	}
	public LoanApplication() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "LoanApplication [id=" + id + ", fullName=" + fullName + ", gender=" + gender + ", dateOfBirth="
				+ dateOfBirth + ", mobile=" + mobile + ", pancard=" + pancard + ", email=" + email + ", city=" + city
				+ ", pincode=" + pincode + ", loanAmount=" + loanAmount + ", loanTenure=" + loanTenure
				+ ", monthlyIncome=" + monthlyIncome + ", loanStatus=" + loanStatus + "]";
	}
	
}