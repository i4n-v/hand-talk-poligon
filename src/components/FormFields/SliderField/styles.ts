import styled from 'styled-components/native';
import { ISlideSizes } from './types';

interface ISizeTrack {
  size: ISlideSizes;
}

const sizes = {
  xs: {
    slideTrack: '4px',
    fillTrack: '4px',
    slideTop: '-4px',
    slide: '12px',
  },
  sm: {
    slideTrack: '8px',
    fillTrack: '8px',
    slideTop: '-6px',
    slide: '20px',
  },
};

const SliderContainer = styled.View`
  row-gap: 10px;
  padding: 0 6px;
`;

const SlideTrack = styled.View<ISizeTrack>`
  position: relative;
  height: ${({ size }) => sizes[size].slideTrack};
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.secondary?.[200]};
`;

const FillTrack = styled.View<ISizeTrack>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ size }) => sizes[size].fillTrack};
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary?.[500]};
`;

const SliderLabel = styled.TextInput`
  position: absolute;
  top: -46px;
  min-width: 38px;
  border-radius: 8px;
  padding: 1px 8px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary?.[0]};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary?.[300]};
  ${({ theme }) => theme.shadows[0] as any};
  font-family: ${({ theme }) => theme.typography.fonts.primary.medium};
  font-size: ${({ theme }) => theme.typography.size.xxs + 'px'};
  color: ${({ theme }) => theme.colors.text?.[700]};
`;

const Slide = styled.View<ISizeTrack>`
  position: absolute;
  top: ${({ size }) => sizes[size].slideTop};
  width: ${({ size }) => sizes[size].slide};
  height: ${({ size }) => sizes[size].slide};
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary?.[500]};
`;

export { SliderContainer, SlideTrack, FillTrack, SliderLabel, Slide };
