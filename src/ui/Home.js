import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import profileImage from "./icons/profile-image.jpeg";
import hopeworksLogo from "./icons/hopeworks-logo.png";
import nmcanLogo from "./icons/nmcan-logo.png";
import goldenApple from "./icons/golden-apple-logo-2.png";
import unitedWay from "./icons/united-way-logo.png";
import riograndeFoodProject from "./icons/rio-grande-food-project.jpeg";
import washingMachine from "./icons/washing-machine.jpg";
import laundryLoveLogo from "./icons/laundry-love-logo-2.png";
import worldraceLogo from "./icons/world-race-logo-2.png";
import kaylaWorldRace from "./icons/kayla-world-race.jpg";

// import { Navigation } from "./Navigation";
// // import MapFunction from "./Map";

export const Home = () => {
  return (
    <>
      <Container fluid id="home-banner">
        <Row>
                {/* <Navigation /> */}
          <Col md={5} id="profile-image-col">
            <Image
              fluid
              id="profile-image-homepage"
              src={profileImage}
              alt="Homepage Profile Image"
            />
          </Col>
          <Col md={7} id="banner-text-col">
            <p className="mt-5">
              <i>Hi, I'm</i>
            </p>
            <h1>Kayla Strickler</h1>
            <p className="mt-5">
              Inspired by the unwavering ethics, compassion, and patient,
              thoughtful work of my tias and abuelas on whose sunburnt
              shoulders I now stand, I have dedicated my career to supporting
              improvement of defective social, political, and economic systems.
              I may be only one person, but I am most certainly not alone.
            </p>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        id="map-background"
        className="background-tint"
      ></Container>

      <div id="resume">
        <Container id="resume-container">
          <Row>
            <Col md={12} id="section-title" className="text-center">
              <h1>My Journey</h1>
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
                <a href="https://www.hopeworksnm.org/">HopeWorks</a> (
                <i>Albuquerque, NM</i>)<br /> July 2021-present
              </p>
              <br />
              <p>
                Manages grants and contracts by preparing and submitting
                applications, facilitating program collaboration and data
                collection, and tracking and meeting all reporting requirements
                for both new and known government, corporate, and foundation
                funding.
              </p>
              <br />
              <p>
              Contributes as a member of the Development team to the 
                communication and engagement strategies of the agency, including 
                public education about homelessness.
              </p>
              <br />
            </Col>

            <Col md={6}>
              <Image fluid id="work-logos" src={nmcanLogo} alt="NMCAN logo" />
            </Col>
            <Col md={6}>
              <h4>Community Engagement Coordinator</h4>
              <p>
                <a href="https://nmcan.org/">NMCAN</a> (
                  <i>Albuquerque, NM</i>)
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
                id="ga-logo"
                src={goldenApple}
                alt="Golden Apple Logo"
              />
            </Col>
            <Col md={6}>
              <h4>Communications Specialist</h4>
              <p>
                <a href="https://goldenapplenm.org/">Golden Apple Foundation of New Mexico</a> (
                  <i>Albuquerque, NM</i>)<br /> Fall 2015-Fall 2016
              </p>
              <br />
              <p>
                Facilitated organization communications and events, wrote and distributed 
                poignant press releases to all major and
                minor state publications, and expanded organization’s online
                presence on social media (with Facebook following surpassing a
                growth of 400%).
              </p>
              <br />
            </Col>
            <Col md={6}>
              <Image fluid id="uw-logo" src={unitedWay} alt="United Way Logo" />
            </Col>
            <Col md={6}>
              <h4>Community Relations Intern</h4>
              <p>
                <a href="https://www.unitedwaydenton.org/">United Way Denton County</a> (
                  <i>Denton, TX</i>)<br /> Fall 2014
              </p>
              <br />
              <p>
                Facilitated community involvement through philanthropic mission connections and public relations and built and maintained comprehensive database of faith-based community partner organizations.
              </p>
            </Col>
          </Row>
        </Container>

        <Container
          fluid
          id="map-background"
          className="background-tint"
        ></Container>

        <Container fluid id="food-project-container">
          <Row>
            <Col md={12} id="section-title" className="text-center">
              <h1>
                Rio Grande Food Project <br />(<i>Albuquerque, NM</i>)
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <h4>Board Secretary (pending)</h4>
              <p>September 2022-present</p>
              <hr />
              <h4>Board Member</h4>
              <p>January 2021-September 2022</p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4}>
              <p>
                As a Board Director and member of the Development Committee, I
                support and help steer the nonprofit’s fundraising, policy
                development, and vision of a community where everyone has
                plentiful nutritious food. RGFP is located in a food desert and
                extremely high poverty area. My goals include amplifying client
                voice and sharing power with individuals and families closest to
                the problem as RGFP builds a new client-choice food pantry and
                takes strategic risks to address food insecurity at its roots.
              </p>
            </Col>
            <Col md={3}>
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
                allowfullscreen="true"
              ></iframe>
              <br />
              <a href="https://www.rgfp.org/give/">
                <button id="donate-button" className="text-center">
                  Donate Today
                </button>
              </a>
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
                  A true passion project, I co-lead Albuquerque’s chapter of
                  Laundry Love, a national organization that boasts “Love.
                  Dignity. Detergent.” Laundry Love ABQ washes the clothes and
                  linens of low-income households without judgement through
                  providing free laundry at local laundromats with coins,
                  laundry supplies, additional resources, and community. My role
                  includes crisis management and regular Spanish interpreting
                  for our largely monolingual Spanish-speaking clientele.
                </p>
                <Image
                  fluid
                  id="laundry-love-logo"
                  src={laundryLoveLogo}
                  alt="Rio Grande Food Project"
                />
              </Col>
              <Col md={5} id="washing-machine-image-col">
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
            <Col md={8}>
              <Image
                fluid
                id="world-race-photo"
                src={kaylaWorldRace}
                alt="Placeholder Map"
              />
            </Col>
          </Row>
        </Container>

        <Container
          fluid
          id="map-background"
          className="background-tint"
        ></Container>

        <Container fluid id="education-container">
          <Row>
            <Col md={12} className="text-center">
              <h1>Education</h1>
            </Col>
          </Row>
          <Row>
            <Col md={6} id="unm-background" className="text-center">
              <Container id="unm-text">
                <Container className="bg-white p-3">
                  <h2>University of New Mexico</h2>
                  <h4>
                    Bachelor of Arts <br /> Communication, Religious Studies /
                    Spring 2017
                  </h4>
                </Container>
              </Container>
            </Col>
            <Col md={6} id="sfcc-background" className="text-center">
              <Container id="sfcc-text">
                <Container className="bg-white p-3">
                  <h2>Santa Fe Community College</h2>
                  <h4>
                    Certificate <br /> American Sign Language / Spring 2022
                  </h4>
                </Container>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col md={12} id="button-col">
              <a
                href="https://1drv.ms/b/s!AmI02yM5rJcaknIUJjOIchWi7gcW?e=zH2MIc"
                arget="_blank"
              >
                <button id="resume-button">Download Full Resume</button>
              </a>
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
