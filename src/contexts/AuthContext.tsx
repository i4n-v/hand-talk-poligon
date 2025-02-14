import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '@/types/User';
import auth from '@react-native-firebase/auth';
import { useLoading } from '@/hooks';

interface IAuthContextProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

function AuthProvider({ children }: IAuthContextProviderProps) {
  const loading = useLoading();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((userData) => {
      if (userData) {
        setUser({
          id: userData.uid,
          email: userData.email!,
        });
      } else {
        setUser(null);
      }

      loading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
