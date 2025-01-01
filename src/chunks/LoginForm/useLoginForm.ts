import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { loginSchema } from './LoginForm.config.ts';

export default function useLoginForm() {
  const form = useForm({
    resolver: yupResolver(loginSchema),
  });

  return { form };
}
