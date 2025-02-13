import { BottomSheetModalProps } from '@gorhom/bottom-sheet';
import { BottomSheetFlatListProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { ViewStyle, StyleProp } from 'react-native';

type IBottomSheetProps = Omit<BottomSheetModalProps, 'children'> &
  React.RefAttributes<BottomSheetModalMethods[]>;

interface IFlatlisProps<T> extends BottomSheetFlatListProps<T> {
  itemKeyExtractor?: keyof T & string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

interface IBottomSheetListProps<T> extends IBottomSheetProps {
  index?: number;
  snapPoints?: Array<string | number>;
  enableBackdropInteractions?: boolean;
  indicatorStyle?: StyleProp<ViewStyle>;
  FooterComponent?: React.ComponentType<any> | null;
  backDropStyle?: StyleProp<ViewStyle>;
  flatListProps: IFlatlisProps<T>;
  onOpen?(): void;
  onClose?(): void;
}

export type { IBottomSheetListProps, IFlatlisProps };
