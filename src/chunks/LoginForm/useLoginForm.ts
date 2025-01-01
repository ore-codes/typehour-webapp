import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { from } from 'rxjs';

import { LoginRes } from '@/chunks/LoginForm/LoginForm.types.ts';
import { apiClient } from '@/lib/api/axios.ts';
import { useApiRequest } from '@/lib/api/useApiRequest.ts';
import { tokenStorage, userStorage } from '@/lib/auth/auth.service.ts';

import { loginSchema } from './LoginForm.config.ts';

export default function useLoginForm() {
  const form = useForm({ resolver: yupResolver(loginSchema) });
  const apiRequest = useApiRequest<LoginRes>();

  const handleSubmit = form.handleSubmit((data) => {
    const login$ = from(apiClient.post('auth/login', data));
    apiRequest.makeRequest(login$);
    apiRequest.subject.subscribe((currentState) => {
      if (currentState.data) {
        const { token, user } = currentState.data;
        userStorage.setData(user);
        tokenStorage.setData(token);
      }
    });
  });

  return { form, handleSubmit, apiRequest };
}
