package com.bank;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bank.model.LoanApplication;
import com.bank.services.ILoanApplicationService;


@SpringBootApplication
public class BankProjectApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BankProjectApplication.class, args);
	}
	
	@Autowired
	ILoanApplicationService applicationService;
	
	@Override
	public void run(String... args) throws Exception {
		LocalDate date=LocalDate.of(2001, 07, 16);
		LoanApplication application=new LoanApplication("arul", "kumaran", "male", date, "9156324887", "ABC7890T", "kumaranarul080@gmail.com", "chennai", 600001, 500000, 2, 30000, "pending");
//		applicationService.saveLoanApllication(application);
	}

}
