import { today, invNumber } from '../Invoice/Invoice';
import { BankingDetailBlock } from '../BankingDetailBlock/BankingDetailBlock';
import classes from './HeaderBlock.module.css';

export function HeaderBlock() {
  return (
    <div className={classes.details}>
      <div>
        <h2>Invoice</h2>
        <h3>{invNumber}</h3>
      </div>
      <div>
        <h2>Date</h2>
        <h3>{today}</h3>
      </div>
      <BankingDetailBlock />
    </div>
  );
}
