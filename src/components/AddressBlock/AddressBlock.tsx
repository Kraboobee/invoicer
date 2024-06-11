import classes from './AddressBlock.module.css';
import { BankingDetailBlock } from '../BankingDetailBlock/BankingDetailBlock';
import { HeaderBlock } from '../HeaderBlock/HeaderBlock';

export function AddressBlock() {
  return (
    <div className={classes.container}>
      <div className={classes.address}>
        <p>
          Address Line 1<br />
          Address Line 2<br />
          Address Line 3<br />
          Address Line 4<br />
        </p>
        <h2>To:</h2>
        <p>
          Address Line 1<br />
          Address Line 2<br />
          Address Line 3<br />
          Address Line 4<br />
        </p>
      </div>
      <HeaderBlock />
    </div>
  );
}
