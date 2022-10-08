import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
