import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-logo">
          <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
      </header>
      <p>dictionary</p>
    </div>
  );
}

export default App;
