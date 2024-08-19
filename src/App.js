import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="app-logo">
        <header className="App-header">
          <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{ width: "300px", height: "200px" }}
          />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">Created by Inés</footer>
    </div>
  );
}

export default App;
