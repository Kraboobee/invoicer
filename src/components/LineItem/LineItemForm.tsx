import { useState } from "react"

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
        <form onSubmit={handleSubmit}>
            <input type="text" value={desc} placeholder="item description" onChange={(e) => setDesc(e.target.value)
            } />
            <input type="number" value={price} placeholder="item price" onChange={(e) => setPrice(e.target.valueAsNumber)} />
            <input type="number" value={qty} placeholder="item qty" onChange={(e) => setQty(e.target.valueAsNumber)} />
            <button type="submit">
                Add Item
            </button>
        </form>
    )
}