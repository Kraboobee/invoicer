import classes from './BankingDetailBlock.module.css';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export function BankingDetailBlock({ invNumber }: { invNumber: string }) {
  return (
    <div>
      <h2>Banking Details</h2>
      <div className={classes.container}>
        <p>
          <label className={classes.headings}>Bank Name</label>
        </p>
        <EditText name="bankName" placeholder="Sample Text" className={classes.details} />
      </div>
      <div className={classes.container}>
        <p>
          <label className={classes.headings}>Account Holder</label>
        </p>
        <EditText name="accountHolder" placeholder="Sample Text" />
      </div>
      <div className={classes.container}>
        <p>
          <label className={classes.headings}>Account Number</label>
        </p>
        <EditText name="accountNumber" placeholder="Sample Text" />
      </div>
      <div className={classes.container}>
        <p>
          <label className={classes.headings}>Payment Reference</label>
        </p>
        <p>{invNumber}</p>
      </div>
      <div className={classes.container}>
        <p>
          <label className={classes.headings}>SWIFT Code</label>
        </p>
        <EditText name="swift" placeholder="Sample Text" />
      </div>
    </div>
  );
}
