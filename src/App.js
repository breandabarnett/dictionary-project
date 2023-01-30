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
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer mt-5">
          <div>
            Coded & Designed by{" "}
            <a
              href="https://breanda.netlify.app/"
              title="Portfolio Website"
              target="_blank"
              rel="noreferrer"
            >
              Breanda Barnett
            </a>{" "}
            <i className="fa-brands fa-react"></i> Open-sourced on{" "}
            <a
              href="https://github.com/breandabarnett/dictionary-project"
              title="GitHub Repository"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            <i className="fa-brands fa-react"></i> Icon by{" "}
            <a
              href="https://www.flaticon.com/free-icons/research"
              title="Research Icons - Flaticon"
              target="_blank"
              rel="noreferrer"
            >
              Freepik
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
