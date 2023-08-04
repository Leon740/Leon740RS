import React, { createContext, useState, SetStateAction, ReactElement, useContext } from 'react';

interface AuthContextI {
  user: string | null;
  signInFn: (user: string, callback: () => void) => void;
  signOutFn: (callback: () => void) => void;
}

const AuthContext = createContext<AuthContextI>({
  user: null,
  signInFn: () => {},
  signOutFn: () => {}
});

export function useAuthContext() {
  return useContext(AuthContext);
}

interface AuthProviderPropsI {
  children: ReactElement;
}

function AuthProvider({ children }: AuthProviderPropsI) {
  const [userSt, setUserSt] = useState<string>('');

  const signInFn = (user: SetStateAction<string>, callback: () => void) => {
    setUserSt(user);
    callback();
  };

  const signOutFn = (callback: () => void) => {
    setUserSt('');
    callback();
  };

  const value: AuthContextI = {
    user: userSt,
    signInFn,
    signOutFn
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
