import logo from './logo.svg';
import './App.css';
import Mynavigation from './Mynavigation';
import Myroute from './Myroute';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mynavigation></Mynavigation>
        <Myroute></Myroute>
      </BrowserRouter>
    </div>
  );
}

export default App;
