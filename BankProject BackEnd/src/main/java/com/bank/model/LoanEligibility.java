package com.bank.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity

public class LoanEligibility {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	String panno;
	@Column(columnDefinition = "int default 0")
	int age;
	@Column(columnDefinition = "bigint default 00000")
	long income;
	String phoneno;
	int cibil;
	public LoanEligibility() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoanEligibility(int age, long income, String phoneno, String panno, int cibil) {
		super();
		
		this.age = age;
		this.income = income;
		this.phoneno = phoneno;
		this.panno = panno;
		this.cibil = cibil;
	}
	
	@Override
	public String toString() {
		return "LoanEligibility [panno=" + panno + ", age=" + age + ", income=" + income + ", phoneno=" + phoneno
				+ ", cibil=" + cibil + "]";
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public long getIncome() {
		return income;
	}
	public void setIncome(long income) {
		this.income = income;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getPanno() {
		return panno;
	}
	public void setPanno(String panno) {
		this.panno = panno;
	}
	public int getCibil() {
		return cibil;
	}
	public void setCibil(int cibil) {
		this.cibil = cibil;
	}
	
	
	
	
	
	

}
