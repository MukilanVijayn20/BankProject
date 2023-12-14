import { personalLoan } from './personalLoan.model';

export class User {
  id!: number;
  email!: string;
  password!: string;
  fullName!: string;
  mobileNumber!: string;
  loanApplication: personalLoan[] = [];
}
