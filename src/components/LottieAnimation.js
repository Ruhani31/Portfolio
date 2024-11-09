import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/developer-coding.json';

function LottieBackground() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="lottie-background">
      <Lottie options={defaultOptions} height="100%" width="100%" />
    </div>
  );
}

export default LottieBackground;
