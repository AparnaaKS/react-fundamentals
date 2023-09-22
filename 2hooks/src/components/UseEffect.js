import { useState, useEffect } from "react";

export default function UseEffect() {
    const [stateA, setStateA] = useState("Hello, ");
    const [name, setName] = useState("");

    useEffect(() => {
        document.getElementById("MessageEffect").style.backgroundColor =
            name !== "" ? "indigo" : "inherit";
    }, [name]);

    return (
        <>
            <fieldset>
                <legend>Use Effect</legend>
                <label>User Name : </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <p style={{ padding: "20px", margin: "20px" }} id="MessageEffect">
                    Whenever the state changes, I do an action because "useEffect" hook is called
                    with a state
                    <br />
                    {name ? stateA + name : ""}
                </p>
            </fieldset>
        </>
    );
}
