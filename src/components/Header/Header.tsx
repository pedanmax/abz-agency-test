import Button from '../Button/Button';
import logo from '../../assets/header-icon.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__logo-box">
          <img src={logo} alt="" className="header__logo" />
          <h6 className="header__logo-text">testtask</h6>
        </div>
        <nav className='header__navigation'>
          <ul className="header__list list">
            {['Users', 'Sign up'].map((section) => <Button key={section} text={section} />)}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
