import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { BehaviorSubject, catchError, Observable, of, switchMap } from 'rxjs';

import { ApiRequestState, ErrorResponse } from './api.types.ts';

export function useApiRequest<T>() {
  const [state, setState] = useState<ApiRequestState<T>>({
    data: null,
    errors: [],
    loading: false,
  });

  const subject = new BehaviorSubject(state);

  const makeRequest = (observable: Observable<AxiosResponse<T>>) => {
    const initialLoadingState = { ...state, loading: true, error: [] };
    setState(initialLoadingState);
    subject.next(initialLoadingState);

    observable
      .pipe(
        switchMap((response) => {
          const successState = { data: response.data, errors: [], loading: false };
          setState(successState);
          subject.next(successState);
          return of(response.data);
        }),
        catchError((err: AxiosError<ErrorResponse>) => {
          const errors = err.response?.data?.message || [];
          const errorState = {
            data: null,
            errors: Array.isArray(errors) ? errors : [errors],
            loading: false,
          };
          setState(errorState);
          subject.next(errorState);
          return of(errors);
        })
      )
      .subscribe();
  };

  return {
    ...state,
    subject,
    makeRequest,
    observable: subject.asObservable(),
  };
}
