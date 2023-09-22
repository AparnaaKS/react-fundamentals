import { useId, useState } from "react";

export default function UseId() {
    const getId = () => useId();
    const [names, setNames] = useState([]);

    return (
        <fieldset style={{ marginTop: "2px" }}>
            <legend>Use ID</legend>
            <div>
                Form 1 :
                <Form id={getId()} names={names} setNames={setNames} />
            </div>
            <div>
                Form 2 :
                <Form id={getId()} names={names} setNames={setNames} />
            </div>
            <div>
                Form 3 :
                <Form id={getId()} names={names} setNames={setNames} />
            </div>
            <div>
                Form 4 :
                <Form id={getId()} names={names} setNames={setNames} />
            </div>
            <ol>{names && Object.keys(names)?.map((name, i) => <li key={i}>{names[name]}</li>)}</ol>
        </fieldset>
    );
}

function Form({ id, names, setNames }) {
    return (
        <div>
            <label htmlFor={id}>Name</label>
            <input key={id} onChange={(e) => setNames({ ...names, [id]: e.target.value })} />
        </div>
    );
}
