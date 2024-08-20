import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <footer className="App-footer">
        Coded by <a href="https://github.com/InesParis">Inés Paris</a> 🌻 hosted
        on <a href="https://reactdictionarystudents.netlify.app/">Netlify</a>{" "}
        and open source on{" "}
        <a href="https://github.com/InesParis/react-dictionary">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
