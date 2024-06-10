import classes from './PriceTable.module.css';
import { Table } from '@mantine/core';

export const items = [
  { description: 'Web Design and Development Service', price: 5000 },
  { description: 'Extortion', price: 50000 },
  { description: 'Double extortion', price: 100000 },
];

export const total = items.reduce((a, v) => (a = a + v.price), 0);

const rows = items.map((item) => (
  <Table.Tr key={item.description}>
    <Table.Td>{item.description}</Table.Td>
    <Table.Td className={classes.price}>R {item.price}</Table.Td>
  </Table.Tr>
));

export function PriceTable() {
  return (
    <div className={classes.tableBlock}>
      <Table striped>
        <Table.Thead>
          <Table.Tr className={classes.tableHeader}>
            <Table.Th>Description</Table.Th>
            <Table.Th className={classes.price}>Price</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <h2>Total: R {total}</h2>
    </div>
  );
}
