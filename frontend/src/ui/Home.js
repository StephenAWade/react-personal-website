import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Navigation } from "./Navigation";
// import MapFunction from "./Map";
import profileImage from "./icons/profile-image.jpeg";

export const Home = () => {
  return (
    <>
      <Container id="homepage-container">
        <Container fluid id="home-banner">
          <h1>Kayla Strickler</h1>
        </Container>
        <Navigation />
        <Container id="about-me-container">
          <Row>
            <Col md={4} id="profile-image-col">
              <Image
                fluid
                id="profile-image-homepage"
                src={profileImage}
                alt="Homepage Profile Image"
              />
            </Col>
            <Col md={8}>
              <p className="mt-3 me-5">
                "It has been in some points a singular case," said Holmes,
                flicking the horse on into a gallop. "I confess that I have been
                as blind as a mole, but it is better to learn wisdom late than
                never to learn it at all."
              </p>
              <p className="mt-3 me-5">
                In town the earliest risers were just beginning to look sleepily
                from their windows as we drove through the streets of the Surrey
                side. Passing down the Waterloo Bridge Road we crossed over the
                river, and dashing up Wellington Street wheeled sharply to the
                right and found ourselves in Bow Street. Sherlock Holmes was
                well known to the force, and the two constables at the door
                saluted him. One of them held the horse's head while the other
                led us in.
              </p>
            </Col>
          </Row>
        </Container>

        <hr />
        <div id="resume">
          <Container id="resume-container">
            <Row>
              <Col md={5}>
                <h5>&mdash;Work Experience</h5>
              </Col>
              <Col md={7}>
                <h4>Senior Development and Communications Officer</h4>
                <p>
                  Hopeworks (<i>Albuquerque, NM</i>)<br /> July 2021-present
                </p>
                <br />
                <p>
                  Manages grants and contracts by preparing and submitting
                  applications, facilitating program collaboration and data
                  collection, and tracking and meeting all reporting
                  requirements for both new and known government, corporate, and
                  foundation funding leads.
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
                  Worked extensively with locally-based NGOs for one month each
                  in India, Nepal, Thailand, Cambodia, Vietnam, Ethiopia,
                  Rwanda, Bolivia, Peru, Ecuador, and Colombia. Emphasized
                  sustainability regarding work done with people and communities
                  living below the global poverty line.
                </p>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md={5}>
                <h5>&mdash;Education</h5>
              </Col>
              <Col ol md={7}>
                <h4>University of New Mexico</h4>
                <p>
                  Bachelor of Arts, Communication; Religious Studies / Spring
                  2017
                </p>
                <br />
                <h4>Santa Fe Community College</h4>
                <p>Certificate, American Sign Language / Spring 2022</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}id="button-col">
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
      </Container>
    </>
  );
};
