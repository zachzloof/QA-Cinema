import React from 'react';
import DirectorsBox from './directorsBox';
import StandardSeating from './standardSeating';
import StandardScreen from './standardExample.jpg';
import StandardScreen2 from './standardExample2.jpg';
import DeluxeScreen from './deluxeExample.jpg';
import DeluxeScreen2 from './deluxeExample2.jpg';
import { Card, Container, Col, Row, CardGroup } from 'react-bootstrap';

export default function Screens() {
  return (
    <div>
      <Container style={{ width: '85%' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo congue, suscipit leo vel, sagittis ipsum. Integer pulvinar lorem odio, ac fringilla justo cursus at. Aenean eget tempor orci. Suspendisse ultricies faucibus bibendum. Nam ut faucibus arcu, a pretium ipsum. Suspendisse eget rutrum leo, vitae faucibus ante. Praesent finibus gravida tellus malesuada sollicitudin. Etiam ullamcorper leo rhoncus eleifend dapibus.

        <br /><br />

        Sed mi lectus, posuere et augue interdum, sodales volutpat dui. Curabitur consectetur massa augue, ac bibendum justo feugiat vel. Nam rutrum vestibulum arcu a fermentum. Vestibulum finibus augue blandit erat pulvinar tristique. Vestibulum a vehicula magna. Maecenas ipsum dui, tincidunt id lacus non, porttitor finibus nisl. Integer varius dolor eget molestie ultrices. Etiam eu faucibus diam, eu facilisis dolor. Pellentesque suscipit ligula tortor, et dapibus justo efficitur vitae.
      </Container>
      <br /><br />
      <Container>
        <Row className='d-flex justify-content-around'>
          <Col><center><h1> Standard Screen </h1></center></Col>
        </Row>
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
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" style={{ height: '10rem' }} src="https://media.istockphoto.com/photos/friends-in-the-cinema-picture-id1180701083?k=20&m=1180701083&s=612x612&w=0&h=yK_hCZ8UycXkePjsGvsBe5p72-Vuf6qbrO1MttbybkI=" />
              <Card.Body>
                <Card.Title>Unbeatable Immersion</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" style={{ height: '10rem' }} src="https://www1.lovethatdesign.com//wp-content/uploads/2018/12/20180812-Vox-Mirdif-22-1536x1097.jpg" />
              <Card.Body>
                <Card.Title>Luxurious Lobby</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" style={{ height: '10rem' }} src="https://media.istockphoto.com/photos/cinema-dark-movie-teather-picture-id505551231?k=20&m=505551231&s=612x612&w=0&h=owp6lPQFKSSkl9L4fosGv5NrQdbVSQK1-lKqxX2Zhj8=" />
              <Card.Body>
                <Card.Title>World's Largest Screen</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='d-flex justify-content-around'>
          <Col><center><h1> Deluxe Screen </h1></center></Col>
        </Row>
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
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" style={{ height: '10rem' }} src="https://www1.lovethatdesign.com//wp-content/uploads/2018/12/20180812-Vox-Mirdif-23-1536x1058.jpg" />
              <Card.Body>
                <Card.Title>VIP Bar</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" style={{ height: '10rem' }} src="https://img.hani.co.kr/imgdb/resize/2015/0723/00536240601_20150723.JPG" />
              <Card.Body>
                <Card.Title>Comfort and Privacy</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" style={{ height: '10rem' }} src="https://cdn.pocket-lint.com/r/s/970x/assets/images/142028-tv-feature-dolby-cinema-image1-tw13hgi7cf-jpg.webp" />
              <Card.Body>
                <Card.Title>Dolby Cinema Sound</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}