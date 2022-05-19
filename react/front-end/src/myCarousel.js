import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

export default function MyCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: 500, width: '100%'}}
            src="https://w0.peakpx.com/wallpaper/811/344/HD-wallpaper-movie-doctor-strange-in-the-multiverse-of-madness-benedict-cumberbatch.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Doctor Strange - Multiverse of Madness</h3>
            <p>A strange doctor does a madness in the multiverse...</p>
            <Button variant='light' href='http://localhost:3000/booking'> Book Now </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            style={{height: 500, width: '100%'}}
            src="https://w0.peakpx.com/wallpaper/74/377/HD-wallpaper-fantastic-beasts-fantastic-beasts-the-secrets-of-dumbledore-eddie-redmayne-jude-law.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Fantastic Beasts - The Secrets of Dumbledore</h3>
            <p>A fantastic beast reveals all of dumbledore's dirty secrets...</p>
            <Button variant='light' href='http://localhost:3000/booking'> Book Now </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            style={{height: 500, width: "100%"}}
            src="https://w0.peakpx.com/wallpaper/232/770/HD-wallpaper-robert-pattinson-as-batman-and-zoe-kravitzs-as-catwoman-the-batman-2022-the-batman-batman-catwoman-superheroes-movies-2022-movies-robert-pattinson-zoe-kravitz.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>The Batman</h3>
            <p>A man falls in love with a bat and a woman falls in love with a cat...</p>
            <Button variant='light' href='http://localhost:3000/booking'> Book Now </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}