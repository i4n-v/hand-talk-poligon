import { ReactNode, createContext, useCallback, useState } from 'react';

interface INotifierStates {
  status: 'error' | 'info' | 'success' | 'warning';
  message: string;
  noTimeout?: boolean;
  duration?: number;
}

interface IGlobalContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  notifierStates: INotifierStates | null;
  setNotifierStates: React.Dispatch<React.SetStateAction<INotifierStates | null>>;
}

interface IGlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<IGlobalContextProps>({} as IGlobalContextProps);

function GlobalProvider({ children }: IGlobalContextProviderProps) {
  const [loading, setLoading] = useState(true);
  const [notifierStates, setNotifierStates] = useState<INotifierStates | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        setNotifierStates,
        notifierStates,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export type { INotifierStates };

export { GlobalContext, GlobalProvider };
