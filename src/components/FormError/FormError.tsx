import { FC } from 'react';

const FormError: FC<{ message: string | undefined }> = (props) => {
  return props.message && <div className="text-red-600">{props.message}</div>;
};

export default FormError;
