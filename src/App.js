import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const getRequest = (req, res) => {
  axios.get("http://localhost:5000/api/demo")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getRequest}>CLICK ME</button>
      </header>
    </div>
  );
}

export default App;
