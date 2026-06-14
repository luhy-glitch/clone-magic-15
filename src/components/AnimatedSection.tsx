import React, { forwardRef } from 'react';

// Vestigiala animationsprops (delay/direction) accepteras men strippas från DOM:en.
type AnimatedProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  direction?: string;
};

// Huvudkomponenten
export const AnimatedSection = forwardRef<HTMLDivElement, AnimatedProps>(
  ({ children, className, id, ...props }, ref) => (
    <div ref={ref} className={className} id={id} {...props}>{children}</div>
  )
);
AnimatedSection.displayName = 'AnimatedSection';

// FadeIn
export const FadeIn = forwardRef<HTMLDivElement, AnimatedProps>(
  ({ children, className, id, delay, ...props }, ref) => (
    <div ref={ref} className={className} id={id} {...props}>{children}</div>
  )
);
FadeIn.displayName = 'FadeIn';

// ScaleIn
export const ScaleIn = forwardRef<HTMLDivElement, AnimatedProps>(
  ({ children, className, id, delay, ...props }, ref) => (
    <div ref={ref} className={className} id={id} {...props}>{children}</div>
  )
);
ScaleIn.displayName = 'ScaleIn';

// SlideIn (ifall den används någonstans)
export const SlideIn = forwardRef<HTMLDivElement, AnimatedProps>(
  ({ children, className, id, delay, direction, ...props }, ref) => (
    <div ref={ref} className={className} id={id} {...props}>{children}</div>
  )
);
SlideIn.displayName = 'SlideIn';

// StaggerContainer (vanlig i liknande teman)
export const StaggerContainer = forwardRef<HTMLDivElement, AnimatedProps>(
  ({ children, className, id, ...props }, ref) => (
    <div ref={ref} className={className} id={id} {...props}>{children}</div>
  )
);
StaggerContainer.displayName = 'StaggerContainer';

export default AnimatedSection;
