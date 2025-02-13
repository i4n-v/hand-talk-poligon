import React, { useCallback, useEffect } from 'react';
import { useController } from 'react-hook-form';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { FillTrack, Slide, SlideTrack, SliderContainer, SliderLabel } from './styles';
import { Label, ErrorMessage } from '../FieldUtilitaries';
import { IAnimationContext, ISliderFieldProps } from './types';

const AnimatedSliderLabel = Animated.createAnimatedComponent<any>(SliderLabel);
const AnimatedFillTrack = Animated.createAnimatedComponent<any>(FillTrack);
const AnimatedSlide = Animated.createAnimatedComponent<any>(Slide);

export default function SliderField({
  name,
  control,
  value,
  label,
  min = 0,
  max = 100,
  step = 1,
  size = 'sm',
  disabled,
  required,
  containerProps,
}: ISliderFieldProps) {
  const {
    field,
    formState: { errors },
  } = useController({ name, control });
  const error = errors[field.name]?.message as string | undefined;

  const fieldValue: number = value !== undefined ? value : field.value;

  function handleChange() {
    const value =
      min + Math.round(slideXAxis.value / (maxWidth.value / ((max - min) / step))) * step;

    field.onChange(value);
  }

  const slideXAxis = useSharedValue(0);
  const slideScale = useSharedValue(1);
  const maxWidth = useSharedValue(0);
  const changedBy = useSharedValue('external');

  const calculateX = useCallback(
    (value: number, maxWidth: number) => {
      let relativeValue = (value - min) / (max - min);
      const isNotValid = isNaN(relativeValue) || !isFinite(relativeValue);

      if (isNotValid) {
        relativeValue = 0;
      } else {
        relativeValue = Number(relativeValue.toFixed(3));
      }

      const initialSlideXAxis = relativeValue * maxWidth;
      return initialSlideXAxis;
    },
    [max, min],
  );

  useEffect(() => {
    if (fieldValue && changedBy.value === 'external' && maxWidth.value) {
      slideXAxis.value = withTiming(calculateX(fieldValue, maxWidth.value));
    }

    changedBy.value = 'external';
  }, [fieldValue, min, max]);

  const fillTrackAnimatedStyles = useAnimatedStyle(() => ({
    width: slideXAxis.value,
  }));

  const slideAnimatedStyles = useAnimatedStyle(() => ({
    left: slideXAxis.value - 12,
    transform: [
      {
        scale: slideScale.value,
      },
    ],
  }));

  const sliderLabelAnimatedStyles = useAnimatedStyle(() => ({
    left: slideXAxis.value - 21,
    opacity: interpolate(slideScale.value, [1, 1.3], [0, 1]),
  }));

  const startX = useSharedValue(0);

  const slideGesture = Gesture.Pan()
    .enabled(!disabled)
    .activateAfterLongPress(0)
    .onBegin(() => {
      startX.value = slideXAxis.value;
      slideScale.value = withTiming(1.3);
      changedBy.value = 'internal';
    })
    .onUpdate((event) => {
      const translationX = startX.value + event.translationX;

      if (translationX >= 0 && translationX <= maxWidth.value) {
        slideXAxis.value = translationX;
      }

      runOnJS(handleChange)();
    })
    .onEnd(() => {
      slideScale.value = withTiming(1);
    });

  const animatedSliderLabelProps = useAnimatedProps<any>(() => {
    const value =
      min + Math.round(slideXAxis.value / (maxWidth.value / ((max - min) / step))) * step;

    return { text: Number.isNaN(value) ? '0' : value.toString() };
  });

  return (
    <SliderContainer {...containerProps}>
      <Label error={!!error} required={required} disabled={disabled}>
        {label}
      </Label>
      <SlideTrack
        accessible
        accessibilityLabel={label}
        accessibilityLabelledBy={label}
        accessibilityRole="adjustable"
        size={size}
        onLayout={function (event) {
          const { width } = event.nativeEvent.layout;
          maxWidth.value = width;
          slideXAxis.value = withTiming(calculateX(fieldValue, width));
        }}
      >
        <AnimatedFillTrack style={fillTrackAnimatedStyles} size={size} />
        <AnimatedSliderLabel
          editable={false}
          style={sliderLabelAnimatedStyles}
          animatedProps={animatedSliderLabelProps}
        />
        <GestureDetector gesture={slideGesture}>
          <AnimatedSlide style={slideAnimatedStyles} size={size} />
        </GestureDetector>
      </SlideTrack>
      <ErrorMessage>{error}</ErrorMessage>
    </SliderContainer>
  );
}
