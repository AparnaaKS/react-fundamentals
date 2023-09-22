import { useState, useRef, useEffect } from "react";

export default function UseRef() {
    const [stateA, setStateA] = useState("Hello, ");
    const [name, setName] = useState("");
    const ref = useRef(0);

    useEffect(() => {
        ref.current = ref.current + 1;
    });

    return (
        <>
            <fieldset>
                <legend>Use Ref</legend>
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
                <p>
                    Rendered only {ref.current} times.
                    <br />
                    Even though ref is updated inside useEffect, the useRef's change did not cause
                    update.
                    <br /> Ref value = {ref.current} <br />
                </p>
            </fieldset>
        </>
    );
}
