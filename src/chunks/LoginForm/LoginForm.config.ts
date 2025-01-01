import * as Yup from 'yup';

import { TextboxProps } from '@/components/Textbox/Textbox.types.ts';

export const loginSchema = Yup.object({
  email: Yup.string().email().required().label('Email address'),
  password: Yup.string().required().label('Password'),
}).required();

type FormField = TextboxProps & {
  fieldName: keyof Yup.InferType<typeof loginSchema>;
};

export const loginFields: FormField[] = [
  {
    fieldName: 'email',
    placeholder: 'Email address',
    type: 'email',
  },
  {
    fieldName: 'password',
    placeholder: 'Password',
    type: 'password',
  },
];
