import Form from '../../components/Form/Form';
import './Post.scss';
import { CardProps } from '../../types/types';

const Post = ({ submitForm } : { submitForm: (value:CardProps[]) => void }) => {
  return (
    <section id='post' className="post">
      <div className="post__container">
        <h2 className="post__title">Working with POST request</h2>
        <Form submitForm={submitForm} />
      </div>
    </section>
  );
};

export default Post;
