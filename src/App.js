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

  const getMostLikesYt = (req, res) => {
    // if(month == Sep && youtube )
    axios.get("http://localhost:5000/api/mostLikesYTSep").then((response) => {
      let data = response.data;
      // data = JSON.stringify(data);
    });
  };
  const getMostLandCYt = (req, res) => {
    // if(month == Sep && youtube )
    axios.get("http://localhost:5000/api/mostLandCYTSep");
  };

  const getMostCommentsYt = (req, res) => {
    axios.get("http://localhost:5000/api/mostCommentsYTSep");
  };
  const getMostSubscribersYt = (req, res) => {
    axios.get("http://localhost:5000/api/mostSubscribersYTSep");
  };
  const getMostViewsYt = (req, res) => {
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

  const getPopularCategoryYt = (req, res) => {
    axios.get("http://localhost:5000/api/popularByCategoryYTSep").then((response) => {
      let data = response.data;
      setMostPopucategory(data);
    });
  }
// -----------------------------------------------------------------------------------------------------

  const getMostSubscribersIns = (req, res) => {
    axios.get("http://localhost:5000/api/mostSubscribersInsSep").then((response) => {
      let data = response.data;
      setMostPopucategory(data);
    });
  }
  const getMostEngagementIns = (req, res) => {
    axios.get("http://localhost:5000/api/mostEngagementInsSep").then((response) => {
      let data = response.data;
      setMostPopucategory(data);
    });
  }

// ---------------------------------------------------------------------------------------------------------
  
const getMostSubscribersTT = (req, res) => {
  axios.get("http://localhost:5000/api/mostSubscribersTTSep").then((response) => {
    let data = response.data;
    setMostPopucategory(data);
  });
}
const getMostViewsTT = (req, res) => {
  axios.get("http://localhost:5000/api/mostViewsTTSep").then((response) => {
    let data = response.data;
    setMostPopucategory(data);
  });
}
const getMostLikesTT = (req, res) => {
  axios.get("http://localhost:5000/api/mostLikesTTSep").then((response) => {
    let data = response.data;
    setMostPopucategory(data);
  });
}
const getMostCommentsTT = (req, res) => {
  axios.get("http://localhost:5000/api/mostCommentsTTSep").then((response) => {
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
          onClick={getMostLikesYt}
        >
          MostLikes
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostCommentsYt}
        >
          MostComments
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostSubscribersYt}
        >
          MostSubscribers
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostViewsYt}
        >
          MostViews
        </button>
        {/* <button type="button" class="btn btn-primary" style={{marginTop: 10}} onClick={getMostSubscribersYt}>MostSubscribers</button> */}
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostLandCYt}
        >
          MostLikesandComments
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getPopularCategoryYt}
        >
          MostPopuCategory
        </button>

        {/* --------------------------------------------------------------------------------- */}
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostSubscribersIns}
        >
          MostSubscribersIns
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostEngagementIns}
        >
          MostEngagementIns
        </button>

{/* ------------------------------------------------------------------------------------------------ */}

        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostSubscribersTT}
        >
          MostSubscribersTT
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostViewsTT}
        >
          MostViewsTT
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostLikesTT}
        >
          MostLikesTT
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={getMostCommentsTT}
        >
          MostCommentsTT
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
            <Dropdown.Item href="/api/mostLikesYTSep" onClick={getMostLikesYt}>
              September
            </Dropdown.Item>{" "}
            {/* Here instead of getMostLikesYt do setMonthToSeptember  */}
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </header>
    </div>
  );
}

export default App;
