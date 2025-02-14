import React, { useContext } from 'react';
import LottieView from 'lottie-react-native';
import { GlobalContext } from '@/contexts/GlobalContext';
import triangleAnimation from '@/assets/animations/triangle-animation.json';
import { LoadingContainer } from './styles';

function FullPageLoading() {
  const { loading } = useContext(GlobalContext);

  if (!loading) return null;

  return (
    <LoadingContainer>
      <LottieView
        autoPlay
        source={triangleAnimation}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </LoadingContainer>
  );
}

export default FullPageLoading;
