import Form from '../../components/Form/Form';
import './Post.scss';
import { CardProps } from '../../types/types';

const Post = ({ submitForm, submitResult, showModal } : { submitForm: (value:CardProps[]) => void, submitResult: (message: string, success:boolean) => void, showModal: (value: boolean) => void }) => {
  return (
    <section id='post' className="post">
      <div className="post__container">
        <h2 className="post__title">Working with POST request</h2>
        <Form submitForm={submitForm} submitResult={submitResult} showModal={showModal} />
      </div>
    </section>
  );
};

export default Post;
