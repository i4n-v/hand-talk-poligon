import React, { forwardRef, useRef } from 'react';
import {
  BottomSheetBackdropProps,
  BottomSheetFlatList,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import styles, { Backdrop } from './styles';
import accessObjectByString from '@/utils/accessObjectByString';
import { IBottomSheetListProps } from './types';

function BottomSheetListComponent<T extends Record<string, any>>(
  {
    index = 0,
    snapPoints = [20, '25%', '50%', '75%', '95%'],
    enableBackdropInteractions = false,
    onChange,
    indicatorStyle,
    backDropStyle,
    flatListProps,
    FooterComponent,
    onOpen,
    onClose,
    ...props
  }: IBottomSheetListProps<T>,
  ref: any,
) {
  const bottomSheetListStyles = styles();
  const firstRender = useRef(true);

  const CustomBackDrop = React.memo(({ style }: BottomSheetBackdropProps) => (
    <Backdrop style={[style, backDropStyle]} onPress={() => ref.current.dismiss()} />
  ));

  return (
    <BottomSheetModal
      ref={ref}
      index={index}
      snapPoints={snapPoints}
      onChange={onChange}
      backgroundStyle={bottomSheetListStyles.indicatorContainer}
      handleIndicatorStyle={[bottomSheetListStyles.indicator, indicatorStyle]}
      backdropComponent={enableBackdropInteractions ? undefined : CustomBackDrop}
      handleStyle={backDropStyle}
      onAnimate={() => {
        if (firstRender.current && onOpen instanceof Function) {
          onOpen();
        }

        firstRender.current = false;
      }}
      onDismiss={() => {
        if (onClose instanceof Function) {
          onClose();
        }

        firstRender.current = true;
      }}
      {...props}
    >
      <BottomSheetFlatList
        {...flatListProps}
        contentContainerStyle={[
          bottomSheetListStyles.contentContainer,
          flatListProps?.contentContainerStyle,
        ]}
        keyExtractor={(item, index) => {
          if (typeof flatListProps?.itemKeyExtractor === 'string') {
            return accessObjectByString(item, flatListProps.itemKeyExtractor);
          }

          return index;
        }}
        ListFooterComponent={flatListProps?.ListFooterComponent}
        ListEmptyComponent={flatListProps?.ListEmptyComponent}
      />
      {FooterComponent && <FooterComponent />}
    </BottomSheetModal>
  );
}

type IBottomSheetListAssertion = <T extends Record<string, any>>(
  props: IBottomSheetListProps<T> & { ref?: any },
) => ReturnType<typeof BottomSheetListComponent>;

const BottomSheetList = forwardRef(BottomSheetListComponent) as IBottomSheetListAssertion;

export default BottomSheetList;
