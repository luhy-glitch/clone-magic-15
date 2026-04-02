import React, { forwardRef } from 'react';

export const AnimatedSection = forwardRef(({ children, className, id, ...props }: any, ref: any) => {
  return (
    <div ref={ref} className={className} id={id} {...props}>
      {children}
    </div>
  );
});
AnimatedSection.displayName = 'AnimatedSection';

export const FadeIn = forwardRef(({ children, className, id, delay, ...props }: any, ref: any) => {
  return (
    <div ref={ref} className={className} id={id} {...props}>
      {children}
    </div>
  );
});
FadeIn.displayName = 'FadeIn';

export default AnimatedSection;