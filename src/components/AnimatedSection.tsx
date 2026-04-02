import React, { forwardRef } from 'react';

// Huvudkomponenten
export const AnimatedSection = forwardRef(({ children, className, id, ...props }: any, ref: any) => (
  <div ref={ref} className={className} id={id} {...props}>{children}</div>
));
AnimatedSection.displayName = 'AnimatedSection';

// FadeIn
export const FadeIn = forwardRef(({ children, className, id, delay, ...props }: any, ref: any) => (
  <div ref={ref} className={className} id={id} {...props}>{children}</div>
));
FadeIn.displayName = 'FadeIn';

// ScaleIn
export const ScaleIn = forwardRef(({ children, className, id, delay, ...props }: any, ref: any) => (
  <div ref={ref} className={className} id={id} {...props}>{children}</div>
));
ScaleIn.displayName = 'ScaleIn';

// SlideIn (ifall den används någonstans)
export const SlideIn = forwardRef(({ children, className, id, delay, direction, ...props }: any, ref: any) => (
  <div ref={ref} className={className} id={id} {...props}>{children}</div>
));
SlideIn.displayName = 'SlideIn';

// StaggerContainer (vanlig i liknande teman)
export const StaggerContainer = forwardRef(({ children, className, id, ...props }: any, ref: any) => (
  <div ref={ref} className={className} id={id} {...props}>{children}</div>
));
StaggerContainer.displayName = 'StaggerContainer';

export default AnimatedSection;