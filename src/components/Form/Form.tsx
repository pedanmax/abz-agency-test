import {
  TextField, FormControlLabel, Radio, FormControl, RadioGroup, FormHelperText,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DataForm, PositionUser } from '../../types/types';
import './Form.scss';
import '../CustomFileInput/CustomFileInput.scss';

const Form = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<DataForm>({ mode: 'onChange', reValidateMode: 'onChange' });
  const [radio, setRadio] = useState('');
  const [positions, setPosition] = useState([]);
  const wayToPositions = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
  const [file, setFile] = useState('Upload your photo');

  const handleFile = (e: { target: HTMLInputElement }) => {
    setFile(e.target.value.slice(e.target.value.lastIndexOf('\\') + 1));
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  const checkFile = (value:File) => {
    if (value.size / (1025 ** 2) < 5) {
      if (value.name.includes('jpg') || value.name.includes('jpeg')) {
        return true;
      }
    }
    return false;
  };
  const onSubmit = (data: DataForm) => {
    console.log(data);
    console.log(Object.keys(errors).length);
  };

  useEffect(() => {
    fetch(wayToPositions)
      .then((res) => res.json())
      .then((res) => {
        setPosition(res.positions);
      });
  }, []);

  return (
    <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        type='text'
        autoComplete='off'
        label='Your name'
        inputProps={{ style: { fontFamily: 'Nunito' } }}
        sx={{ marginBottom: '47px' }}
        defaultValue='max'
        {...register('name', {
          required: 'This field is required',
          minLength: {
            value: 2,
            message: 'Username, should be 2-60 characters',
          },
          maxLength: {
            value: 60,
            message: 'Username, should be 2-60 characters',
          },
        })}
        error={!!errors?.name?.message?.toString()}
        helperText={errors?.name?.message?.toString()}
      />
      <TextField
        variant="outlined"
        type='email'
        autoComplete='off'
        label='Email'
        defaultValue='m.pedan201@gmail.com'
        sx={{ marginBottom: '50px' }}
        {...register('email', {
          required: 'This field is required',
          pattern: {
            value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
            message: 'Please enter a valid email',
          },
        })}
        error={!!errors?.email?.message?.toString()}
        helperText={errors?.email?.message?.toString()}
      />
      <TextField
        variant="outlined"
        type='number'
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        autoComplete='off'
        label='Phone'
        sx={{ marginBottom: '15px' }}
        {...register('number', {
          required: 'This field is required',
          pattern: {
            value: /^[\\+]{0,1}380([0-9]{9})$/,
            message: 'Number should start with code of Ukraine +380',
          },
        })}
        error={!!errors?.number?.message?.toString()}
        helperText={errors?.number?.message ? errors?.number?.message : '+38 (XXX) XXX - XX - XX'}
      />
      <p className="form__position">Select your position</p>
      <FormControl sx={{ paddingBottom: '40px' }}>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={radio}
          onChange={handleRadio}
        >
          {positions && positions.map((position: PositionUser) => {
            return (
              <FormControlLabel
                key={position.id}
                control={(
                  <Radio
                    {...register('radio', { required: 'You must choose one option' })}
                    value={position.name}
                    sx={{ height: '34px' }}
                  />
                  )}
                label={position.name}
              />
            );
          })}
        </RadioGroup>
        {errors.radio?.message && <FormHelperText sx={{ color: 'red' }}>{errors.radio?.message}</FormHelperText>}
      </FormControl>
      <div className="file">
        <input
          type="file"
          id='photo'
          className="file__input"
          {...register('file', {
            validate: (value) => checkFile((value[0] as File)) || 'You can choose file type only jpeg/jpg, less then 5mb',
            required: 'This field is required',
            onChange: handleFile,
          })}
        />
        <label
          className="file__label"
          style={{
            border: errors.file?.message ? '2px solid red' : '1px solid #D0CFCF',
            borderLeft: errors.file?.message ? '0px solid red' : '1px solid #D0CFCF',
            borderRadius: '0px 4px 4px 0px',
          }}
        >
          <p className="file__name">{file}</p>
        </label>
        <button
          type='button'
          className="file__button"
          style={{ border: errors.file?.message ? '2px solid red' : '1px solid rgba(0, 0, 0, 0.87)' }}
        >
          Upload
        </button>
        {errors.file?.message && <p className="file__error">{errors.file?.message}</p>}
      </div>
      {/* <CustomFileInput register={register} errorText={errors.file?.message} /> */}
      <button type='submit' className='form__btn'>
        Sign up
      </button>
    </form>
  );
};

export default Form;
