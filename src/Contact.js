import React, { Component } from "react";
import planet from "./image/planet.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="head">
        <main>
          <h1 className="contact">Contact Us</h1>
          <img src={planet} className="planet-image" alt="project" />
          <div className="britannica">
            <p>
              Thank you for visiting our corporate site. Britannica Group is a
              global leader in education whose flagship product serve the needs
              of students and consumers on multiple plateforms and devices. We
              have been a pioneer in digital learning since the 1980s and a
              purveyor of facts since 1768. The company today serve the needs of
              students, lifelong learners, and professionals by providing
              curriculum products, language-study courses, digital
              encyclopedias, and professionals readiness trianing through
              Encyclopedia Britannica, Britannica Digital Learning, Britannica
              Knowledge Systems, Merriam-Webster, Melingo, and Angie & Tony.
            </p>
            <br />
            <p>
              Our headquarters are located in Chicago, IL, United States with
              office locations across the globe.
            </p>
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
          <p className="addres">
            I want to use this opportunity to appreciate all those who
            contributed in the growth of the organisation
          </p>
        </main>
      </div>
    );
  }
}

export default Contact;
