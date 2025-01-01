import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { registerSchema } from './RegisterForm.config.ts';

export default function useRegisterForm() {
  const form = useForm({
    resolver: yupResolver(registerSchema),
  });

  return { form };
}
