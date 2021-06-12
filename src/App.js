import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p className="Homework">Homework week 1</p>
          <h1>Dictionary</h1>
          <p className="Subtitle">Type a word to look up</p>
          <Dictionary />
        </header>
      </div>
    </div>
  );
}

export default App;
