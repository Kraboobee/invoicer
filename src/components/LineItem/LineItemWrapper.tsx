import { LineItemForm } from "./LineItemForm";
import { useState } from "react";
import classes from '../LineItem/LineItem.module.css'
import { Button, Group, NumberFormatter, Table } from "@mantine/core";

export const LineItemWrapper = () => {
    interface item {
        desc:string;
        price:number;
        qty:number;
    }

    const [lineItems, setLineItems] = useState([] as any);
    
        const addItem = (lineItem:item) => {
            if (lineItems.includes(lineItem.desc)) {
                incrementQty(lineItem.desc)
            } else {
                setLineItems([...lineItems, lineItem])

            }
        }
    
        const deleteItem = (desc: string) => {
            setLineItems(lineItems.filter((lineItem: item) => lineItem.desc !== desc) )
        }

        const incrementQty = (desc: string) => {
            setLineItems(lineItems.map((lineItem:item) => lineItem.desc === desc ? {...lineItem, qty:lineItem.qty +1}: lineItem))
        }
        

        const decrementQty = (desc: string) => {
            setLineItems(lineItems.map((lineItem:item) => (lineItem.desc === desc && lineItem.qty>(1)) ? {...lineItem, qty:lineItem.qty -1}: lineItem))
        }
        
    
    
    const rows = lineItems.map((lineItem:any) => (
        <Table.Tr key={lineItem.desc}>
          <Table.Td onClick={() => deleteItem(lineItem.desc)}>{lineItem.desc}</Table.Td>
          <Table.Td className={classes.price}><NumberFormatter prefix="R " value={lineItem.price} thousandSeparator /></Table.Td>
          <Table.Td 
          onClick={() => decrementQty(lineItem.desc)} 
          className={classes.price}>
            <Group>
            <Button onClick={() => decrementQty(lineItem.desc)}>
                -
            </Button>
            <Button onClick={() => incrementQty(lineItem.desc)}>
                +
            </Button>
                
            </Group>
            {lineItem.qty}
            </Table.Td>
          <Table.Td className={classes.price}><NumberFormatter prefix="R " value={lineItem.price * lineItem.qty} thousandSeparator /></Table.Td>
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

      <div className={classes.totalBlock}>
        <h2>Total: <NumberFormatter prefix="R " value={total} thousandSeparator /> </h2>
        <p>Please email proof of payment to info@ui-together.com</p>
      </div>
    </div>
    <LineItemForm addItem={addItem} />

        </div>
    )
}