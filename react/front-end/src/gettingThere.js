import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function GettingThere() {
  return (
    <body style={{ marginTop: '20px', marginLeft: '10%', paddingRight: '20px' }}>
        <Row>
          <Col>
            <h1><center> Getting There </center></h1>
          </Col>
        </Row>
        <Row><br /></Row>
        <Row>
          <Col>
            QA Cinema <br />
            QA Ltd. <br />
            3rd Floor <br />
            International House <br />
            1 St. Katherines Way <br />
            E1W 1UN <br />
            <Button href='https://www.google.co.uk/maps/place/QA+Ltd./@51.507534,-0.0745377,17.75z/data=!4m6!3m5!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!4b1!8m2!3d51.5075167!4d-0.0738037'> Show on Google Maps </Button>
          </Col>
          <Col>
            <h2>How to get to QA Cinema <br /></h2>
            <br />
            <h4>'Icon' Public transport <br /></h4>
            <br />
            <b>Stations:<br /></b>

            Tower Hill (Circle / District line) - 5-10 min walk <br />
            Aldgate (Metropolitan line) - 15 min walk <br />
            London Bridge (Jubilee / Northern / Overground) - 15-20 min walk <br />
            <br />
            <b>Bus:<br /></b>

            Bus Routes that stop near the cinema - 15, 42, 78, 100, 343.<br />
            <br />
            <h4>'Icon' Disabled Access <br /></h4>
            <br />
            <b>Disabled Access:<br /></b>
            Cinema is fully accessible with ramps and lifts within the building.
          </Col>
        </Row>
    </body>
  );
}