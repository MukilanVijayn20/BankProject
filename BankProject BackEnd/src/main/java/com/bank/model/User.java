package com.bank.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String email;
	private String password;
	private String FullName;
	private String MobileNumber;
	private int age;
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
		return FullName;
	}
	public void setFullName(String fullName) {
		FullName = fullName;
	}
	public String getMobileNumber() {
		return MobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		MobileNumber = mobileNumber;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "User [email=" + email + ", password=" + password + ", FullName=" + FullName + ", MobileNumber="
				+ MobileNumber + ", age=" + age + "]";
	}
	public User(int id, String email, String password, String fullName, String mobileNumber, int age) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		FullName = fullName;
		MobileNumber = mobileNumber;
		this.age = age;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
