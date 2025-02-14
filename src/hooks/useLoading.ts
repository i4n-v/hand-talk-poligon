import { GlobalContext } from '@/contexts/GlobalContext';
import { useContext } from 'react';

export default function useLoading() {
  const { setLoading } = useContext(GlobalContext);

  function loading(isLoading: boolean) {
    setLoading(isLoading);
  }

  return loading;
}
