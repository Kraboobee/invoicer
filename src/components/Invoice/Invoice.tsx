import { Divider, Text, Paper } from '@mantine/core';
import { HeaderBlock } from '../HeaderBlock/HeaderBlock';
import { LogoBlock } from '../LogoBlock/LogoBlock';
import { PriceTable, total } from '../PriceTable/PriceTable';
import classes from './Invoice.module.css';

const day: Date = new Date();
const today: string = day.toDateString();
var iso: string = day.toISOString();
iso = iso.substring(2, iso.indexOf('T'));

const saleNumber = '02';

const invNumber = 'IN ' + iso + '-' + saleNumber;

export function Invoice() {
  return (
    <Paper className={classes.page} shadow="sm" p="xl">
      <div className={classes.header}>
        <LogoBlock />
        <HeaderBlock />
      </div>

      <Divider my="lg" />

      <PriceTable />
      <Text>Please use {invNumber} as payment reference</Text>
      <Text>Please email Proof of Payment to info@ui-together.com</Text>
    </Paper>
  );
}

export { today, invNumber };
