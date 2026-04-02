import React, { forwardRef } from 'react';

export const AnimatedSection = forwardRef(({ children, className, id, ...props }: any, ref: any) => {
  return (
    <div ref={ref} className={className} id={id} {...props}>
      {children}
    </div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';
export default AnimatedSection;