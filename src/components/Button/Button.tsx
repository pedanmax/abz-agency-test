import './Button.scss';

interface ButtonProps {
  text:string,
  anchor?: string,
  func?: () => void,
}

const Button = ({
  text, anchor, func,
} : ButtonProps) => {
  const padding = text === 'Users' ? '6px 29px' : '6px 22px';
  return (
    <a
      href={anchor}
      className="list__link"
      style={{ padding }}
      onClick={func}
    >
      {text}
    </a>
  );
};

export default Button;
