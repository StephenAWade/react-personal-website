import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Navigation } from "./Navigation";
// import MapFunction from "./Map";
import profileImage from "./icons/profile-image.jpeg";
import hopeworksLogo from "./icons/hopeworks-logo.png";
import nmcanLogo from "./icons/nmcan-logo.png";
import goldenApple from "./icons/golden-apple-logo.png";
import unitedWay from "./icons/united-way-logo.png";
import riograndeFoodProject from "./icons/rio-grande-food-project.jpeg";
import washingMachine from "./icons/washing-machine.jpg";
import laundryLoveLogo from "./icons/laundry-love-logo-2.png";
import worldraceLogo from "./icons/world-race-logo-2.png";
import placeholderMap from "./icons/placeholder-map.jpeg";

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
            <Col md={12} id="section-title" className="text-center">
              <h1>My journey</h1>
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
            </Col>
            <Col>
              <h4>Senior Development and Communications Officer</h4>
              <p>
                <a href="https://www.hopeworksnm.org/">Hopeworks</a> (
                <i>Albuquerque, NM</i>)<br /> July 2021-present
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
            </Col>

            <Col md={6}>
              <Image fluid 
              id="work-logos" 
              src={nmcanLogo} 
              alt="NMCAN logo" />
            </Col>
            <Col md={6}>
              <h4>Community Engagement Coordinator</h4>
              <p>
                <a href="https://nmcan.org/">NMCAN</a>(<i>Albuquerque, NM</i>)
                <br /> January 2019-June 2021
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
            </Col>

            <Col md={6}>
              <Image
                fluid
                id="work-logos"
                src={goldenApple}
                alt="Golden Apple Logo"
              />
            </Col>
            <Col md={6}>
              <h4>Communications Specialist</h4>
              <p>
                <a href="https://goldenapplenm.org/">
                  Golden Apple Foundation of New Mexico
                </a>
                (<i>Albuquerque, NM</i>)<br /> Fall 2015-Fall 2016
              </p>
              <br />
              <p>
                Wrote and distributed poignant press releases to all major and
                minor state publications, and expanded organization’s online
                presence on social media (with Facebook following surpassing a
                growth of 400%)
              </p>
              <br />
            </Col>
            <Col md={6}>
              <Image
                fluid
                id="work-logos"
                src={unitedWay}
                alt="United Way Logo"
              />
            </Col>
            <Col md={6}>
              <h4>Community Relations Intern</h4>
              <p>
                <a href="https://www.unitedwaydenton.org/">
                  United Way Denton County 
                </a>
                 (<i>Denton, TX</i>)<br /> Fall 2014
              </p>
              <br />
              <p>
                Maintained comprehensive database of community partner
                organizations and increased awareness in the community of United
                Way’s services and opportunities
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid id="food-project-container">
          <Row>
            <Col md={12} id="section-title" className="text-center">
              <h1>
                Rio Grande Food Project <br />(<i>Albuquerque, NM</i>)
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <h4>Director</h4>
              <p>September 2022-present</p>
              <hr />
              <h4>Board Member</h4>
              <p>January 2021-September 2022</p>
              <br />
              <p>
                Worked extensively with locally-based NGOs for one month each in
                India, Nepal, Thailand, Cambodia, Vietnam, Ethiopia, Rwanda,
                Bolivia, Peru, Ecuador, and Colombia. Emphasized sustainability
                regarding work done with people and communities living below the
                global poverty line.
              </p>
              <Image
                fluid
                id="work-logos"
                src={riograndeFoodProject}
                alt="Rio Grande Food Project"
              />
            </Col>
            <Col md={5} id="donate-button-col">
              <iframe
                id="food-project-video"
                src="https://www.youtube.com/embed/vXHT8Fxl780"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br />
              <button id="donate-button" className="text-center">
                Donate Today
              </button>
            </Col>
          </Row>
          <Container id="laundry-love-container">
            <Row>
              <Col md={12} id="section-title" className="text-center">
                <h1>
                  Laundry Love <br />(<i>Albuquerque, NM</i>)
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={7}>
                <h4>Co-Lead</h4>
                <p>June 2021-present</p>
                <br />
                <p>
                  Worked extensively with locally-based NGOs for one month each
                  in India, Nepal, Thailand, Cambodia, Vietnam, Ethiopia,
                  Rwanda, Bolivia, Peru, Ecuador, and Colombia. Emphasized
                  sustainability regarding work done with people and communities
                  living below the global poverty line.
                </p>
                <Image
                  fluid
                  id="laundry-love-logo"
                  src={laundryLoveLogo}
                  alt="Rio Grande Food Project"
                />
              </Col>
              <Col md={5}>
                <Image
                  fluid
                  id="washing-machine-image"
                  src={washingMachine}
                  alt="Washing Machine"
                />
              </Col>
            </Row>
          </Container>
          <Row>
            <Col md={12} id="section-title" className="text-center">
              <h1>
                The World Race <br /> (<i>Asia, Africa, and South America</i>)
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <h4>International Humanitarian Aid Volunteer</h4>
              <p>June 2017-June 2018</p>
              <br />
              <p>
                Worked extensively with locally-based NGOs for one month each in
                India, Nepal, Thailand, Cambodia, Vietnam, Ethiopia, Rwanda,
                Bolivia, Peru, Ecuador, and Colombia. Emphasized sustainability
                regarding work done with people and communities living below the
                global poverty line.
              </p>
              <Image
                fluid
                id="work-logos"
                src={worldraceLogo}
                alt="Washing Machine"
              />
            </Col>
            <Col md={6}>
              <Image
                fluid
                id="placeholderMap"
                src={placeholderMap}
                alt="Placeholder Map"
              />
              <p>
                Worked extensively with locally-based NGOs for one month each in
                India, Nepal, Thailand, Cambodia, Vietnam, Ethiopia, Rwanda,
                Bolivia, Peru, Ecuador, and Colombia. Emphasized sustainability
                regarding work done with people and communities living below the
                global poverty line.
              </p>
            </Col>
          </Row>
        </Container>

        <Container id="education-container">
          <Row>
            <Col md={12} className="text-center">
              <h1>Education</h1>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="text-center">
              <h4>University of New Mexico</h4>
              <p>
                Bachelor of Arts <br /> Communication, Religious Studies /
                Spring 2017
              </p>
            </Col>
            <Col md={6} className="text-center">
              <h4>Santa Fe Community College</h4>
              <p>
                Certificate <br /> American Sign Language / Spring 2022
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} id="button-col">
              <button id="resume-button">Download Full Resume</button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container id="contact-container" className="text-center">
        <Row>
          <Col md={12}>
          <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col id="contact" >
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
