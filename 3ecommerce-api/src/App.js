import logo from "./logo.png";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    // state is a variable inside the current component's memory

    // useState is a function that takes initial value and
    // returns array of current value and function to change current value
    // [currentValue, functionToAlterCurrentValue]

    const [items, setItems] = useState({});
    const [cart, setCart] = useState({});
    const [purchaseSuccess, setPurchaseSuccess] = useState("");

    const addItem = (item) => {
        if (items[item] > 0) {
            setCart({ ...cart, [item]: (cart[item] || 0) + 1 });
            setItems({ ...items, [item]: items[item] - 1 });
            console.log(cart);
        }
    };

    const removeItem = (item) => {
        if (cart[item] && cart[item] > 0) {
            setCart({ ...cart, [item]: cart[item] - 1 });
            setItems({ ...items, [item]: items[item] + 1 });
            console.log(cart);
        }
    };

    const getItems = async () => {
        try {
            setItems((await axios.get("http://localhost:3000/items"))?.data);
            console.log(items);
        } catch (e) {
            console.log(e);
            setItems({});
        }
    };

    const purchaseItems = async () => {
        try {
            setPurchaseSuccess((await axios.put("http://localhost:3000/items", items)) && true);
            getItems();
        } catch (e) {
            setPurchaseSuccess(false);
            console.log(e);
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        // JSX elements - React allows HTML to be written inside JS and calls this JSX elements
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Welcome to EMart
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Available</th>
                        <th>Add</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(items)?.map((item) => (
                        <tr key={item}>
                            <td>{item}</td>
                            <td>{items[item]}</td>
                            <td>
                                <button onClick={() => addItem(item)}>Add</button>
                            </td>
                            <td>
                                <button onClick={() => removeItem(item)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <fieldset>
                <legend>Cart</legend>
                {Object.keys(cart).map((item) => (
                    <div key={item}>
                        {item} {cart[item]}
                        <br />
                    </div>
                ))}
                <b>
                    Total items :{" "}
                    {Object.keys(cart).reduce(
                        (acc, item) => acc + (item !== "Bag" ? parseInt(cart[item]) : 0),
                        0
                    )}
                    {cart && cart["Bags"]
                        ? " items and " + (cart["Bags"] || "no") + " bag"
                        : " items"}
                </b>
            </fieldset>
            <button onClick={() => purchaseItems()}>Checkout</button>
            <dialog open={purchaseSuccess && purchaseSuccess !== ""}>
                <div>
                    {purchaseSuccess
                        ? "Purchase successful. Please visit us again."
                        : purchaseSuccess !== ""
                        ? "Purchase unsuccessful. Contact IT team if occurs again. "
                        : ""}
                </div>
                <button
                    onClick={() => {
                        setPurchaseSuccess("");
                        setCart({});
                    }}
                >
                    Close
                </button>
            </dialog>
        </div>
    );
}

export default App;
