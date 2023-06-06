import './Button.scss';

const Button = ({ text } : { text:string }) => {
  const padding = text === 'Users' ? '4px 29px' : '4px 22px';
  return (
    <li className="list__item">
      <a
        href="!#"
        className="list__link"
        style={{ padding }}
      >
        {text}
      </a>
    </li>
  );
};

export default Button;
