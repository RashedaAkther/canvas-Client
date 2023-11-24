import { Carousel } from "react-responsive-carousel";

import banner1 from "../../assets/resoures/banner1.jpg";
import banner2 from "../../assets/resoures/banner2.jpg";
import banner3 from "../../assets/resoures/banner3.jpg";

import banner6 from "../../assets/resoures/banner5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Banner = () => {
  return (
    <Carousel >
    <div>
        <img src={banner1} />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={banner2} />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={banner3} />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src={banner1} />
        <p className="legend">Legend 4</p>
    </div>
  
    <div>
        <img src={banner6} />
        <p className="legend">Legend 6</p>
    </div>
</Carousel>
  );
};

export default Banner;