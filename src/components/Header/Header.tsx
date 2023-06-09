import Button from '../Button/Button';
import logo from '../../assets/header-icon.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">
        <a href='!#' className="header__logo-box">
          <img src={logo} alt="" className="header__logo" />
          <h6 className="header__logo-text">testtask</h6>
        </a>
        <nav className='header__navigation'>
          <ul className="header__list list">
            <li className='list__item'>
              <Button text='Users' anchor='#get' />
            </li>
            <li className='list__item'>
              <Button text='Sign up' anchor='#post' />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
