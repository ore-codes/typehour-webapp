import * as Yup from 'yup';

import { TextboxProps } from '@/components/Textbox/Textbox.types.ts';

export const registerSchema = Yup.object({
  email: Yup.string().email().required().label('Email address'),
  name: Yup.string().required().label('Username'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
      'Password must be at least six characters long and contain at least one letter and one number'
    )
    .required()
    .label('Password'),
}).required();

type FormField = TextboxProps & {
  fieldName: keyof Yup.InferType<typeof registerSchema>;
};

export const registerFields: FormField[] = [
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
