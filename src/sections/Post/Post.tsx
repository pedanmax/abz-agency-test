import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import './Post.scss';

const Post = () => {
  return (
    <section id='post' className="post">
      <div className="post__container">
        <h2 className="post__title">Working with POST request</h2>
        <Form />
      </div>
    </section>
  );
};

export default Post;
