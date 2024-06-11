import { useState } from 'react';
import { BankingDetailBlock } from '../BankingDetailBlock/BankingDetailBlock';
import classes from './HeaderBlock.module.css';

const day: Date = new Date();
const today: string = day.toLocaleDateString();

export function HeaderBlock() {
  const [saleNumber, setSalenumber] = useState(1);

  const isoString: string = day.toISOString();
  const invDate = isoString.substring(2, isoString.indexOf('T')).replaceAll('-', '');
  const invNumber = 'IN ' + invDate + saleNumber;

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setSalenumber(function (current) {
      return (current += 1);
    });
  }

  function decrement() {
    setSalenumber(function (current) {
      if (current > 1) {
        return (current -= 1);
      } else {
        return (current = 1);
      }
    });
  }

  return (
    <div className={classes.details}>
      <div>
        <h2>Invoice</h2>
        <h3 className={classes.invoiceNumber}>{invNumber}</h3>
        <button onClick={decrement}>Minus</button>
        <button onClick={increment}>Plus</button>
      </div>
      <div>
        <h2>Date</h2>
        <h3>{today}</h3>
      </div>
      <BankingDetailBlock invNumber={invNumber} />
    </div>
  );
}
