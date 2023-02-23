import logo from "./logo.svg";
import "./App.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CustomRouter } from "./router";

function App() {
  return (
    <div className="App">
      <CustomRouter />
    </div>
  );
}

export default App;
