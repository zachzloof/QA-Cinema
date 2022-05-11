import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ComingSoon() {
  return (
    <div>
      <div class="d-flex justify-content-center">
        <h4> Coming Soon </h4>
      </div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://w0.peakpx.com/wallpaper/759/592/HD-wallpaper-top-gun-maverick.jpg" />
          <Card.Body>
            <Card.Title>Top Gun: Maverick</Card.Title>
            <Card.Text>
            After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.
            </Card.Text>
            <Button variant="primary">Preorder Now</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://w0.peakpx.com/wallpaper/850/1013/HD-wallpaper-jurassic-world-3-dominion-fan-art.jpg" />
          <Card.Body>
            <Card.Title>Jurassic World: Dominion</Card.Title>
            <Card.Text>
            Four years after the destruction of Isla Nublar, dinosaurs now live--and hunt--alongside humans all over the world.
            </Card.Text>
            <Button variant="primary">Preorder Now</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://w0.peakpx.com/wallpaper/822/547/HD-wallpaper-lightyear-movie.jpg" />
          <Card.Body>
            <Card.Title>Lightyear</Card.Title>
            <Card.Text>
            The story of Buzz Lightyear and his adventures to infinity and beyond.
            </Card.Text>
            <Button variant="primary">Preorder Now</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://w0.peakpx.com/wallpaper/1023/257/HD-wallpaper-thor-love-thunder-love-thunder.jpg" />
          <Card.Body>
            <Card.Title>Thor: Love and Thunder</Card.Title>
            <Card.Text>
            Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.
            </Card.Text>
            <Button variant="primary">Preorder Now</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" style={{height: '25rem'}} src="https://m.media-amazon.com/images/M/MV5BMDg5ZjNhNzYtM2RjNy00YTg4LTk2YWItODFmZGEzM2U5NzYzXkEyXkFqcGdeQXVyMTM1NjgyNDI@._V1_.jpg" />
          <Card.Body>
            <Card.Title>The Devil's Light</Card.Title>
            <Card.Text>
            A nun prepares to perform an exorcism and comes face to face with a demonic force with mysterious ties to her past.
            </Card.Text>
            <Button variant="primary">Preorder Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}