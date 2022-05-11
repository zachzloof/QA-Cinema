import ComingSoon from './comingSoon';
import './homePage.css';
import MyCarousel from './myCarousel';
import NowShowing from './nowShowing';

function HomePage() {
  return (

    <body>
      <MyCarousel/>
      <NowShowing/>
      <ComingSoon/>
    </body>

  );
}

export default HomePage;