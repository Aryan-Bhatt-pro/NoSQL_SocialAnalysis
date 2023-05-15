import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
// import {My_Button} from "./My_Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
// import org.json.JSONObject;

import axios from "axios";
// import { response } from "express";
// import { set } from "mongoose";

function App() {
    // youtube states
  const [mostLikesYTSep, setMostLikesYTSep] = useState([]);
  const [mostCommentsYTSep, setMostCommentsYTSep] = useState([]);
  const [mostSubscribersYTSep, setMostSubscribersYTSep] = useState([]);
  const [mostViewsYTSep, setMostViewsYTSep] = useState([]);
  const [mostLikedAndCommYTSep, setMostLikedAndCommYTSep] = useState([]);
  const [mostPopuCategoryYT, setMostPopucategoryYT] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('lode')
  // insta states

  const [mostSubscribersInsta, setMostSubscribersInsta] = useState([]);
  const [MostEngagementInsta, setMostEngagementInsta] = useState([]);


  // ticktok states
  const [mostLikesTT, setMostLikesTT] = useState([]);
  const [mostViewsTT, setMostViewsTT] = useState([]);
  const [mostSubscribersTT, setMostSubscribersTT] = useState([]);
  const [mostCommentsTT, setMostCommentsTT] = useState([]);


  const [currentSocialMedia, setCurrentSocialMedia] = useState("Youtube");

  const changeHandler = (e) => {
    setCurrentCategory(e.target.value)
  }

  const setToYT = () => {
    setCurrentSocialMedia("Youtube");
  };
  const setToInsta = () => {
    setCurrentSocialMedia("Instagram");
  };
  const setToTick = () => {
    setCurrentSocialMedia("TickTok");
  };

  // youtube

  const getMostLikesYt = (req, res) => {
    // if(month == Sep && youtube )
    axios.post("http://localhost:5000/api/mostLikesYTSep", {currentCategory}).then((response) => {
      let data = response.data;
      // data = JSON.stringify(data);
      setMostLikesYTSep(data);
      
      setMostCommentsYTSep([]);
      setMostSubscribersYTSep([]);
      setMostLikedAndCommYTSep([]);
      setMostViewsYTSep([])
      setMostPopucategoryYT([]);
      
    });
  };
  const getMostLandCYt = (req, res) => {
    // if(month == Sep && youtube )
    axios.get("http://localhost:5000/api/mostLandCYTSep").then((response) => {
      let data = response.data;
      setMostLikedAndCommYTSep(data);

      setMostLikesYTSep([]);
      setMostCommentsYTSep([])
      setMostSubscribersYTSep([]);
      setMostViewsYTSep([]);
      setMostPopucategoryYT([]);

    });
  };
  const getMostCommentsYt = (req, res) => {
    axios.get("http://localhost:5000/api/mostCommentsYTSep").then((response) => {
      let data = response.data;
      setMostCommentsYTSep(data);

      setMostLikesYTSep([]);
      setMostLikedAndCommYTSep([])
      setMostSubscribersYTSep([]);
      setMostViewsYTSep([]);
      setMostPopucategoryYT([]);
    });
  };
  const getMostSubscribersYt = (req, res) => {
    axios.get("http://localhost:5000/api/mostSubscribersYTSep").then((response) => {
      let data = response.data;
      setMostSubscribersYTSep(data);

      setMostLikesYTSep([]);
      setMostCommentsYTSep([])
      setMostLikedAndCommYTSep([]);
      setMostViewsYTSep([]);
      setMostPopucategoryYT([]);
    });
  };
  const getMostViewsYt = (req, res) => {
    axios.get("http://localhost:5000/api/mostViewsYTSep").then((response) => {
      let data = response.data;

      setMostViewsYTSep(data);

      setMostLikesYTSep([]);
      setMostSubscribersYTSep([]);
      setMostLikedAndCommYTSep([]);
      setMostCommentsYTSep([])
      setMostPopucategoryYT([]);


    });
  };
  const getPopularCategoryYt = (req, res) => {
    axios
      .get("http://localhost:5000/api/popularByCategoryYTSep")
      .then((response) => {
        let data = response.data;
        setMostPopucategoryYT(data);

      setMostLikesYTSep([]);
      setMostCommentsYTSep([])
      setMostSubscribersYTSep([]);
      setMostViewsYTSep([]);
      setMostLikedAndCommYTSep([]);
      });
  };
  // -----------------------------------------------------------------------------------------------------
  // instagram
  const getMostSubscribersIns = (req, res) => {
    axios
      .post("http://localhost:5000/api/mostSubscribersInsSep", {currentCategory})
      .then((response) => {
        let data = response.data;
        setMostSubscribersInsta(data);
        setMostEngagementInsta([]);
      });
  };
  const getMostEngagementIns = (req, res) => {
    axios
      .post("http://localhost:5000/api/mostEngagementInsSep", {currentCategory})
      .then((response) => {
        let data = response.data;
        setMostEngagementInsta(data);
        setMostSubscribersInsta([]);
      });
  };

  // ---------------------------------------------------------------------------------------------------------

  const getMostSubscribersTT = (req, res) => {
    axios
      .get("http://localhost:5000/api/mostSubscribersTTSep")
      .then((response) => {
        let data = response.data;
        setMostSubscribersTT(data);

        setMostLikesTT([]);
        setMostViewsTT([]);
        setMostCommentsTT([]);
        
      });
  };
  const getMostViewsTT = (req, res) => {
    axios.get("http://localhost:5000/api/mostViewsTTSep").then((response) => {
      let data = response.data;
      setMostViewsTT(data);

      setMostLikesTT([]);
      setMostSubscribersTT([]);
      setMostCommentsTT([]);
      // setMostPopucategory(data);
    });
  };
  const getMostLikesTT = (req, res) => {
    axios.get("http://localhost:5000/api/mostLikesTTSep").then((response) => {
      let data = response.data;
      setMostLikesTT(data);

      setMostSubscribersTT([]);
      setMostViewsTT([]);
      setMostCommentsTT([]);
    });
  };
  const getMostCommentsTT = (req, res) => {
    axios
      .get("http://localhost:5000/api/mostCommentsTTSep")
      .then((response) => {
        let data = response.data;
        setMostCommentsTT(data);

        setMostLikesTT([]);
        setMostViewsTT([]);
        setMostSubscribersTT([]);
      });
  };

  // define set month to september using states

  // const names = ["James", "John", "Paul", "Ringo", "George"];

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <DropdownButton
            id="dropdown-basic-button"
            title="Select Social Media"
          style={{marginTop: 10}}>
            <Dropdown.Item href="/api/mostLikesYTSep" onClick={setToYT}>
              Youtube
            </Dropdown.Item>{" "}
            {/* Here instead of getMostLikesYt do setMonthToSeptember  */}
            <Dropdown.Item href="#/action-2" onClick={setToInsta}>
              Instagram
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={setToTick}>
              TickTok
            </Dropdown.Item>
          </DropdownButton>
          
        </div>

        {currentSocialMedia === "Youtube" && (
          <div>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostLikesYt}
            >
              MostLikes
            </button>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostCommentsYt}
            >
              MostComments
            </button>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostSubscribersYt}
            >
              MostSubscribers
            </button>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostViewsYt}
            >
              MostViews
            </button>
            {/* <button type="button" class="btn btn-primary" style={{marginTop: 10}} onClick={getMostSubscribersYt}>MostSubscribers</button> */}
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostLandCYt}
            >
              MostLikesandComments
            </button>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getPopularCategoryYt}
            >
              MostPopuCategory
            </button>

        {mostViewsYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Avg Views: {youtuber.AvgViews}</strong>
          </div>
        ))}
        {mostLikesYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Avg Likes: {youtuber.AvgLikes}</strong>
          </div>
        ))}
        {mostLikedAndCommYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Combined Likes And Comments: {youtuber.combinedLikesAndComments}</strong>
          </div>
        ))}
        {mostSubscribersYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Subscribers: {youtuber.Subscribers}</strong>
          </div>
        ))}
        {mostCommentsYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Avg Comments: {youtuber.AvgComments}</strong>
          </div>
        ))}
        {mostPopuCategoryYT.map((youtuber) => (
          <div>
            <strong>{youtuber._id}</strong>
          </div>
        ))}
          </div>
        )}

        {/* --------------------------------------------------------------------------------- */}

        {currentSocialMedia === "Instagram" && (
          <div>
            <DropdownButton
            id="dropdown-basic-button"
            title="Select Category"
            value = {currentCategory}
          style={{marginTop: 10}} onChange={changeHandler}>
            <Dropdown.Item href="/api/mostLikesYTSep" value="Yotube" onClick={() => {
              setCurrentCategory("Yotube")
            }}>
              Youtube
            </Dropdown.Item>{" "}
            {/* Here instead of getMostLikesYt do setMonthToSeptember  */}
            <Dropdown.Item href="#/action-2" value="Instagram" onClick={() => {
              setCurrentCategory("Instagram")
            }}>
              Instagram
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" value="TickTok" onClick={() => {
              setCurrentCategory("TickTok")
            }}>
              TickTok
            </Dropdown.Item>
          </DropdownButton>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostSubscribersIns}
            >
              MostSubscribersIns
            </button>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostEngagementIns}
            >
              MostEngagementIns
            </button>

            {mostSubscribersInsta.map((insta) => (
          <div>
            <strong>Name: {insta.Name}</strong>
            <strong>, Followers: {insta.Subscribers}</strong>
          </div>
        ))}
        {MostEngagementInsta.map((insta) => (
          <div>
            <strong>Name: {insta.Name}</strong>
            <strong>, Engagement: {insta.AuthenticEngagement}</strong>
          </div>
        ))}
          </div>
        )}
        {/* ------------------------------------------------------------------------------------------------ */}

        {currentSocialMedia === "TickTok" && (
          <div>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostSubscribersTT}
            >
              MostSubscribersTT
            </button>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostViewsTT}
            >
              MostViewsTT
            </button>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostLikesTT}
            >
              MostLikesTT
            </button>
            <button
              type="button"
              class="btn btn-primary"
              style={{ margin: 10 }}
              onClick={getMostCommentsTT}
            >
              MostCommentsTT
            </button>

          {mostLikesTT.map((tt) => (
          <div>
            <strong>Name: {tt.Name}</strong>
            <strong>, Avg Likes: {tt.LikesAvg}</strong>
          </div>
        ))}
        {mostCommentsTT.map((tt) => (
          <div>
            <strong>Name: {tt.Name}</strong>
            <strong>, Avg Comments: {tt.CommentsAvg}</strong>
          </div>
        ))}
        {mostViewsTT.map((tt) => (
          <div>
            <strong>Name: {tt.Name}</strong>
            <strong>, Avg Views: {tt.ViewsAvg}</strong>
          </div>
        ))}
        {mostSubscribersTT.map((tt) => (
          <div>
            <strong>Name: {tt.Name}</strong>
            <strong>, Followers: {tt.Subscribers}</strong>
          </div>
        ))}
          </div>
        )}
        {/* <strong>{mostViewsYTSep}</strong> */}
        {/* render most views */}
      </header>
    </div>
  );
}

export default App;
