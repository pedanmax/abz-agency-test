import successForm from '../../assets/new-user.png';
import './Modal.scss';

const Modal = ({ activeModal, showModal, submitResult } : { activeModal:boolean, showModal: (value: boolean) => void, submitResult: { message: string, success:boolean } }) => {
  const { message, success } = submitResult;

  return (
    <div
      className={activeModal ? 'modal active' : 'modal'}
      onClick={() => showModal(false)}
    >
      <div
        className={activeModal ? 'modal__container active' : 'modal__container'}
        onClick={(e) => e.stopPropagation()}
      >
        {success
          ? (
            <div className='modal__wrap-img'>
              <img src={successForm} alt="new user" className='modal__image' />
            </div>
          )
          : (
            <div className="modal__error">
              <h3 className='modal__error-title'>
                Oops, something went wrong
              </h3>
              <h4 className='modal__error-msg'>{message}</h4>
            </div>
          )}
      </div>
    </div>
  );
};

export default Modal;
