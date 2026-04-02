import React from 'react';

export const AnimatedSection = ({ children, className, id }: any) => {
  return <div className={className} id={id}>{children}</div>;
};

export default AnimatedSection;