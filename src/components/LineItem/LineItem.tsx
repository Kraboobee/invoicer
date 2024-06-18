import classes from './LineItem.module.css';
import { useState } from 'react';
// export const total = items.reduce((a, v) => (a = a + v.price), 0);

export interface item {
  desc: string;
  price: number;
  qty: number;
}

// export function allItems() {
//   return (
//     <div className={classes.tableBlock}>
//       <Table striped>
//         <Table.Thead>
//           <Table.Tr className={classes.tableHeader}>
//             <Table.Th>Description</Table.Th>
//             <Table.Th className={classes.price}>Price</Table.Th>
//           </Table.Tr>
//         </Table.Thead>
//         <Table.Tbody>{rows}</Table.Tbody>
//       </Table>
//       <div className={classes.totalBlock}>
//         <h2>Total: R {total}</h2>
//         <p>Please email proof of payment to info@ui-together.com</p>
//       </div>
//     </div>
//   );
// }
