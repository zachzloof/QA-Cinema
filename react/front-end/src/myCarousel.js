import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function MyCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: 500, width: 900}}
            src="https://w0.peakpx.com/wallpaper/811/344/HD-wallpaper-movie-doctor-strange-in-the-multiverse-of-madness-benedict-cumberbatch.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Doctor Strange - Multiverse of Madness</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            style={{height: 500, width: 900}}
            src="https://w0.peakpx.com/wallpaper/74/377/HD-wallpaper-fantastic-beasts-fantastic-beasts-the-secrets-of-dumbledore-eddie-redmayne-jude-law.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Fantastic Beasts - The Secrets of Dumbledore</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            style={{height: 500, width: 900}}
            src="https://w0.peakpx.com/wallpaper/232/770/HD-wallpaper-robert-pattinson-as-batman-and-zoe-kravitzs-as-catwoman-the-batman-2022-the-batman-batman-catwoman-superheroes-movies-2022-movies-robert-pattinson-zoe-kravitz.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>The Batman</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}