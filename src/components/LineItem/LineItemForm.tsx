import { Button, Fieldset, Group, TextInput } from "@mantine/core"
import { useState } from "react"
import classes from "./LineItem.module.css"

export const LineItemForm = ({addItem}:any) => {
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    const [qty, setQty] = useState(1)

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        addItem({desc, price, qty});

        setDesc("");
        setPrice(0);
        setQty(1);
    }
    return (
        <form onSubmit={handleSubmit} className={classes.itemForm} >

<Fieldset legend="Add Item">

                <TextInput 
                    type="text" 
                    label="Description"
                    required
                    id="desc"
                    className={classes.descInput} 
                    value={desc} 
                    placeholder="item description" 
                    onChange={(e) => setDesc(e.target.value)} 
                    />

                <TextInput 
                    type="number" 
                    min="0"
                    label="Price"
                    className={classes.priceInput} 
                    id="price"
                    value={price} 
                    placeholder="item price" 
                    onChange={(e) => setPrice(e.target.valueAsNumber)} 
                    />

                <TextInput 
                    type="number" 
                    label="Qty"
                    min="1"
                    className={classes.qtyInput} 
                    id="qty"
                    value={qty} 
                    placeholder="item qty" 
                    onChange={(e) => setQty(e.target.valueAsNumber)} 
                    />

<Group justify="flex-end" mt="md">
            <Button type="submit" className={classes.submitButton}>
                Add Item
            </Button>
</Group>

    </Fieldset>        
    </form>
    )
}

