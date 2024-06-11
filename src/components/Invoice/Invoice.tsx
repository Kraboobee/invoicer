import { Divider, Text, Paper } from '@mantine/core';
import { AddressBlock } from '../AddressBlock/AddressBlock';
import { LogoBlock } from '../LogoBlock/LogoBlock';
import { PriceTable, total } from '../PriceTable/PriceTable';
import classes from './Invoice.module.css';

const day: Date = new Date();
const today: string = day.toLocaleDateString();
var iso: string = day.toISOString();
iso = iso.substring(2, iso.indexOf('T')).replaceAll('-', '');

const saleNumber = '02';

const invNumber = 'IN ' + iso + saleNumber;

export function Invoice() {
  return (
    <Paper className={classes.page} shadow="sm" p="xl">
      <div className={classes.header}>
        <LogoBlock />
        <h1>Invoice</h1>
      </div>
      <AddressBlock />

      <Divider my="xl" />

      <PriceTable />
      <div className={classes.footer}>
        <h1>Thank you for your business!</h1>
      </div>
    </Paper>
  );
}

export { today, invNumber };
