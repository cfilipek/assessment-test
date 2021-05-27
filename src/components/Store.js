import Item1 from '../assets/item1.png';
import Item2 from '../assets/item2.png';
import Item3 from '../assets/item3.png';

function Store() {
  return (
    <div className="store">
      <h1 id="store" className="store__title">
        Store
      </h1>
      <div className="store__items">
        <div className="store__item">
          <img src={Item1} alt="Store Item" />
          <h4 className="store__item-text">Banana Split Long Sleeve</h4>
          <h4 className="store__item-price">$30.00</h4>
        </div>
        <div className="store__item">
          <img src={Item2} alt="Store Item" />
          <h4 className="store__item-text">Banana Split Short Sleeve</h4>
          <h4 className="store__item-price">$25.00</h4>
        </div>
        <div className="store__item">
          <img src={Item3} alt="Store Item" />
          <h4 className="store__item-text">Banana Split - Digital Single</h4>
          <h4 className="store__item-price">$125.00</h4>
        </div>
      </div>
      <div className="store__btn-container">
        <a href="#">
          <button className="store__button">Shop All</button>
        </a>
      </div>
    </div>
  );
}

export default Store;
