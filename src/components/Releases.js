import cover1 from '../assets/img-cover-1.png';
import cover2 from '../assets/img-cover-2.png';
import cover3 from '../assets/img-cover-3.png';
import cover4 from '../assets/img-cover-4.png';

function Releases() {
  return (
    <div className="releases">
      <h1 id="releases" className="releases__title">
        Releases
      </h1>
      <div className="releases__img-container">
        <div className="releases__img-descrip-container">
          <img src={cover1} alt="album cover" />
          <p class="releases__img-description">Download/</p>
        </div>
        <div className="releases__img-square">
          <div className="releases__img-descrip-container">
            <img className="releases__img-sm" alt="album cover" src={cover2} />
            <p class="releases__img-description">Download/</p>
          </div>
          <div className="releases__img-descrip-container">
            <img className="releases__img-sm" src={cover3} alt="album cover" />
            <p class="releases__img-description">Download/</p>
          </div>
          <div className="releases__img-descrip-container">
            <img className="releases__img-sm" src={cover4} alt="album cover" />
            <p class="releases__img-description">Download/</p>
          </div>
          <div className="releases__img-descrip-container">
            <img className="releases__img-sm" src={cover1} alt="album cover" />
            <p class="releases__img-description">Download/</p>
          </div>
        </div>
      </div>
      <div className="releases__btn-container">
        <a href="#">
          <button className="releases__button">Listen Now</button>
        </a>
      </div>
    </div>
  );
}

export default Releases;
