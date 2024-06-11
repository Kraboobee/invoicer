import classes from './AddressBlock.module.css';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { HeaderBlock } from '../HeaderBlock/HeaderBlock';

export function AddressBlock() {
  return (
    <div className={classes.container}>
      <div className={classes.address}>
        <EditTextarea
          name="Company Address"
          rows={4}
          style={{ paddingTop: 0, paddingRight: 100 }}
          placeholder="Company Address"
        />
        <h2>To:</h2>
        <EditTextarea
          name="Client Address"
          rows={4}
          style={{ paddingTop: 0, paddingRight: 100 }}
          placeholder="Client Address"
        />
      </div>
      <HeaderBlock />
    </div>
  );
}
