import "./App.css";
import background from "./imgs/bg-img-02.svg";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="App">
        <div className="container">
          <header className="App-header">
            <div className="center">
              <h6>Dictionary.</h6>
            </div>
            <Dictionary defaultKeyword="north" />
          </header>
        </div>
        <footer>
          <a href="https://github.com/miss-ping/dictionary-app-2">
            Open source
          </a>{" "}
          code by Sílvia Ping 2021
        </footer>
      </div>
    </div>
  );
}

export default App;
