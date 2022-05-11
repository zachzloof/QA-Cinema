import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function NowShowing() {
  return (
    <div>
      <div class="d-flex justify-content-center">
        <h4> NOW SHOWING </h4>
      </div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://w0.peakpx.com/wallpaper/58/18/HD-wallpaper-dr-strange-2-benedict-cumberbatch-doctor-strange-2-elizabeh-olsen-marvel-studios-ucm.jpg" />
          <Card.Body>
            <Card.Title>Dr Strange - Multiverse of Madness</Card.Title>
            <Card.Text>
              A strange doctor does a madness in the multiverse...
            </Card.Text>
            <Button variant="primary">See Timings</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://w0.peakpx.com/wallpaper/998/621/HD-wallpaper-jude-law-fantastic-beasts-the-secrets-of-dumbledore.jpg" />
          <Card.Body>
            <Card.Title>Fantastic Beasts - The Secrets of Dumbledore</Card.Title>
            <Card.Text>
              A fantastic beast reveals all of dumbledore's dirty secrets...
            </Card.Text>
            <Button variant="primary">See Timings</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://w0.peakpx.com/wallpaper/743/913/HD-wallpaper-the-batman-official-2022-movie.jpg" />
          <Card.Body>
            <Card.Title>The Batman</Card.Title>
            <Card.Text>
              A man falls in love with a bat and a woman falls in love with a cat...
            </Card.Text>
            <Button variant="primary">See Timings</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://w0.peakpx.com/wallpaper/536/995/HD-wallpaper-spiderman-no-way-home-iphone-art-marvel-movie.jpg" />
          <Card.Body>
            <Card.Title>Spiderman - No Way Home</Card.Title>
            <Card.Text>
              A spider gets a job in New York and plays with some sand...
            </Card.Text>
            <Button variant="primary">See Timings</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://w0.peakpx.com/wallpaper/767/794/HD-wallpaper-sonic-the-hedgehog-2.jpg" />
          <Card.Body>
            <Card.Title>Sonic the Hedgehog</Card.Title>
            <Card.Text>
              A spiky cat learns to put on red shoes and it makes him very fast...
            </Card.Text>
            <Button variant="primary">See Timings</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}