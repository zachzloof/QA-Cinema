import ComingSoon from './comingSoon';
import './homePage.css';
import MyCarousel from './myCarousel';
import NowShowing from './nowShowing';
import Header from './Header';

function HomePage() {
  return (

    <body style={{marginLeft: "8%", marginRight: "auto"}}>
      <Header/>
      
      <MyCarousel/>
      <NowShowing/>
      <ComingSoon/>
    </body>

  );
}

export default HomePage;