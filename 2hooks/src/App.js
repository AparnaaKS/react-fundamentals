import "./App.css";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";
import UseMemo from "./components/UseMemo";
import UseId from "./components/UseId";
import UseRef from "./components/UseRef";

function App() {
    return (
        <div className="App">
            <div className="App-header">Hooks Demo</div>
            <UseState />
            <UseEffect />
            <UseMemo />
            <UseId />
            <UseRef />
        </div>
    );
}

export default App;
