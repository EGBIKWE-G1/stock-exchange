import React, { Component } from "react";
import weather from "./image/weather.jpg";
import weathers from "./image/weathers.jpg";
import covid from "./image/covid.png";
import bulk from "./image/bulk.png";
import agro from "./image/agro.png";
import platform from "./image/platform.jpg";

class Projects extends Component {
  render() {
    return (
      <main className="head">
        <h1 className="project-h1">The Projects</h1>
        <div className="project">
          <div className="project–head">
            <img src={weather} className="project-image" alt="project" />
            <p className="project-para">
              Egbikwe Godwin The Weather Project 2020
              <br />© Lagos, Nigeria.
            </p>
          </div>
        </div>
        <div className="weather–view">
          <h1>The weather</h1>
          <p className="weather–viewpara">
            {" "}
            Eliasson views the weather – wind, rain, sun – as one of the few
            fundamental encounters with
            <br /> nature that can still be experienced in the city. He is also
            interested in how the weather shapes <br />a city and, in turn, how
            the city itself becomes a filter through which to experience the{" "}
            <br />
            weather. Eliasson has said.
          </p>
          <br />
          <p className="city-para">
            Every city mediates its own weather. As inhabitants, we have grown
            accustomed to the weather as <br />
            mediated by the city. This takes place in numerous ways, on various
            collective levels ranging <br />
            from hyper-mediated (or representational) experiences, such as the
            television weather <br />
            forecast, to more direct and tangible experiences, like simply
            getting wet while walking down the <br />
            street on a rainy day. A level between the two extremes would be
            sitting inside, looking out <br />
            of a window onto a sunny or rainy street. The window, as the
            boundary of one’s tactile <br />
            engagement with the outside, mediates one’s experience of the
            exterior weather accordingly.
          </p>
          <p className="cityy-para">
            In The Weather Project, Eliasson has sought to bring a part of
            London into the building, and through <br /> the experience and
            memory of the work, a part of it is taken back out into the city by
            the viewer.
          </p>
        </div>
        <div className="experience">
          <h1>Experiencing the work</h1>
          <p className="experiencepara">
            This project is linked to Eliasson’s fascination with the way
            museums mediate the reception of art. In a museum, visitors are
            offered an array of information before they even see a work of art –
            from the marketing poster and press reviews to the interpretation
            text panel on the walls of the gallery. Eliasson recognises that
            this information influences the experience and understanding of the
            work. In this project he decided to direct these less overt aspects
            of making an exhibition, so that the experience of the work would be
            left as unscathed as possible for the viewer. He conducted a survey
            of staff at the museum, posing a series of questions ranging from
            the everyday to the abstract (‘How often do you discuss the
            weather?’, ‘Do you think the idea of the weather in our society is
            based on nature or culture?’). The statistical data gathered from
            this study was then used in the promotional campaign for the
            exhibition. Instead of photographs of the work, simple statements
            about the weather can be seen on advertisements in magazines, taxis
            or on the internet. Eliasson carefully chose information which would
            not prejudice or influence the visitor’s expectation of the work of
            art: ‘I think there is often a discrepancy between the experience of
            seeing and the knowledge or expectation of what we are seeing’.
          </p>
          <img src={weathers} className="project-image" alt="project" />
          <div className="project–heads">
            <p className="project-paras">
              Egbikwe Godwin The Weather Project 2020
              <br />© Lagos, Nigeria.
            </p>
          </div>
          <p className="cityy-para">
            The way in which Eliasson’s works harness the precarious and
            fleeting aspects of the natural world might initially evoke the
            spiritual and emotional attachment to nature found in the Romantic
            tradition. Yet the transcendent experience at the core of this
            tradition is disrupted in Eliasson’s work by exposing the structure
            and apparatus delivering the installation: ‘The benefit in
            disclosing the means with which I am working is that it enables the
            viewer to understand the experience itself as a construction and so,
            to a higher extent, allow them to question and evaluate the impact
            this experience has on them.’ For this reason, as well as Eliasson’s
            subversive engagement with the construct of the museum, in The
            Weather Project there is the opportunity to walk behind ‘sun’ to see
            the sub-structure and electrical wiring, as well as the machines
            distributing the fine mist.
          </p>
          <p className="cityy-para">
            Eliasson’s impressive installation draws attention to the
            fundamental act of perceiving the world around us. But, like the
            weather, our perceptions are in a continual state of flux. The
            dynamic variations in the composition of the ephemeral elements of
            The Weather Project parallel the unpredictability of the weather
            outside, which despite the efforts and sabotage of humankind still
            remains beyond our control.
          </p>
          <div className="covid">
            <img src={covid} className="covid-image" alt="project" />
            <p className="covid-para">
              26 Mar 2020 <br />
              <br />
              <span className="spans">TEAM&COMPANY , WEATHER</span>
              <br />
              <br />
              <h3>OPENWEATHER LTD HELPS THE FIGHT TO OVERCOME COVID-19 </h3>
              <br />
              During these unprecedented times we want to contribute and help
              companies that analyse <br /> data corresponding to research to
              help find a cure towards the battle of Covid-19. We want <br /> to
              provide you with free access to historical weat...
            </p>
          </div>
          <div className="covid">
            <img src={bulk} className="covid-image" alt="project" />
            <p className="covid-para">
              19 Mar 2020 <br />
              <br />
              <span className="spans"> TEAM&COMPANY , WEATHER </span>
              <br />
              <br />
              <h3>
                New feature in Bulk Downloading: Now you can get bulk files for
                the previous seven days
              </h3>
              <br />
              We have added new functionality to Bulk Downloading. The main idea
              of this product is to <br />
              allow you to regularly download batches of current weather and
              forecast data for more than <br /> 200,000 locations at once via a
              JSON file....
            </p>
          </div>
          <div className="covid">
            <img src={agro} className="covid-image" alt="project" />
            <p className="covid-para">
              02 Jan 2020 <br /> <br />
              <span className="spans">
                AGRO , PLATFORM , TEAM&COMPANY , TECHNOLOGIES , WEATHER
              </span>
              <br />
              <br />
              <h3>
                OpenWeather 2019: results of the year. Historical weather data,
                Weather API, <br /> Agro Dashboard
              </h3>
              <br />
              So, the new 2020 is nearly upon us and it is time to sum up what
              we have done in 2019....
            </p>
          </div>
          <div className="covid">
            <img src={platform} className="covid-image" alt="project" />
            <p className="covid-para">
              22 Jan 2019
              <br />
              <br />
              <span className="spans">
                AGRO , PLATFORM , TEAM&COMPANY , TECHNOLOGIES , WEATHER
              </span>
              <br />
              <br />
              <h3>
                OpenWeather 2018: Results of the year: Agricultural, Satellite
                imagery and Weather API
              </h3>
              <br /> <br /> So, the new year 2019 has come and it’s time to sum
              up the results of the past year for our
              <br />
              company, OpenWeatherMap, provider of one of the best weather APIs
              in the world....
            </p>
          </div>
          <p className="copy">copyright&copy;2020</p>
        </div>
      </main>
    );
  }
}

export default Projects;
