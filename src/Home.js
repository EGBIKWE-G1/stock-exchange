import React, { useState } from "react";
import nigeriasatellite from "./image/nigeria satellite.jpg";
import hurricane from "./image/hurricane.png";
import building from "./image/building.png";
import Josephine from "./image/Josephine.gif";
import forest from "./image/forest.jpg";
import severe from "./image/severe.jpg";
import atlantic from "./image/atlantic.jpg";
import arrow from "./image/arrow.png";
import arrows from "./image/arrows.png";
import arrowss from "./image/arrowss.png";
import arrowsss from "./image/arrowsss.png";
import tv from "./image/tv.svg";
import fbook from "./image/fbook.svg";
import circle from "./image/circle.svg";
import bird from "./image/bird.svg";

const api = {
  key: "9e33ed3691bf71132f8100dd8d437a67",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Home() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app nature"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search location zip..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="satellite">
          <p className="satellite-P">NIGERIA SATELLITE</p>
          <img src={nigeriasatellite} className="site" alt="" />
          <p className="satellite-P">SEE INTERACTIVE MAP</p>
        </div>
        <div className="good">
          <a
            className="blocktext"
            href="https://www.accuweather.com/en/severe-weather/derechos-hurricane-force-winds-damaged-10-million-acres-of-crops-in-iowa/794157"
          >
            Derecho's <br /> hurricane-force <br /> winds damaged 10 <br />{" "}
            million acres of <br /> crops in lowa <br />
            <p className="good-time">AUG.13,2020</p>
          </a>{" "}
          <img src={hurricane} className="displayed" alt="" />
        </div>
        <div className="build">
          <img src={building} className="building" alt="thunder light" />
          <div className="sky">
            <a
              className="link"
              href="https://www.accuweather.com/en/severe-weather/rare-bolt-from-the-blue-lightning-strike-caught-on-truck-dash-cam/794466"
            >
              <p className="parlink">
                {" "}
                Rare 'bolt from the blue' lightning <br />
                strike caught on truck dash cam{" "}
              </p>
              <br />
              The weather seemed tranquil. Puffy white
              <br />
              clouds floated by a splendid blue summer <br />
              sky. Then, seemingly out of nowhere -- <br /> boom! Watch ... and
              listen.{" "}
            </a>
          </div>
          <br />
          <br />
          <a
            className="readlink"
            href=" https://www.accuweather.com/en/severe-weather/rare-bolt-from-the-blue-lightning-strike-caught-on-truck-dash-cam/794466"
          >
            READ MORE
          </a>
        </div>
        <div className="WEATHER-NEWS">
          <p className="news">WEATHER NEWS</p>
          <div className="hurrine">
            <img src={Josephine} className="hurricane-image" alt="" />
            <a
              className="weather-para"
              href="https://www.accuweather.com/en/hurricane/tropical-storm-josephine-to-brush-leeward-islands-in-atlantic/794405"
            >
              hurricane
              <p className="hurrine-para">
                {" "}
                Tropical Storm Josephine <br />
                to brush Leeward Islands
              </p>
              <p className="weather-date">Aug 13, 2020</p>
            </a>
          </div>
        </div>
        <div className="forest">
          <img src={forest} className="forest-image" alt="weather news" />
          <div className="head-forest">
            <a
              className="forest-para"
              href="https://www.accuweather.com/en/weather-news/brush-fires-prompt-mandatory-evacuations-near-la/794900"
            >
              WEATHER NEWS
              <p className="forest-path">
                brush fires prompt mandatory <br /> evacuations near LA
              </p>
              <p className="forest-date">Aug 13, 2020</p>
            </a>
          </div>
        </div>
        <div className="severe">
          <img src={severe} className="severe-image" alt="severe weather" />
          <div className="head-severe">
            <a
              className="severe-para"
              href="https://www.accuweather.com/en/severe-weather/downpours-continue-to-threaten-flooding-across-mid-atlantic-southeast-this-weekend/795732"
            >
              SEVERE WEATHER
              <br />
              <p className="severe-path">
                Downpours continue to <br />
                threaten flooding across
                <br />
                mid-Atlantic.....
                <br />
              </p>
              <p className="severe-date">Aug. 15, 2020</p>
            </a>
          </div>
        </div>
        <div className="atlantic">
          <img src={atlantic} className="atlantic-image" alt="atlantic Basin" />
          <div className="head-atlantic">
            <a
              className="atlantic-para"
              href="https://www.accuweather.com/en/hurricane/tropical-storm-kyle-joins-josephine-in-atlantic-basin/795462"
            >
              Tropical Storm Kyle joins Josephine in <br />
              Atlantic Basin
              <br />
              <p className="atlantic-storm">
                Tropical Storm Kyle
                <br /> becomes the latest storm in the 2020
                <br /> Atlantic hurricane season to set a new
                <br /> record.
                <br />
              </p>
              <p className="atlantic-readmore">READ MORE</p>
            </a>
          </div>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>
                World
                <img src={arrow} className="arrow" alt="arrow" />
              </th>
              <th>
                Africa
                <img src={arrows} className="arrow" alt="arrow" />
              </th>
              <th>
                Nigeria
                <img src={arrowss} className="arrow" alt="arrow" />
              </th>
              <th>
                Lagos
                <img src={arrowsss} className="arrow" alt="arrow" />
              </th>
              <th>Lekki</th>
            </tr>
          </table>
        </div>
        <br />
        <br />
        <br />
        <hr></hr>
        <p className="accuwrather">
          © 2020 AccuWeather, Inc. "AccuWeather" and sun design are registered
          trademarks of AccuWeather, Inc. All Rights Reserved.
        </p>
        <img src={tv} className="logos" alt="arrow" />
        <img src={fbook} className="logoo" alt="arrow" />
        <img src={circle} className="logos" alt="arrow" />
        <img src={bird} className="logoss" alt="arrow" />

        <p className="team">
          Terms of Use | Privacy Policy | Cookie Policy | TAG Disclosure
        </p>
      </main>
    </div>
  );
}

export default Home;
