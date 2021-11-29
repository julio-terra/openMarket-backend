import Slider from 'react-slick';

import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Sliders = ({children}) =>{
  const childrens = children?.slice(Math.max(children.length - 6, 0))
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: childrens?.length <= 4? childrens?.length - 1 : 4,
        autoplay: true,
        slides: 2, 
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: childrens?.length <= 3? childrens?.length - 1 : 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: childrens?.length <= 2? childrens?.length - 1 : 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
      return(
        <Slider {...settings} className="col-10 offset-1 col-sm-12 offset-sm-0">
          {childrens}
        </Slider>
      )
};
export default Sliders;