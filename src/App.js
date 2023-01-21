import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
          <hr />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://breanda.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Breanda
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/breandabarnett/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://timely-marzipan-6ff539.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
