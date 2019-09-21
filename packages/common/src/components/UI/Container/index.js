import React from 'react';
import ContainerWrapper from './style';

const Container = ({
  children,
  className,
  fullWidth,
  mobileGutter,
  noGutter,
  width,
  id,
}) => {
  const addAllClasses = ['container'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      id={id}
      className={addAllClasses.join(' ')}
      fullWidth={fullWidth}
      noGutter={noGutter}
      mobileGutter={mobileGutter}
      width={width}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
