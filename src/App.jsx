import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  );
}

export default App;
