import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';
import Img5 from '../assets/img5.png';
import Img6 from '../assets/img6.png';
import Img7 from '../assets/img7.png';
import Img8 from '../assets/img8.png';
import Img9 from '../assets/img9.png';
import Img10 from '../assets/img10.png';

function Photos() {
  return (
    <div className="photos">
      <h1 id="photos" className="photos__title">
        Photos
      </h1>
      <div className="photos__img-container">
        <img src={Img1} alt="Murda Beatz Pic" />
        <img src={Img2} alt="Murda Beatz Pic" />
        <img src={Img3} alt="Murda Beatz Pic" />
        <img src={Img4} alt="Murda Beatz Pic" />
        <img src={Img5} alt="Murda Beatz Pic" />
        <img src={Img6} alt="Murda Beatz Pic" />
        <img src={Img7} alt="Murda Beatz Pic" />
        <img src={Img8} alt="Murda Beatz Pic" />
        <img src={Img9} alt="Murda Beatz Pic" />
        <img src={Img10} alt="Murda Beatz Pic" />
      </div>
      <div className="photos__btn-container">
        <a href="#">
          <button className="photos__button">View All Photos</button>
        </a>
      </div>
    </div>
  );
}

export default Photos;
