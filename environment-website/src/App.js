import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import SitePage from './containers/SitePage/SitePage';
function App() {
  return (
    <div className="App">
        <SitePage/>
      
    </div>
  );
}

export default App;
