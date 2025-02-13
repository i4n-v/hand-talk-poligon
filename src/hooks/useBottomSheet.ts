import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useCallback, useRef } from 'react';

type IHandleOpenBottomSheet = () => void;
type IHandleCloseBottomSheet = () => void;
type IUseBottomSheet = [any, IHandleOpenBottomSheet, IHandleCloseBottomSheet];

export default function useBottomSheet(): IUseBottomSheet {
  const ref = useRef<BottomSheetModalMethods | null>(null);

  const handleOpen = useCallback(() => {
    if (ref.current) {
      setTimeout(() => ref.current!.present(), 0);
    }
  }, []);

  const handleClose = useCallback(() => {
    if (ref.current) {
      const reference = ref.current;
      setTimeout(() => reference.dismiss(), 0);
    }
  }, []);

  return [ref, handleOpen, handleClose];
}
