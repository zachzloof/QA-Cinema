import ComingSoon from './comingSoon';
import './homePage.css';
import MyCarousel from './myCarousel';
import NowShowing from './nowShowing';


function HomePage() {
  return (

    <body style={{marginLeft: "8%", marginRight: "auto"}}>
      
      <MyCarousel/>
      <NowShowing/>
      <ComingSoon/>

    </body>

  );
}

export default HomePage;