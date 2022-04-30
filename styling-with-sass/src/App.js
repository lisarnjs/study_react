import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large" onClick={() => console.log("clicked")}>
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size="small" color="gray" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" fullWidth>
          BUTTON
        </Button>
        <Button outline fullWidth>
          BUTTON
        </Button>
        <Button color="gray" fullWidth>
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
