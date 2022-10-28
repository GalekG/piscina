import Header from "./components/Header";
import Body from "./components/Body";
import Lateral from "./components/Lateral";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Body />
        <Lateral />
      </BrowserRouter>
    </div>
  );
}

export default App;
