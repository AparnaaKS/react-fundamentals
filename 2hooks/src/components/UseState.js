import { useState } from "react";

export default function UseState() {
    const [stateA, setStateA] = useState("Hello, ");
    const [name, setName] = useState("");

    return (
        <>
            <fieldset>
                <legend>Use State</legend>
                <label>User Name : </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <p
                    style={{
                        padding: "20px",
                        margin: "20px",
                    }}
                    id="MessageState"
                >
                    Whenever "name" changes, this HTML element text will be updated due to
                    "useState" hook
                    <br />
                    {name ? stateA + name : ""}
                </p>
            </fieldset>
        </>
    );
}
