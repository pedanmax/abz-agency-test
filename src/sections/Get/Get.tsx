import CardList from '../../components/CardList/CardList';
import './Get.scss';

const Get = () => {
  return (
    <section id='get' className='get'>
      <div className='get__container'>
        <h2 className="get__title">Working with GET request</h2>
        <CardList />
      </div>
    </section>
  );
};

export default Get;
