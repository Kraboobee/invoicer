import { today, invNumber } from '../Invoice/Invoice';
import classes from './HeaderBlock.module.css';

export function HeaderBlock() {
  return (
    <div className={classes.details}>
      <h1>Invoice</h1>
      <div>
        <h2>Invoice</h2>
        <h3>{invNumber}</h3>
      </div>
      <div>
        <h2>Date</h2>
        <h3>{today}</h3>
      </div>
    </div>
  );
}
