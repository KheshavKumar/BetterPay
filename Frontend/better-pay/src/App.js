import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard.js'
import Home from './components/Home.js'
import Header from './components/Header.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;