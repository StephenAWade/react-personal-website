import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Navigation } from "./Navigation";
import MapFunction from "./Map";

export const Home = () => {
  return (
    <>
      <Container fluid id="home-banner">
        <h1>Kayla Strickler</h1>
      </Container>
      <Navigation />
      <Container id="about-me-container">
        <Row>
          <Col md={4} id="profile-image-col">
            <Image
              fluid
              id="profile-image"
              src="https://innovating.capital/wp-content/uploads/2021/05/vertical-placeholder-image.jpg"
              className="place-holder-image-1"
              alt="Place-holder profile picture"
            />
          </Col>
          <Col md={8}>
            <p className="mt-5 me-5">
              "It has been in some points a singular case," said Holmes,
              flicking the horse on into a gallop. "I confess that I have been
              as blind as a mole, but it is better to learn wisdom late than
              never to learn it at all."
            </p>
            <p className="mt-5 me-5">
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
      {/* <MapFunction/> */}
    </>
  );
};
