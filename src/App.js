import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p className="Homework">Homework week 1</p>
          <h1>Dictionary</h1>
          <p className="type-request">
            <em>Type a word to look up</em>
          </p>
          <Dictionary />
        </header>
      </div>
      <footer>
        <a href="https://github.com/miss-ping/dictionary-app-2">Open source</a>{" "}
        code by Sílvia Ping 2021
      </footer>
    </div>
  );
}

export default App;
