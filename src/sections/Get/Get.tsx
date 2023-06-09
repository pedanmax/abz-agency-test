import CardList from '../../components/CardList/CardList';
import { CardProps } from '../../types/types';
import './Get.scss';

const Get = ({ submited } : { submited: CardProps[] }) => {
  return (
    <section id='get' className='get'>
      <div className='get__container'>
        <h2 className="get__title">Working with GET request</h2>
        <CardList submited={submited} />
      </div>
    </section>
  );
};

export default Get;
