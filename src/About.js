import React, { Component } from "react";
import noaa from "./image/noaa.png";
import ventusky from "./image/ventusky.jpg";
import washington from "./image/washington.png";
import liberation from "./image/liberation.png";
import metro from "./image/metro.png";
import lifehacker from "./image/lifehacker.png";
import dailymail from "./image/dailymail.png";
import quartz from "./image/quartz.png";

class About extends Component {
  render() {
    return (
      <main className="head">
        <h1 className="about">About us</h1>
        <p className="about-para">
          The Ventusky web application has been developed for you at our
          company, <span>InMeteo</span>, in collaboration with{" "}
          <pan>Marek Mojzík</pan> and Martin Prantl. We are a Czech
          meteorological company based in Pilsen. At our company, we focus on
          weather prediction and meteorological data visualisation. We have a
          wealth of experience in presenting weather data from our portal,
          <span>In-počasí</span>, which was founded in 2006 and is now one of
          the highest-traffic servers in the Czech <span>Republic</span>. We
          decided to take advantage of our knowledge and experience and create a
          top-quality application that clearly displays meteorological data from
          around the world and allows you to monitor weather development for any
          place on earth. The Earth's weather functions as an interdependent
          system. For example, a hurricane in the Atlantic has the ability to
          influence the distribution of pressure formations in <spa>Europe</spa>
          . Occasionally, it may even make its way to Europe itself as a
          post-tropical storm. The
          <span>Ventusky application</span> allows for the illustration of the
          interdependence of the entire system, displaying the development of
          pressure, wind, cloud cover, precipitation, and temperature on the
          map. For visualisation of wind data, we utilise current lines that are
          used to illustrate the movement of particles in liquids. Air and
          liquid have many similar physical properties, and, as published by
          Fernanda Viégas and Martin Wattenber (Hint.fm, 2012), current lines
          are suitable for illustrating wind as well. Because of this, the map
          depicts wonderful formations illustrating pressure lows that draw in
          the air around them. We have created an entirely new system of
          displaying waves. Through the use of animated arcs, our visualisation
          clearly differentiates the direction of movement and height of both
          wind waves and swells. For the other meteorological elements, we chose
          colour scales that appropriately illustrate precipitation, air
          pressure, and temperature. The colours correspond with the feeling
          that the given weather phenomena evokes in us. For temperature, blue
          illustrates cool weather while dark red depicts hot desert air. For
          precipitation, we concentrated on the danger associated with it. Blue
          colours represent low precipitation totals that will not result in
          floods. Orange and red hues, on the other hand, are dangerous and may
          bring flooding. The name itself, <span>Ventusky</span>, is a
          combination of two words. The first is the Latin word, Ventus, means
          wind, and the second is the English word, Sky. The Ventusky
          application is accessible to anyone around the world, aimed at
          improving awareness about meteorological events in our atmosphere.
          Images from the application can be redistributed with source and thus
          help us achieve our goal.
        </p>
        <div>
          <div className="noaa">
            <p className="data">DATA SOURCES</p>
            <img src={noaa} className="noaa-image" alt="" />
          </div>
          <p className="noaa-para">
            The main provider of meteorological data for Ventusky
            <br />
            is DWD and NOAA. However, the radar layers have several <br /> other
            country-specific sources. All used sources are <br /> sumarized on
            the page <span>Data sources</span>.
          </p>
        </div>
        <div>
          <div className="ventusky">
            <p className="help">HELP</p>
            <img src={ventusky} className="ventusky-image" alt=" " />
          </div>
          <p className="ventusky-para">
            The following is some information and a <br />
            number of tips that will be useful when using <br />
            the Ventusky application.<span>Show</span>
          </p>
        </div>
        <div>
          <img src={washington} className="washington-image" alt=" " />
          <img src={liberation} className="liberation-image" alt="" />
          <img src={metro} className="metro-image" alt="" />

          <img src={lifehacker} className="lifehacker" alt="" />
          <img src={dailymail} className="dailymail" alt="" />
          <img src={quartz} className="quartz" alt="" />
        </div>
        <div className="contactaddress">
          <span className="address">CONTACT & Address:</span>
          <br />
          37 Idimu road
          <br />
          EJigbo Lagos
          <br />
          State Nigeria.
        </div>
        <div className="email">
          <span className="address">E-mail:</span>
          <br />
          godwinprofessional@gmail.com
          <br />
          08180410817/08125399299
        </div>
      </main>
    );
  }
}

export default About;
