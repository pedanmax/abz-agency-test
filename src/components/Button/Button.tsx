import './Button.scss';
import { ButtonProps } from '../../types/types';

const Button = ({
  text, anchor, func, stateBtn,
} : ButtonProps) => {
  let styles;
  if (stateBtn === null) {
    styles = { color: 'white', backgroundColor: '#B4B4B4' };
  }
  return (
    <a
      href={anchor}
      onClick={func}
    >
      <button
        type='button'
        className='list__link'
        style={styles}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
