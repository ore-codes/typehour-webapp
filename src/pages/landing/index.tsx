import { FC } from 'react';
import { Link } from 'react-router-dom';

import RegisterForm from '@/chunks/RegisterForm/RegisterForm.tsx';
import AppLogo from '@/components/AppLogo/AppLogo.tsx';

const Landing: FC = () => {
  return (
    <main className="flex flex-row">
      <section className="grid flex-1 place-items-center">
        <div className="flex flex-col gap-[22px] lg:min-w-[28rem]">
          <AppLogo className="self-center text-lg" />
          <RegisterForm />
          <section className="rounded-xl border-border p-4 text-center lg:border">
            <span>Already have an account?</span>{' '}
            <Link to="/" className="font-semibold text-primary underline hover:no-underline">
              Sign in
            </Link>
          </section>
        </div>
      </section>
      <figure className="sticky top-0 hidden h-screen basis-1/2 bg-[url('/images/banner-image.jpg')] bg-cover bg-center brightness-75 lg:block" />
    </main>
  );
};

export default Landing;
