import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HowItWorks() {
  return (
    <div id="how-it-works" className="how-it-works">
      <h1 className="h1-mod d-flex justify-content-center">HOW IT WORKS</h1>
      <Container>
        <Row className="d-flex justify-content-center" xs={1} sm={1} md={1} lg={3} xl={3}>

          <Col lg={{span: 3, offset: 2}} className="hiw-con d-flex justify-content-center mx-5 my-4">
            <div className="card">
              <div className="img d-flex justify-content-center my-2">
                <img src="../../notepad.png" width="120" height="120" alt="" />
              </div>
              <div className="text-header h3-mod my-2">
                Take Assessment
              </div>
              <div className="text my-1 p-mod">
                Fill a 3-min questionnaire
              </div>
            </div>
          </Col>

          <Col lg={{span: 3, offset: 2}} className="hiw-con d-flex justify-content-center mx-5 my-4">
            <div className="card">
              <div className="my-2 img d-flex justify-content-center">
                <img src="../../gears.png" width="120" height="120" alt="" />
              </div>
              <div className="my-2 h3-mod text-header">
                Get Matched
              </div>
              <div className="text my-1 p-mod">
                We pair you with the best therapists that suit your needs
              </div>
            </div>
          </Col>

          <Col lg={3} className="hiw-con d-flex justify-content-center mx-5 my-4">
            <div className="card">
              <div className="my-2 h3-mod img d-flex justify-content-center">
                <img src="../../chat.png" width="120" height="120" alt="" />
              </div>
              <div className="my-2 h3-mod text-header">
                Begin Therapy
              </div>
              <div className="text my-1 p-mod ">
                Engage with <br />your chosen therapist
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HowItWorks;
