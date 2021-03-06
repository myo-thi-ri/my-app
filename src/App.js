import './App.css';
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        <p>
          This project was coded by{" "}
          <a href="/" target="_blank">
            MaNaw Phyu
          </a>{" "}
          and is{" "}
          <a href="https://github.com/myo-thi-ri/my-app" target="_blank">
            open-sourced on GitHub.
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
