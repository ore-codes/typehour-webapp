import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { apiClient } from '@/lib/api/axios.ts';
import { useApiRequest } from '@/lib/api/useApiRequest.ts';
import { tokenStorage, userStorage } from '@/lib/auth/auth.service.ts';

import { registerSchema } from './RegisterForm.config.ts';
import { RegisterRes } from './RegisterForm.types.ts';

export default function useRegisterForm() {
  const form = useForm({ resolver: yupResolver(registerSchema) });
  const apiRequest = useApiRequest<RegisterRes>();

  const handleSubmit = form.handleSubmit((data) => {
    apiRequest.makeRequest(apiClient.post('auth/register', data)).subscribe((res) => {
      if (res) {
        userStorage.setData(res.user);
        tokenStorage.setData(res.token);
      }
    });
  });

  return { form, handleSubmit, apiRequest };
}
