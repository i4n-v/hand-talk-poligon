import { useCallback, useContext } from 'react';
import { GlobalContext, INotifierStates } from '@/contexts/GlobalContext';

function useNotifier() {
  const { setNotifierStates } = useContext(GlobalContext)!;

  const openNotification = useCallback((config: INotifierStates) => {
    setNotifierStates(config);
  }, []);

  const closeNofication = useCallback(() => {
    setNotifierStates(null);
  }, []);

  return { openNotification, closeNofication };
}

export default useNotifier;
