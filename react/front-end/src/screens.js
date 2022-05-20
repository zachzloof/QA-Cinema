import React from 'react';

import StandardScreen from './standardExample.jpg';
import StandardScreen2 from './standardExample2.jpg';
import DeluxeScreen from './deluxeExample.jpg';
import DeluxeScreen2 from './deluxeExample2.jpg';
import { Card, Container, Col, Row } from 'react-bootstrap';

export default function Screens() {
  return (
    <body style={{ margin:'20px', marginLeft:'10%', textAlign: "center" }}>

      <Row className='d-flex justify-content-around'>
        <Col><center><h1> Standard Screen </h1></center></Col>
      </Row>
      <Row><br /></Row>
      <Row>
        <Col>
          <img src={StandardScreen} style={{ width: '100%', height: '300px' }} />
        </Col>
        <Col>
          <img src={StandardScreen2} style={{ width: '100%', height: '300px' }} />
        </Col>
      </Row>
      <Row><br /></Row>
      <Row>
        <Col>
          <h3><center> Experience Highlights </center></h3>
        </Col>
      </Row>
      <Row><br /></Row>
      <Row>
        <Col>
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" style={{ height: '10rem' }} src="https://media.istockphoto.com/photos/friends-in-the-cinema-picture-id1180701083?k=20&m=1180701083&s=612x612&w=0&h=yK_hCZ8UycXkePjsGvsBe5p72-Vuf6qbrO1MttbybkI=" />
            <Card.Body>
              <Card.Title>Unbeatable Immersion</Card.Title>
              <Card.Text>
                We offer immersion like no other, you won't know where you are once you leave us.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" style={{ height: '10rem' }} src="https://www1.lovethatdesign.com//wp-content/uploads/2018/12/20180812-Vox-Mirdif-22-1536x1097.jpg" />
            <Card.Body>
              <Card.Title>Luxurious Lobby</Card.Title>
              <Card.Text>
                Top of the range lobby with a unique variety of snacks to enjoy during the movie.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" style={{ height: '10rem' }} src="https://media.istockphoto.com/photos/cinema-dark-movie-teather-picture-id505551231?k=20&m=505551231&s=612x612&w=0&h=owp6lPQFKSSkl9L4fosGv5NrQdbVSQK1-lKqxX2Zhj8=" />
            <Card.Body>
              <Card.Title>World's Largest Screen</Card.Title>
              <Card.Text>
                Record breaking technology, with the worlds largest indoor cinema screen.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row><br /></Row>
      <Row><br /></Row>

      <Row className='d-flex justify-content-around'>
        <Col><center><h1> Deluxe Screen </h1></center></Col>
      </Row>
      <Row><br /></Row>
      <Row>
        <Col>
          <img src={DeluxeScreen} style={{ width: '100%', height: '300px' }} />
        </Col>
        <Col>
          <img src={DeluxeScreen2} style={{ width: '100%', height: '300px' }} />
        </Col>
      </Row>
      <Row><br /></Row>
      <Row>
        <Col>
          <h3><center> Experience Highlights </center></h3>
        </Col>
      </Row>
      <Row><br /></Row>
      <Row>
        <Col>
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" style={{ height: '10rem' }} src="https://www1.lovethatdesign.com//wp-content/uploads/2018/12/20180812-Vox-Mirdif-23-1536x1058.jpg" />
            <Card.Body>
              <Card.Title>VIP Bar</Card.Title>
              <Card.Text>
                Unlimited drinks with access to the VIP only bar.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" style={{ height: '10rem' }} src="https://img.hani.co.kr/imgdb/resize/2015/0723/00536240601_20150723.JPG" />
            <Card.Body>
              <Card.Title>Comfort and Privacy</Card.Title>
              <Card.Text>
                Our goal is to maximise comfort and privacy so you feel like you are right at home.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" style={{ height: '10rem' }} src="https://cdn.pocket-lint.com/r/s/970x/assets/images/142028-tv-feature-dolby-cinema-image1-tw13hgi7cf-jpg.webp" />
            <Card.Body>
              <Card.Title>Dolby Cinema Sound</Card.Title>
              <Card.Text>
                Dolby Sound provides a surround sound experience that you will not get tired of.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row><br /></Row>
      <Row><br /></Row>

    </body>
  );
}