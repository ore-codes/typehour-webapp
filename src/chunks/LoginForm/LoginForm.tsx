import { FC } from 'react';

import Button from '@/components/Button/Button.tsx';
import FormError from '@/components/FormError/FormError.tsx';
import Textbox from '@/components/Textbox/Textbox.tsx';

import { loginFields } from './LoginForm.config.ts';
import useLoginForm from './useLoginForm.ts';

const LoginForm: FC = () => {
  const h = useLoginForm();

  return (
    <form className="flex flex-col gap-8 rounded-xl border-border px-11 py-9 lg:border">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <h2 className="text-dark">Welcome. Enter your credentials to log in to your account.</h2>
      </div>
      <div className="flex flex-col gap-4">
        {loginFields.map(({ fieldName, ...props }) => (
          <div key={fieldName} className="space-y-1">
            <div className="text-sm">{props.placeholder}</div>
            <Textbox {...props} {...h.form.register(fieldName)} />
            <FormError message={h.form.formState.errors[fieldName]?.message} />
          </div>
        ))}
      </div>
      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default LoginForm;
