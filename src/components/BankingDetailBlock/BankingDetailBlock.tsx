import classes from './BankingDetailBlock.module.css';
import { invNumber } from '../Invoice/Invoice';

export function BankingDetailBlock() {
  return (
    <div className={classes.details}>
      <h2>Banking Details</h2>
      <p>Bank Name:</p>
      <p>Account Holder:</p>
      <p>Account Number:</p>
      <p>Payment Reference: {invNumber}</p>
      <p>SWIFT Code:</p>
    </div>
  );
}
