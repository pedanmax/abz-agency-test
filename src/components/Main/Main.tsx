import { useState } from 'react';
import About from '../../sections/About/About';
import Get from '../../sections/Get/Get';
import Post from '../../sections/Post/Post';
import { CardProps } from '../../types/types';

const Main = () => {
  const [submited, setSubmited] = useState<CardProps[]>([]);
  const submitForm = (value: CardProps[]) => {
    setSubmited(value);
  };
  return (
    <main className='main'>
      <About />
      <Get submited={submited} />
      <Post submitForm={submitForm} />
    </main>
  );
};

export default Main;
