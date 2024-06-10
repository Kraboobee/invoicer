import { Text, Paper } from '@mantine/core';
import { HeaderBlock } from '../HeaderBlock/HeaderBlock';
import { LogoBlock } from '../LogoBlock/LogoBlock';
import { PriceTable } from '../PriceTable/PriceTable';
import classes from './Invoice.module.css';

export function Invoice() {
  return (
    <Paper className={classes.page} shadow="sm" p="xl">
      <LogoBlock />
      <HeaderBlock invNumber="12341324" />
      <PriceTable />
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background with
        shadow
      </Text>
    </Paper>
  );
}
