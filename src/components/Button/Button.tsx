import './Button.scss';

const Button = ({ text, anchor } : { text:string, anchor:string }) => {
  const padding = text === 'Users' ? '4px 29px' : '4px 22px';
  return (
    <li className="list__item">
      <a
        href={anchor}
        className="list__link"
        style={{ padding }}
      >
        {text}
      </a>
    </li>
  );
};

export default Button;
