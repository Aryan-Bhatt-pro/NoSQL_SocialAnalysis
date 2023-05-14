import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";

import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
// import org.json.JSONObject;

import axios from "axios";

function App() {
  const [mostLikesYTSep, setMostLikesYTSep] = useState("");
  const [mostViewsYTSep, setMostViewsYTSep] = useState([]);
  const [mostPopuCategory, setMostPopucategory] = useState([]);

  const getMostLikes = (req, res) => {
    // if(month == Sep && youtube )
    axios.get("http://localhost:5000/api/mostLikesYTSep").then((response) => {
      let data = response.data;
      // data = JSON.stringify(data);
    });
  };
  const getMostLandC = (req, res) => {
    // if(month == Sep && youtube )
    axios.get("http://localhost:5000/api/mostLandCYTSep");
  };

  const getMostComments = (req, res) => {
    axios.get("http://localhost:5000/api/mostCommentsYTSep");
  };
  const getMostViews = (req, res) => {
    axios.get("http://localhost:5000/api/mostViewsYTSep").then((response) => {
      let data = response.data;
      // data = JSON.stringify(data);
      // setMostViewsYTSep(data);
      // let temp = [];
      // for (let i = 0; i < data.length; i++){
      //   let object = data.getJSONObject(i);
      //   temp.push(object);
      // }
      setMostViewsYTSep(data);
    });
  };

  const getPopularCategory = (req, res) => {
    axios.get("http://localhost:5000/api/popularByCategory").then((response) => {
      let data = response.data;
      setMostPopucategory(data);
    });
  }

  // define set month to september using states

  // const names = ["James", "John", "Paul", "Ringo", "George"];

  return (
    <div className="App">
      <header className="App-header">
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginBottom: 10 }}
          onClick={getMostLikes}
        >
          MostLikes
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostComments}
        >
          MostComments
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostViews}
        >
          MostViews
        </button>
        {/* <button type="button" class="btn btn-primary" style={{marginTop: 10}} onClick={getMostSubscribers}>MostSubscribers</button> */}
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostLandC}
        >
          MostLikesandComments
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getPopularCategory}
        >
          MostPopuCategory
        </button>
        {/* <strong>{mostViewsYTSep}</strong> */}
        {/* render most views */}


        {mostViewsYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Avg Views: {youtuber.AvgComments}</strong>
          </div>
        ))}

        {mostPopuCategory.map((category) => (<div><strong>{category._id}</strong></div>))}


        <div>
          <DropdownButton id="dropdown-basic-button" title="Select Month">
            <Dropdown.Item href="/api/mostLikesYTSep" onClick={getMostLikes}>
              September
            </Dropdown.Item>{" "}
            {/* Here instead of getMostLikes do setMonthToSeptember  */}
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </header>
    </div>
  );
}

export default App;
