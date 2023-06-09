/* eslint-disable max-len */
import { useState } from 'react';
import './CustomFileInput.scss';
import {
  FieldValues, UseFormRegister,
} from 'react-hook-form';

interface Test {
  register : UseFormRegister<FieldValues>,
  errorText: string | undefined,
}

const CustomFileInput = ({ register, errorText } : Test) => {
  const [file, setFile] = useState('Upload your photo');
  const [, setError] = useState(false);
  const handleFile = (e: { target: HTMLInputElement }) => {
    setFile(e.target.value);
    const ext = e.target.value.slice(e.target.value.lastIndexOf('.'));
    if (ext === '.jpg' || ext === '.jpeg') {
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
        id='photo'
        className="file__input"
        accept='image/*'
        {...register('file', {
          required: 'This field is required',
          onChange: handleFile,
          validate: (value: File[]) => (value[0] as File).type.includes('image') || 'You can choose file type only image',
        })}
      />
      <label
        className="file__label"
        style={{
          border: errorText ? '2px solid red' : '1px solid #D0CFCF',
          borderLeft: errorText ? '0px solid red' : '1px solid #D0CFCF',
          borderRadius: '0px 4px 4px 0px',
        }}
      >
        <p className="file__name">{file}</p>
      </label>
      <button
        type='button'
        className="file__button"
        style={{ border: errorText ? '2px solid red' : '1px solid rgba(0, 0, 0, 0.87)' }}
      >
        Upload
      </button>
      {errorText && <p className="file__error">{errorText}</p>}
    </div>
  );
};

export default CustomFileInput;
