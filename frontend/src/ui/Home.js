import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Navigation } from "./Navigation";
// import MapFunction from "./Map";
import profileImage from "./icons/profile-image.jpeg";
import hopeworksLogo from "./icons/hopeworks-logo.png";
import nmcanLogo from "./icons/nmcan-logo.png";

export const Home = () => {
  return (
    <>
      <Container fluid id="home-banner">
        <Row>
          <Col md={5} id="profile-image-col">
            <Image
              fluid
              id="profile-image-homepage"
              src={profileImage}
              alt="Homepage Profile Image"
            />
          </Col>
          <Col md={7} id="banner-text-col">
            <p>
              <i>Hi, I'm</i>
            </p>
            <h1>Kayla Strickler</h1>
          </Col>
        </Row>
      </Container>
      {/* <Navigation /> */}
      <Container id="about-me-container">
        <Row>
          <Col md={12}>
            <p className="mt-3 me-5">
              In town the earliest risers were just beginning to look sleepily
              from their windows as we drove through the streets of the Surrey
              side. Passing down the Waterloo Bridge Road we crossed over the
              river, and dashing up Wellington Street wheeled sharply to the
              right and found ourselves in Bow Street. Sherlock Holmes was well
              known to the force, and the two constables at the door saluted
              him. One of them held the horse's head while the other led us in.
            </p>
          </Col>
        </Row>
      </Container>

      <hr />
      <div id="resume">
        <Container id="resume-container">
          <Row>
            <Col md={12} className="text-center pb-5">
              <h3>My journey</h3>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <Image
              fluid
              id="work-logos"
              src={hopeworksLogo}
              alt="HopeWorks"
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Image
              fluid
              id="work-logos"
              src={nmcanLogo}
              alt="HopeWorks"
            />
            </Col>
            <Col md={6}>
              <h4>Senior Development and Communications Officer</h4>
              <p>
                <a href="https://www.hopeworksnm.org/">Hopeworks</a> (<i>Albuquerque, NM</i>)<br /> July 2021-present
              </p>
              <br />
              <p>
                Manages grants and contracts by preparing and submitting
                applications, facilitating program collaboration and data
                collection, and tracking and meeting all reporting requirements
                for both new and known government, corporate, and foundation
                funding leads.
              </p>
              <br />
              <h4>Community Engagement Coordinator</h4>
              <p>
                NMCAN (<i>Albuquerque, NM</i>)<br /> January 2019-June 2021
              </p>
              <br />
              <p>
                Cultivated relationships across diverse communities to provide
                new opportunities for youth impacted by systems for housing,
                education, employment, financial capability, health/mental
                health, social capital, and permanence that are responsive to
                their cultures and identities.
              </p>
              <br />
              <h4>International Humanitarian Aid Volunteer</h4>
              <p>
                The World Race (<i>Asia, Africa, and South America</i>)<br />{" "}
                June 2017-June 2018
              </p>
              <br />
              <p>
                Worked extensively with locally-based NGOs for one month each in
                India, Nepal, Thailand, Cambodia, Vietnam, Ethiopia, Rwanda,
                Bolivia, Peru, Ecuador, and Colombia. Emphasized sustainability
                regarding work done with people and communities living below the
                global poverty line.
              </p>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col md={12} className="text-center">
              <h3>Education</h3>
            </Col>
            </Row>
            <Row>
              <Col md={6} className="text-center">
              <h4>University of New Mexico</h4>
              <p>
                Bachelor of Arts <br /> Communication, Religious Studies / Spring 2017
              </p>
              </Col>
              <Col md={6}  className="text-center">
                <h4>Santa Fe Community College</h4>
                <p>Certificate <br /> American Sign Language / Spring 2022</p>
              </Col>
    
          </Row>
          <Row>
            <Col md={12} id="button-col">
              <button id="resume-button">Download Full Resume</button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col id="contact">
            <hr />
            <p>To get in touch, email kstrickler@hopeworksnm.org</p>
            <hr />
          </Col>
        </Row>
      </Container>

      {/* <MapFunction/> */}
    </>
  );
};
