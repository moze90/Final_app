import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <h1>Forecast-based farming App</h1>
      <main>
        {/* add weather fetching component */}
        <Forecast />
      </main>
      <footer>
        AGROMEET LTD :Mozaffar khider and shalajit datta
      </footer>
    </div>
  );
}

export default App;
