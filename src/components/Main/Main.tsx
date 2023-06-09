import { useState } from 'react';
import About from '../../sections/About/About';
import Get from '../../sections/Get/Get';
import Post from '../../sections/Post/Post';
import Modal from '../Modal/Modal';
import { CardProps } from '../../types/types';

const Main = () => {
  const [submited, setSubmited] = useState<CardProps[]>([]);
  const [activeModal, setActiveModal] = useState(false);
  const [submitResult, setSubmitResult] = useState({ message: '', success: false });
  const submitForm = (value: CardProps[]) => {
    setSubmited(value);
  };
  const showModal = (value: boolean) => setActiveModal(value);
  const handleResultSubmit = (message: string, success:boolean) => setSubmitResult({ message, success });

  return (
    <main className='main'>
      <About />
      <Get submited={submited} />
      <Post submitForm={submitForm} submitResult={handleResultSubmit} showModal={showModal} />
      <Modal activeModal={activeModal} showModal={showModal} submitResult={submitResult} />
    </main>
  );
};

export default Main;
