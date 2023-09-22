import { useMemo, useState } from "react";
let array = new Array(10000000).fill(0).map((e, i) => i);

export default function UseState() {
    const [counter, setCounter] = useState(0);

    // const findX = array.findIndex((e) => e == 9999999);
    const findX = useMemo(() => array.findIndex((e) => e === 9999999), [array]);

    return (
        <>
            <fieldset>
                <legend>Use MEMO</legend>
                <div>
                    <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
                    <p>Counter = {counter}</p>
                </div>

                <div
                    style={{
                        padding: "10px",
                    }}
                    id="MessageState"
                >
                    useMemo will execute function only its underlying dependency changes. <br />
                    Without useMemo, the increase counter that causes re-render will call below
                    function on every render
                    <div
                        style={{
                            backgroundColor: "indigo",
                            padding: "10px",
                            marginTop: "10px",
                            marginBottom: "10px",
                            width: "max-content",
                            margin: "auto",
                        }}
                    >
                        {"findX = array.findIndex((e) => e == 9999999)"}
                    </div>
                    <br />X found at {findX} Index or 1 Crore<sup>th</sup> index
                </div>
            </fieldset>
        </>
    );
}
