import { ReactNode, createContext, useEffect, useState } from 'react';
import { IUser } from '@/types/User';
import { useLoading } from '@/hooks';
import { authService, remoteService } from '@/services';
import { IFirebaseFlags } from '@/types/Firebase';

interface IAuthContextProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  flags: IFirebaseFlags | null;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

function AuthProvider({ children }: IAuthContextProviderProps) {
  const loading = useLoading();
  const [user, setUser] = useState<IUser | null>(null);
  const [flags, setFlags] = useState<IFirebaseFlags | null>(null);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged()((userData) => {
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

  useEffect(() => {
    async function setDefaultRemote() {
      try {
        await remoteService.setDefault();
        const appFlags = remoteService.getConfig() as unknown as IFirebaseFlags;
        setFlags(appFlags);
      } catch {
        console.log('Remote config error');
      }
    }

    setDefaultRemote();

    const unsubscribe = remoteService.onConfigUpdated()(async () => {
      await remoteService.fetchAndActivate();
      const appFlags = remoteService.getConfig();
      setFlags(appFlags);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        flags,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
