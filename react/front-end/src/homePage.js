import ComingSoon from './comingSoon';
import './homePage.css';
import MyCarousel from './myCarousel';
import NowShowing from './nowShowing';


function HomePage() {
  return (

    <body style={{marginLeft: "6%", marginRight: "auto"}}>
      
      <MyCarousel/>
      <br /> <br />
      <NowShowing/>
      <br /> <br />
      <ComingSoon/>

    </body>

  );
}

export default HomePage;