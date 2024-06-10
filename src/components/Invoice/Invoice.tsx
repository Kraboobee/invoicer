import { Text, Paper } from '@mantine/core';
import classes from './Invoice.module.css';

export function Invoice() {
  return (
    <Paper className={classes.page} shadow="sm" p="xl">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background with
        shadow
      </Text>
    </Paper>
  );
}
