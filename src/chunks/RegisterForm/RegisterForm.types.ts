import * as Yup from 'yup';

import { registerSchema } from '@/chunks/RegisterForm/RegisterForm.config.ts';
import { TextboxProps } from '@/components/Textbox/Textbox.types.ts';

export type RegisterFormField = Omit<TextboxProps, 'error'> & {
  fieldName: keyof Yup.InferType<typeof registerSchema>;
};
