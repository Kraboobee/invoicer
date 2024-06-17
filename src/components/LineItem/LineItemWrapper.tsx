import { LineItemForm } from "./LineItemForm";
import { useState } from "react";
import classes from '../PriceTable/PriceTable.module.css'
import { Table } from "@mantine/core";

export const LineItemWrapper = () => {
    const [lineItems, setLineItems] = useState([] as any);

    const addItem = (lineItem:{desc:string, price:number, qty:number}) => {
        setLineItems([...lineItems, {desc: lineItem.desc, price: lineItem.price, qty: lineItem.qty}])
    }

    const rows = lineItems.map((lineItem:any) => (
        <Table.Tr key={lineItem.desc}>
          <Table.Td>{lineItem.desc}</Table.Td>
          <Table.Td className={classes.price}>R {lineItem.price}</Table.Td>
          <Table.Td className={classes.price}>{lineItem.qty}</Table.Td>
          <Table.Td className={classes.price}>R {lineItem.price * lineItem.qty}</Table.Td>
        </Table.Tr>
      ));


    const total = lineItems.reduce((a: any, v: { price: number; qty: number; }) => (a = a + (v.price * v.qty)), 0);
    
    return (
        <div>
    <div className={classes.tableBlock}>
      <Table striped>
        <Table.Thead>
          <Table.Tr className={classes.tableHeader}>
            <Table.Th>Description</Table.Th>
            <Table.Th className={classes.price}>Unit Price</Table.Th>
            <Table.Th className={classes.price}>Qty</Table.Th>
            <Table.Th className={classes.price}>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <LineItemForm addItem={addItem} />

      <div className={classes.totalBlock}>
        <h2>Total: R {total}</h2>
        <p>Please email proof of payment to info@ui-together.com</p>
      </div>
    </div>
        </div>
    )
}