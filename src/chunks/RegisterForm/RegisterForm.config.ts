import * as Yup from 'yup';

import type { RegisterFormField } from './RegisterForm.types.ts';

export const registerFields: RegisterFormField[] = [
  {
    fieldName: 'email',
    placeholder: 'Email address',
    type: 'email',
  },
  {
    fieldName: 'name',
    placeholder: 'Username',
    autoComplete: 'username',
  },
  {
    fieldName: 'password',
    placeholder: 'Password',
    type: 'password',
    autoComplete: 'new-password',
  },
];

export const registerSchema = Yup.object({
  email: Yup.string().email().required().label('Email address'),
  name: Yup.string().required().label('Username'),
  password: Yup.string().required().label('Password'),
}).required();
