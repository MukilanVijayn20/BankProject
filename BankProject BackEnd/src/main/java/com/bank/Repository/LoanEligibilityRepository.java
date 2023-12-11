package com.bank.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.model.LoanEligibility;

@Repository
public interface LoanEligibilityRepository extends JpaRepository<LoanEligibility, String> {

}
