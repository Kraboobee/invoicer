import classes from './PriceTable.module.css';
import { Table } from '@mantine/core';

const items = [
  { description: 'Web Design and Development Service', price: 5000 },
  { description: 'extortion', price: 50000 },
];

const rows = items.map((item) => (
  <Table.Tr key={item.description}>
    <Table.Td>{item.description}</Table.Td>
    <Table.Td className={classes.price}>R {item.price}</Table.Td>
  </Table.Tr>
));

export function PriceTable() {
  return (
    <Table striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Description</Table.Th>
          <Table.Th className={classes.price}>Price</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
