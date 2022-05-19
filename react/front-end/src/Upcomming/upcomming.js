import React from 'react';
import "./styleone.css";

export default function ControlledCarousel() {
  return (


    <div className='total'>
      <h1>Upcomming Films</h1>
      <div className='box'>
        <a href='https://www.youtube.com/watch?v=giXco2jaZ_4'>
        <img
          className="image"
          src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_5226-482x713.jpeg"
          alt="First slide"
        />
        </a>
        <div className='text'>
        <h3>Top Gun: Maverick</h3>
        <p>Actors: Tom Cruise, Val Kilmer, Miles Teller</p>
        <p>Director: Joseph Kosinski</p>
        </div>
      </div>
      <div className='box'>
        <a href='https://www.youtube.com/watch?v=Ssh0Iez-4qY'>
        <img
          className="image"
          src="https://m.media-amazon.com/images/M/MV5BZmQ1NDZjMTktMjFhZC00ZGY5LWEyMTMtNDhkOWM4NmMyZjI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
          alt="Second slide"
        />
</a>
        <div className='text'>
        <h3>Jurassic World Dominion</h3>
        <p>Actors: Sam Neill, Laura Dern, Jeff Goldblum, Chris Pratt</p>
        <p>Director: Colin Trevorrow</p>

      </div>
      </div>
      <div className='box'>
      <a href='https://www.youtube.com/watch?v=BwZs3H_UN3k'>
      <img
        className="image"
        src="https://preview.redd.it/1444q03v0ox81.jpg?width=640&crop=smart&auto=webp&s=bddd4bc7b9121a411892ba7d6f57923deb9ed2eb"
        alt="Third slide"
      />
</a>
<div className='text'>
      <h3>Lightyear</h3>
      <p>Actors: Chris Evans, Taikia Waititi, James Brolin</p>
      <p>Director: Angus MacLane</p>
    </div>
    </div>
    <div className='box'>
    <a href='https://www.youtube.com/watch?v=tgB1wUcmbbw'>
      <img
        className="image"
        src="https://pbs.twimg.com/media/FQzsdTBVkAERLwI?format=jpg&name=medium"
        alt="Third slide"
      />
</a>
<div className='text'>
      <h3>Thor: Love and Thunder</h3>
      <p>Actors: Chris Hemsworth, Christian Bale, Natali Portman</p>
      <p>Director: Taikia Waititi</p>
    </div>
    </div>
    <div className='box'>
    <a href='https://www.youtube.com/watch?v=MVpcszlYT7s'>
<img
  className="image"
  src="https://m.media-amazon.com/images/M/MV5BMDg5ZjNhNzYtM2RjNy00YTg4LTk2YWItODFmZGEzM2U5NzYzXkEyXkFqcGdeQXVyMTM1NjgyNDI@._V1_.jpg"
  alt="Third slide"
/>
</a>
<div className='text'>
<h3>The Devil's Light</h3>
<p>Actors: Christian Navarro, Jacqueline Byers, Nicholas Ralph</p>
<p>Director: Daniel Stamm</p>
</div>
</div>
    </div>


  );
}