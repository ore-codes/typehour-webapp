import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { from } from 'rxjs';

import { apiClient } from '@/lib/api/axios.ts';
import { useApiRequest } from '@/lib/api/useApiRequest.ts';
import { tokenStorage, userStorage } from '@/lib/auth/auth.service.ts';

import { registerSchema } from './RegisterForm.config.ts';
import { RegisterRes } from './RegisterForm.types.ts';

export default function useRegisterForm() {
  const apiRequest = useApiRequest<RegisterRes>();
  const form = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleSubmit = form.handleSubmit((data) => {
    const register$ = from(apiClient.post('auth/register', data));
    apiRequest.makeRequest(register$);
    apiRequest.subject.subscribe((currentState) => {
      if (currentState.data) {
        const { token, user } = currentState.data;
        userStorage.setData(user);
        tokenStorage.setData(token);
      }
    });
  });

  return { form, handleSubmit, errors: apiRequest.errors };
}
