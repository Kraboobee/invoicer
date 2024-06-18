import { Divider, Text, Paper } from '@mantine/core';
import { AddressBlock } from '../AddressBlock/AddressBlock';
import { LineItemWrapper } from '../LineItem/LineItemWrapper';
import { LogoBlock } from '../LogoBlock/LogoBlock';
import { PriceTable, total } from '../PriceTable/PriceTable';
import classes from './Invoice.module.css';

export function Invoice() {
  return (
    <Paper className={classes.page}>
      <div className={classes.header}>
        <LogoBlock />
        <h1>Invoice</h1>
      </div>
      <AddressBlock />

      <Divider my="xl" />

      <LineItemWrapper />
      <div className={classes.footer}>
        <h1>Thank you for your business!</h1>
        <h2>We look forward to working with you again</h2>
      </div>
    </Paper>
  );
}
