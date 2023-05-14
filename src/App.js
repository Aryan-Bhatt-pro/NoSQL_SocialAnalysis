import logo from './logo.svg';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';

import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
const getMostLikes = (req, res) => {
    // if(month == Sep && youtube )
      axios.get("http://localhost:5000/api/mostLikesYTSep")
}
const getMostLandC = (req, res) => {
    // if(month == Sep && youtube )
      axios.get("http://localhost:5000/api/mostLandCYTSep")
}

const getMostComments = (req, res) => {
  axios.get("http://localhost:5000/api/mostCommentsYTSep")
}
const getMostViews = (req, res) => {
  axios.get("http://localhost:5000/api/mostViewsYTSep")
}
const getMostSubscribers = (req, res) => {
  axios.get("http://localhost:5000/api/mostSubscribersYTSep")
}

// define set month to september using states

const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" class="btn btn-primary" style={{marginBottom: 10}} onClick={getMostLikes}>MostLikes</button>
        <button type="button" class="btn btn-primary" style={{marginTop: 10}} onClick={getMostComments}>MostComments</button>
        <button type="button" class="btn btn-primary" style={{marginTop: 10}} onClick={getMostViews}>MostViews</button>
        <button type="button" class="btn btn-primary" style={{marginTop: 10}} onClick={getMostSubscribers}>MostSubscribers</button>
        <button type="button" class="btn btn-primary" style={{marginTop: 10}} onClick={getMostLandC}>MostLikesandComments</button>

      <div>
      <DropdownButton id="dropdown-basic-button" title="Select Month">
      <Dropdown.Item href="/api/mostLikesYTSep" onClick={getMostLikes}>September</Dropdown.Item> {/* Here instead of getMostLikes do setMonthToSeptember  */}
   
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </div>
      </header>
    </div>
  );
}

export default App;
