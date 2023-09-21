import logo from "./logo.png";
import "./App.css";
import { useState } from "react";

function App() {
    // state is a variable inside the current component's memory

    // useState is a function that takes initial value and
    // returns array of current value and function to change current value
    // [currentValue, functionToAlterCurrentValue]
    
    const [apples, setApples] = useState(10);
    const [mangoes, setMangoes] = useState(10);
    const [oranges, setOranges] = useState(10);
    const [bags, setBags] = useState(10);
    const [cart, setCart] = useState({});

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
                    <tr>
                        <td>Apple</td>
                        <td>{apples}</td>
                        <td>
                            <button onClick={() => updateCart("Apples", 1)}>Add</button>
                        </td>
                        <td>
                            <button onClick={() => updateCart("Apples", -1)}>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Mango</td>
                        <td>{mangoes}</td>
                        <td>
                            <button onClick={() => updateCart("Mangoes", 1)}>Add</button>
                        </td>
                        <td>
                            <button onClick={() => updateCart("Mangoes", -1)}>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Orange</td>
                        <td>{oranges}</td>
                        <td>
                            <button onClick={() => updateCart("Oranges", 1)}>Add</button>
                        </td>
                        <td>
                            <button onClick={() => updateCart("Oranges", -1)}>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Bag</td>
                        <td>{bags}</td>
                        <td>
                            <button onClick={() => updateCart("Bags", 1)}>Add</button>
                        </td>
                        <td>
                            <button onClick={() => updateCart("Bags", -1)}>Remove</button>
                        </td>
                    </tr>
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
                        (acc, item) => acc + (item !== "Bag" ? cart[item] : 0),
                        0
                    )}
                    {cart && cart["Bags"] ? " items and a bag" : " items"}
                </b>
            </fieldset>
        </div>
    );

    function updateCart(item, count) {
        if (
            (count === 1 && eval(item.toLowerCase()) > 0) ||
            (count === -1 && eval(item.toLowerCase()) < 10)
        ) {
            eval("set" + item)(eval(item.toLowerCase()) - count);
            console.log(cart, { ...cart, [item]: cart && cart[item] ? cart[item] : 0 + count });
            setCart({ ...cart, [item]: (cart && cart[item] ? cart[item] : 0) + count });
        }
    }
}

export default App;
