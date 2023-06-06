import Button from '../../components/Button/Button';
import './About.scss';

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h3 className="about__title">Test assignment for front-end developer</h3>
        <h5 className="about__paragraph">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</h5>
        <Button text='Sign up' anchor='#post' />
      </div>
    </section>
  );
};

export default About;
