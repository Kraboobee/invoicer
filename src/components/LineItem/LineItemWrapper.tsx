import { LineItemForm } from './LineItemForm';
import { useState } from 'react';
import classes from '../LineItem/LineItem.module.css';
import { Button, Group, NumberFormatter, Table, Modal } from '@mantine/core';
import { item } from './LineItem';
import { useDisclosure } from '@mantine/hooks';

export const LineItemWrapper = () => {
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [opened, { open, close }] = useDisclosure(false);

  const [lineItems, setLineItems] = useState([] as any);
  const addItem = (lineItem: item) => {
    if (lineItems.includes(lineItem.desc)) {
      incrementQty(lineItem.desc);
    } else {
      setLineItems([...lineItems, lineItem]);
    }
  };

  const deleteItem = (desc: string) => {
    setLineItems(lineItems.filter((lineItem: item) => lineItem.desc !== desc));
  };

  const incrementQty = (desc: string) => {
    setLineItems(
      lineItems.map((lineItem: item) =>
        lineItem.desc === desc ? { ...lineItem, qty: lineItem.qty + 1 } : lineItem
      )
    );
  };

  const decrementQty = (desc: string) => {
    setLineItems(
      lineItems.map((lineItem: item) =>
        lineItem.desc === desc && lineItem.qty > 1
          ? { ...lineItem, qty: lineItem.qty - 1 }
          : lineItem
      )
    );
  };

  const rows = lineItems.map((lineItem: any) => (
    <Table.Tr key={lineItem.desc}>
      <Table.Td>{lineItem.desc}</Table.Td>
      <Table.Td className={classes.price}>
        <NumberFormatter prefix="R " value={lineItem.price} thousandSeparator />
      </Table.Td>
      <Table.Td className={classes.buttons}>
        <Button color="violet" onClick={() => decrementQty(lineItem.desc)}>
          -
        </Button>
        {lineItem.qty}
        <Button color="violet" onClick={() => incrementQty(lineItem.desc)}>
          {' '}
          +{' '}
        </Button>
      </Table.Td>
      <Table.Td className={classes.price}>
        <NumberFormatter prefix="R " value={lineItem.price * lineItem.qty} thousandSeparator />
      </Table.Td>
    </Table.Tr>
  ));

  const total = lineItems.reduce(
    (a: any, v: { price: number; qty: number }) => (a = a + v.price * v.qty),
    0
  );

  return (
    <div>
      <div className={classes.tableBlock}>
        <Table striped withColumnBorders withTableBorder>
          <Table.Thead>
            <Table.Tr className={classes.tableHeader}>
              <Table.Th>Description</Table.Th>
              <Table.Th className={classes.unitPrice}>Unit Price</Table.Th>
              <Table.Th className={classes.qtyHeader}>Qty</Table.Th>
              <Table.Th className={classes.totalPrice}>Total</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <div className={classes.totalBlock}>
          <Modal opened={opened} onClose={close} title="Add Item">
            <LineItemForm addItem={addItem} />
          </Modal>
          <Button color="violet" className={classes.addItemButton} onClick={open}>
            Add Item
          </Button>

          <h2>
            Total: <NumberFormatter prefix="R " value={total} thousandSeparator />{' '}
          </h2>
          <p>Please email proof of payment to info@ui-together.com</p>
        </div>
      </div>
    </div>
  );
};
