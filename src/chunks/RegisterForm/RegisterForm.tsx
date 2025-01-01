import { FC } from 'react';

import Button from '@/components/Button/Button.tsx';
import FormError from '@/components/FormError/FormError.tsx';
import Textbox from '@/components/Textbox/Textbox.tsx';

import { registerFields } from './RegisterForm.config.ts';
import useRegisterForm from './useRegisterForm.ts';

const RegisterForm: FC = () => {
  const h = useRegisterForm();

  return (
    <form className="flex flex-col gap-8 rounded-xl border-border px-11 py-9 lg:border">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Sign up</h1>
        <h2 className="text-dark">
          Register an account and get access to all the platform's features for free.
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {registerFields.map(({ fieldName, ...props }) => (
          <div key={fieldName} className="space-y-1">
            <div className="text-sm">{props.placeholder}</div>
            <Textbox {...props} {...h.form.register(fieldName)} />
            <FormError message={h.form.formState.errors[fieldName]?.message} />
          </div>
        ))}
      </div>
      <Button type="submit">Create an account</Button>
    </form>
  );
};

export default RegisterForm;
