import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { LoginRes } from '@/chunks/LoginForm/LoginForm.types.ts';
import { apiClient } from '@/lib/api/axios.ts';
import { useApiRequest } from '@/lib/api/useApiRequest.ts';
import { tokenStorage, userStorage } from '@/lib/auth/auth.service.ts';

import { loginSchema } from './LoginForm.config.ts';

export default function useLoginForm() {
  const form = useForm({ resolver: yupResolver(loginSchema) });
  const apiRequest = useApiRequest<LoginRes>();

  const handleSubmit = form.handleSubmit((data) => {
    apiRequest.makeRequest(apiClient.post('auth/login', data)).subscribe((res) => {
      if (res) {
        userStorage.setData(res.user);
        tokenStorage.setData(res.token);
      }
    });
  });

  return { form, handleSubmit, apiRequest };
}
