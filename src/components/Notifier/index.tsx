import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import { GlobalContext } from '@/contexts/GlobalContext';
import { Container, Message, MessageContainer } from './styles';
import { useNotifier } from '@/hooks';
import { useTheme } from 'styled-components';
import { icons } from './constants';
import { Close } from '../Icons';

const AnimatedContainer = Animated.createAnimatedComponent<any>(Container);

function StatusNotifier() {
  const theme = useTheme();
  const [isUnmounted, setIsUnmounted] = useState(true);
  const { notifierStates } = useContext(GlobalContext)!;
  const { closeNofication } = useNotifier();

  const yAxis = useSharedValue(-40);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: yAxis.value,
    };
  });

  function openNotifier() {
    setIsUnmounted(false);

    if (StatusBar.currentHeight) {
      yAxis.value = withTiming(StatusBar.currentHeight + 10);
    } else {
      yAxis.value = withTiming(10);
    }
  }

  function unMountNotifier() {
    setIsUnmounted(true);
    if (notifierStates) closeNofication();
  }

  function closeNotifier() {
    yAxis.value = withTiming(-40, undefined, () => runOnJS(unMountNotifier)());
  }

  useEffect(() => {
    if (notifierStates) {
      openNotifier();

      let timeoutId: NodeJS.Timeout;

      if (!notifierStates.noTimeout) {
        const delay = notifierStates.duration ?? 3000;
        timeoutId = setTimeout(() => {
          closeNotifier();
        }, delay);
      }

      return () => clearTimeout(timeoutId);
    }

    closeNotifier();
  }, [notifierStates]);

  if (isUnmounted || !notifierStates) return null;

  const Icon = icons[notifierStates.status];

  return (
    <AnimatedContainer
      status={notifierStates.status}
      style={animatedStyle}
      accessible
      accessibilityRole="alert"
      accessibilityLabel={notifierStates.message}
    >
      <MessageContainer>
        <Icon
          accessible
          accessibilityRole="image"
          accessibilityLabel="Icone de notificação"
          color={theme.colors[notifierStates.status]?.[800]}
        />
        <Message status={notifierStates.status}>{notifierStates.message}</Message>
      </MessageContainer>
      <TouchableOpacity activeOpacity={theme.shape.opacity} onPress={closeNotifier}>
        <Close color={theme.colors[notifierStates.status]?.[800]} />
      </TouchableOpacity>
    </AnimatedContainer>
  );
}

export default StatusNotifier;
