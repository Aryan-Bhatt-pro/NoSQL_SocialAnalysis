import logo from "./logo.svg";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import "./App.css";
import Chart from "chart.js/auto";
import Dropdown from "react-bootstrap/Dropdown";
import PieChartCommentsTT from "./PiechartCommentsTT";
import PieChartViewsTT from "./PieChartViewsTT";
import PieChartViewsYT from "./PiechartViewsYT";
import PieChartLikesYT from "./PiechartLikesYT";
import PieChartCommentsYT from "./PieChartCommentsYT";
import PieChartSubscribersYT from "./PieChartSubscribersYT";
import PieChartLandCYT from "./PiechartLandCYT";
import PieChartPopuCategoryYT from "./PiechartPopuCategoryYT";
import PieChartSubscribersInsta from "./PiechartSubscribersInsta";
import PieChartEngInsta from "./PieChartEngInsta";
import PieChartSubscribersTT from "./PieChartSubscribersTT";
import PieChartLikesTT from "./PieChartLikesTT";

// import {My_Button} from "./My_Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
// import org.json.JSONObject;

import axios from "axios";
// import { response } from "express";
// import { set } from "mongoose";

function App() {

  const chartRef = useRef(null);
    // youtube states
  const [mostLikesYTSep, setMostLikesYTSep] = useState([]);
  const [mostCommentsYTSep, setMostCommentsYTSep] = useState([]);
  const [mostSubscribersYTSep, setMostSubscribersYTSep] = useState([]);
  const [mostViewsYTSep, setMostViewsYTSep] = useState([]);
  const [mostLikedAndCommYTSep, setMostLikedAndCommYTSep] = useState([]);
  const [mostPopuCategoryYT, setMostPopucategoryYT] = useState([]);


  const [currentCategory, setCurrentCategory] = useState('All')
  const [chartData, setChartData] = useState(null);
  
  
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
    axios.post("http://localhost:5000/api/mostLandCYTSep", {currentCategory}).then((response) => {
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
    axios.post("http://localhost:5000/api/mostCommentsYTSep", {currentCategory}).then((response) => {
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
    axios.post("http://localhost:5000/api/mostSubscribersYTSep", {currentCategory}).then((response) => {
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
    var startTime = new Date().getTime();
    axios.post("http://localhost:5000/api/mostViewsYTSep",{currentCategory}).then((response) => {
      let data = response.data;

      var endTime = new Date().getTime();
      var duration = endTime - startTime;
      console.log('Request took', duration, 'milliseconds');

      setMostViewsYTSep(data);
      

      setMostLikesYTSep([]);
      setMostSubscribersYTSep([]);
      setMostLikedAndCommYTSep([]);
      setMostCommentsYTSep([])
      setMostPopucategoryYT([]);


    });
  };
  const getPopularCategoryYt = (req, res) => {
    var startTime = new Date().getTime();
    axios
      .get("http://localhost:5000/api/popularByCategoryYTSep")
      .then((response) => {

        var endTime = new Date().getTime();
        var duration = endTime - startTime;
        console.log('Request took', duration, 'milliseconds');

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
    var startTime = new Date().getTime();
    axios
      .post("http://localhost:5000/api/mostSubscribersInsSep", {currentCategory})
      .then((response) => {
        let data = response.data;

        var endTime = new Date().getTime();
        var duration = endTime - startTime;
        console.log('Request took', duration, 'milliseconds');

        setMostSubscribersInsta(data);
        setMostEngagementInsta([]);
      });
  };
  const getMostEngagementIns = (req, res) => {
    var startTime = new Date().getTime();
    axios
      .post("http://localhost:5000/api/mostEngagementInsSep", {currentCategory})
      .then((response) => {
        let data = response.data;
        
        var endTime = new Date().getTime();
        var duration = endTime - startTime;
        console.log('Request took', duration, 'milliseconds');

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
    var startTime = new Date().getTime();
    axios.get("http://localhost:5000/api/mostViewsTTSep").then((response) => {
      let data = response.data;
      setMostViewsTT(data);

      
      var endTime = new Date().getTime();
      var duration = endTime - startTime;
      console.log('Request took', duration, 'milliseconds');

      setMostLikesTT([]);
      setMostSubscribersTT([]);
      setMostCommentsTT([]);
      // setChartData(null);
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
    var startTime = new Date().getTime(); 
    axios
      .get("http://localhost:5000/api/mostCommentsTTSep")
      .then((response) => {
        let data = response.data;
        setMostCommentsTT(data);
        setChartData(data);

        
        var endTime = new Date().getTime();
        var duration = endTime - startTime;
        console.log('Request took', duration, 'milliseconds');

        setMostLikesTT([]);
        setMostViewsTT([]);
        setMostSubscribersTT([]);
        setChartData(null)
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

        

        {/* Music & Dance
            Movies
            Animation 
            Video games
            News & Politics */}

        {currentSocialMedia === "Youtube" && (
          <div>
            <DropdownButton
            id="dropdown-basic-button"
            title="Select Category"
            value = {currentCategory}
              style={{ marginTop: 10 }} onChange={changeHandler}>

            <Dropdown.Item href="#/action-1" value="All" onClick={() => {
              setCurrentCategory("All")
            }}>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" value="Music & Dance" onClick={() => {
              setCurrentCategory("Music & Dance")
            }}>
              Music & Dance
            </Dropdown.Item>
            
            <Dropdown.Item href="#/action-3" value="Movies" onClick={() => {
              setCurrentCategory("Movies")
            }}>
              Movies
            </Dropdown.Item>
            {/* Here instead of getMostLikesYt do setMonthToSeptember  */}
            <Dropdown.Item href="#/action-4" value="Animation" onClick={() => {
              setCurrentCategory("Animation")
            }}>
              Animation
            </Dropdown.Item>
            <Dropdown.Item href="#/action-5" value="Video games" onClick={() => {
              setCurrentCategory("Video games")
            }}>
              Video games
            </Dropdown.Item>
            <Dropdown.Item href="#/action-6" value="News & Politics" onClick={() => {
              setCurrentCategory("News & Politics")
            }}>
              News & Politics
            </Dropdown.Item>
            </DropdownButton>



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
        {mostViewsYTSep.length > 0 && <PieChartViewsYT chartData={mostViewsYTSep} />}
        {mostLikesYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Avg Likes: {youtuber.AvgLikes}</strong>
          </div>
        ))}
        {mostLikesYTSep.length > 0 && <PieChartLikesYT chartData={mostLikesYTSep} />}
        {mostLikedAndCommYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Combined Likes And Comments: {youtuber.combinedLikesAndComments}</strong>
          </div>
        ))}
        {mostLikedAndCommYTSep.length > 0 && <PieChartLandCYT chartData={mostLikedAndCommYTSep} />}
        {mostSubscribersYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Subscribers: {youtuber.Subscribers}</strong>
          </div>
        ))}
        {mostSubscribersYTSep.length > 0 && <PieChartSubscribersYT chartData={mostSubscribersYTSep} />}
        {mostCommentsYTSep.map((youtuber) => (
          <div>
            <strong>Youtuber: {youtuber.Youtuber}, </strong>
            <strong>Avg Comments: {youtuber.AvgComments}</strong>
          </div>
        ))}
        {mostCommentsYTSep.length > 0 && <PieChartCommentsYT chartData={mostCommentsYTSep} />}
        {mostPopuCategoryYT.map((youtuber) => (
          <div>
            <strong>Category: {youtuber.Category }</strong>
            <strong>; Channel Count: {youtuber.count }</strong>
          </div>
        ))}
        {mostPopuCategoryYT.length > 0 && <PieChartPopuCategoryYT chartData={mostPopuCategoryYT} />}
          </div>
        )}

        {/* --------------------------------------------------------------------------------- */}

        {currentSocialMedia === "Instagram" && (
          <div>
            <DropdownButton
            id="dropdown-basic-button"
            title="Select Category"
            value = {currentCategory}
              style={{ marginTop: 10 }} onChange={changeHandler}>
              
              {/* Cinema & Actors/actresses
                  Lifestyle
                  Sports with a ball
                  Modeling 
                  Shows */}
              
            <Dropdown.Item href="#/action-1" value="All" onClick={() => {
              setCurrentCategory("All")
            }}>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" value="Cinema & Actors/actresses" onClick={() => {
              setCurrentCategory("Cinema & Actors/actresses")
            }}>
              Cinema & Actors/actresses
            </Dropdown.Item>
            
            <Dropdown.Item href="#/action-3" value="Lifestyle" onClick={() => {
              setCurrentCategory("Lifestyle")
            }}>
              Lifestyle
            </Dropdown.Item>
            {/* Here instead of getMostLikesYt do setMonthToSeptember  */}
            <Dropdown.Item href="#/action-4" value="Sports with a ball" onClick={() => {
              setCurrentCategory("Sports with a ball")
            }}>
              Sports with a ball
            </Dropdown.Item>
            <Dropdown.Item href="#/action-5" value="Modeling" onClick={() => {
              setCurrentCategory("Modeling")
            }}>
              Modeling
            </Dropdown.Item>
            <Dropdown.Item href="#/action-6" value="Shows" onClick={() => {
              setCurrentCategory("Shows")
            }}>
              Shows
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
        {mostSubscribersInsta.length > 0 && <PieChartSubscribersInsta chartData={mostSubscribersInsta} />}
        {MostEngagementInsta.map((insta) => (
          <div>
            <strong>Name: {insta.Name}</strong>
            <strong>, Engagement: {insta.AuthenticEngagement}</strong>
          </div>
        ))}
        {MostEngagementInsta.length > 0 && <PieChartEngInsta chartData={MostEngagementInsta} />}
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
        {mostLikesTT.length > 0 && <PieChartLikesTT chartData={mostLikesTT} />}
        {mostCommentsTT.map((tt) => (
          <div>
            <strong>Name: {tt.Name}</strong>
            <strong>, Avg Comments: {tt.CommentsAvg}</strong>
          </div>
        ))}
        {mostCommentsTT.length > 0 && <PieChartCommentsTT chartData={mostCommentsTT} />}
        
        {mostViewsTT.map((tt) => (
          <div>
            <strong>Name: {tt.Name}</strong>
            <strong>, Avg Views: {tt.ViewsAvg}</strong>
          </div>
        ))}
        {mostViewsTT.length > 0 && <PieChartViewsTT chartData={mostViewsTT} />}
        {mostSubscribersTT.map((tt) => (
          <div>
            <strong>Name: {tt.Name}</strong>
            <strong>, Followers: {tt.Subscribers}</strong>
          </div>
        ))}
        {mostSubscribersTT.length > 0 && <PieChartSubscribersTT chartData={mostSubscribersTT} />}
          </div>
        )}
        {/* <strong>{mostViewsYTSep}</strong> */}
        {/* render most views */}
      </header>
    </div>
  );
}

export default App;
