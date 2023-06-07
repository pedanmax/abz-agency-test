/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import {
  TextField, FormControlLabel, Radio, Button, FormLabel, FormControl, RadioGroup, FormHelperText,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CustomFileInput from '../CustomFileInput/CustomFileInput';
import { DataForm, PositionUser } from '../../types/types';
import './Form.scss';

const Form = () => {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm<DataForm>({ mode: 'onChange', reValidateMode: 'onChange' });
  const [radio, setRadio] = useState('');
  const [positions, setPosition] = useState([]);
  const wayToPositions = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  const onSubmit = (data: DataForm) : void => {
    console.log(data);
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
        sx={{ marginBottom: '50px' }}
        {...register('name', {
          required: 'This field is required',
          minLength: {
            value: 3,
            message: 'Name is too short, minimum three letters',
          },
          validate: {
            firstLetter: (value: string) => value[0] === value[0].toUpperCase() || 'First letter must be uppercase',
            numbers: (value: string) => !/[0-9]/.test(value) || 'Name must be without numbers',
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
        sx={{ marginBottom: '50px' }}
        {...register('email', {
          required: 'This field is required',
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
        sx={{ marginBottom: '43px' }}
        {...register('number', {
          required: 'This field is required',
          minLength: {
            value: 6,
            message: 'Number is too short, minimum 6 symbols',
          },
          maxLength: {
            value: 12,
            message: 'Number is too long, maximum 12 symbols',
          },
          pattern: {
            value: /^[0-9+-]+$/,
            message: 'Please enter a valid number',
          },
        })}
        error={!!errors?.number?.message?.toString()}
        helperText={errors?.number?.message ? errors?.number?.message : '+38 XXX XXX - XX - XX'}
      />
      <p className="form__position">Select your position</p>
      <FormControl sx={{ paddingBottom: '30px' }}>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={radio}
          onChange={handleChange}
        >
          {positions && positions.map((position: PositionUser) => {
            return (
              <FormControlLabel
                key={position.id}
                control={(
                  <Radio
                    {...register('radio', { required: 'You must choose one option' })}
                    value={position.name}
                  />
                )}
                label={position.name}
              />
            );
          })}
        </RadioGroup>
        {errors.radio?.message && <FormHelperText sx={{ color: 'red' }}>{errors.radio?.message}</FormHelperText>}
      </FormControl>
      <Button
        variant="outlined"
        component="label"
        sx={{ marginBottom: '50px' }}
      >
        Upload File
        <input
          {...register('file')}
          type="file"
          hidden
          className='btn'
        />
      </Button>
      <CustomFileInput />
      <button type='submit' className='form__btn'>
        Sign up
      </button>
    </form>
  );
};

export default Form;
