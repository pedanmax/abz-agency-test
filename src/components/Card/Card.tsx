import './Card.scss';
import img from '../../assets/test.png';

const Card = () => {
  return (
    <div className="get__card card">
      <div className="card__wrapper">
        <div className='card__box-img'>
          <img src={img} alt="user" className="card__image" />
        </div>
        <h4 className="card__title">Salvador Stewart Flynn Thomas...</h4>
        <p className="card__position">Lorem, ipsum dolor.</p>
        <a
          href="mailto:m.pedan2017@gmail.com"
          className="card__link"
          data-content='m.pedan2017@gmail.com'
        >
          m.pedan2017@gmail.com

        </a>
        <a
          href="tel:+38097901812"
          className="card__link"
          data-content='+38097901812'
        >
          +38097901812
        </a>
      </div>
    </div>
  );
};

export default Card;
