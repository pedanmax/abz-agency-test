import { useState } from 'react';
import './CustomFileInput.scss';

const CustomFileInput = () => {
  const [file, setFile] = useState('Upload your photo');
  const [error, setError] = useState(false);
  const handleFile = (e: { target: HTMLInputElement }) => {
    setFile(e.target.value);
    const ext = e.target.value.slice(e.target.value.lastIndexOf('.'));
    if (ext === '.svg' || ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      setFile(e.target.value.slice(e.target.value.lastIndexOf('\\') + 1));
      setError(false);
    } else {
      setFile('Upload your photo');
      setError(true);
    }
  };

  return (
    <div className="file">
      <input
        type="file"
        name='photo'
        id='photo'
        className="file__input"
        onChange={handleFile}
      />
      <label
        className="file__label"
        style={{
          border: error ? '2px solid red' : '1px solid #D0CFCF',
          borderLeft: error ? '0px solid red' : '1px solid #D0CFCF',
          borderRadius: '0px 4px 4px 0px',
        }}
      >
        <p className="file__name">{file}</p>
      </label>
      <button
        type='button'
        className="file__button"
        style={{ border: error ? '2px solid red' : '1px solid rgba(0, 0, 0, 0.87)' }}
      >
        Upload
      </button>
      {error && <p className="file__error">You can choose only photo file</p>}
    </div>
  );
};

export default CustomFileInput;
