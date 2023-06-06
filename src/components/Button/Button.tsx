import './Button.scss';

const Button = ({ text } : { text:string }) => {
  return (
    <li className="list__item">
      <a href="!#" className="list__link">{text}</a>
    </li>
  );
};

export default Button;
