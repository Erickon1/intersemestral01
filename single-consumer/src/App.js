import logo from './logo.svg';
import './App.css';
import HttpClient from './components/HttpClient/HttpClient.js';
import HttpClient2 from './components/HttpClient/HttpClient2.js';

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
        <HttpClient2/>
        
        Hello, this is my component:
        <HttpClient/>
        Bye
        
      </header>
    </div>
  );
}

export default App;
