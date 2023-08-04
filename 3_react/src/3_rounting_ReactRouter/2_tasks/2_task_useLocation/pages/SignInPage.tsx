import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAuthContext } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

interface FormDataI {
  username: string;
  password: string;
}

interface CharactersDataI {
  name: string;
  items: {
    id: number | string;
    name: string;
    image?: string;
    species?: string;
    status?: string;
    gender?: string;
  }[];
}

interface SignInPagePropsI {
  charactersData: CharactersDataI;
}

function SignInPage({ charactersData }: SignInPagePropsI) {
  const { user, signInFn, signOutFn } = useAuthContext();
  const navigate = useNavigate();

  const [formDataSt, setFormDataSt] = useState<FormDataI>({ username: '', password: '' });
  const [isFormValidSt, setIsFormValidSt] = useState<boolean>(true);

  function formOnChangeFn(event: ChangeEvent<HTMLFormElement>) {
    const { id, value } = event.target;
    setFormDataSt((prevFormDataSt) => ({ ...prevFormDataSt, [id]: value }));
  }

  function formOnSubmitFn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let isValid = true;

    Object.values(formDataSt).forEach((input) => {
      if (input.length < 1) {
        isValid = false;
      }
    });

    setIsFormValidSt(isValid);

    if (isValid) {
      signInFn(formDataSt.username, () => {
        navigate('/characters', { state: charactersData });
        // console.log('signIn');
      });
    }
  }

  return !user ? (
    <>
      <h1 className="text-4xl my-16">Sign in to view categories</h1>

      {!isFormValidSt && (
        <div className="p-4 bg-red-200 text-red-600 border-2 border-red-600 rounded-lg">Error</div>
      )}

      <form
        noValidate
        onChange={formOnChangeFn}
        onSubmit={formOnSubmitFn}
        className="w-6/12 m-auto flex flex-col"
      >
        <input
          type="text"
          placeholder="username"
          id="username"
          className="px-4 py-4 bg-slate-800 rounded-lg mt-8"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="px-4 py-4 bg-slate-800 rounded-lg mt-8"
        />
        <button type="submit" className="px-4 py-4 bg-slate-800 rounded-lg mt-8">
          Sign In
        </button>
      </form>
    </>
  ) : (
    <>
      <h1 className="text-4xl my-16">You are signed in</h1>
      <button
        type="button"
        onClick={() => signOutFn(() => console.log('signOutFn'))}
        className="px-4 py-4 bg-slate-800 rounded-lg mt-8"
      >
        Sign Out
      </button>
    </>
  );
}
export default SignInPage;
