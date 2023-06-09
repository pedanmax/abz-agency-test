import './Card.scss';
import { CardProps } from '../../types/types';

const Card = ({
  photo, phone, email, position, name,
} : CardProps) => {
  const numberLink = `tel:${phone}`;
  const emailLink = `emailto:${email}`;
  return (
    <div className="card__wrapper">
      <div className='card__box-img'>
        <img src={photo} alt={name} className="card__image" />
      </div>
      <h4 className="card__title">{name}</h4>
      <p className="card__position">{position}</p>
      <a
        href={emailLink}
        className="card__link"
        data-content={email}
      >
        {email}

      </a>
      <a
        href={numberLink}
        className="card__link"
        data-content={phone}
      >
        {phone}
      </a>
    </div>
  );
};

export default Card;
