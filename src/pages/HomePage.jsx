import React from "react";
import "../styles/HomePage.css";
import img1 from "../img/HomePage/School_gril_concept03_Группа 13.png";
import img2 from "../img/HomePage/Sticker_pack03_Group 6.png";
import img3 from "../img/HomePage/School_gril_concept03_Группа 6.png";
import img4 from "../img/HomePage/Sticker_pack02_Группа 10.png";
import img5 from "../img/HomePage/School_gril_concept03_Группа 10.png";
const HomePage = () => {
  return (
    <div id="home">
      <div className="home">
        <div className="home-left">
          <div className="home-left-up">
            <img src={img1} alt="" className="home-left-up-img" />
            <div className="home-left-up-info">
              <button className="home-left-up-info-btn">HOME WORK</button>
              <button className="home-left-up-info-btn">ESSE</button>
              <button className="home-left-up-info-btn">VIDEO LESSON</button>
            </div>
          </div>
          <img src={img2} alt="" className="home-left-down" />
        </div>
        {/* right */}
        <div className="home-right">
          <div className="home-right-first">
            <div className="home-right-first-block1">
              <button className="home-right-first-block1-btn">
                Start lesson
              </button>
              <img src={img3} alt="" className="home-right-first-block1-img" />
            </div>
            <div className="home-right-first-block2"></div>
          </div>
          <div className="home-right-second">
            <div className="home-right-second-block"></div>
          </div>
          <div className="home-right-third">
            <div className="home-right-third-block1">
              <div className="home-right-third-block1-text">BALANCE:</div>
              <img src={img4} alt="" className="home-right-third-block1-img" />
            </div>
            <div className="home-right-third-block2">
              <div className="home-right-third-block2-text">GACHI WORDS</div>
              <img src={img5} alt="" className="home-right-third-block2-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
