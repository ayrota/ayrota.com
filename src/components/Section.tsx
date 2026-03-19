import type { PropsWithChildren } from 'react';
import { Container } from './Container';

type SectionProps = PropsWithChildren<{
  id?: string;
  width?: 'narrow' | 'wide';
  className?: string;
  /** Default: "py-24" */
  paddingClassName?: string;
}>;

export function Section({
  id,
  width = 'narrow',
  className = '',
  paddingClassName = 'py-24',
  children,
}: SectionProps) {
  const maxWidth = width === 'wide' ? 'max-w-4xl' : 'max-w-3xl';

  return (
    <section id={id} className={`relative ${paddingClassName} ${className}`.trim()}>
      <Container>
        <div className={`${maxWidth} mx-auto`}>{children}</div>
      </Container>
    </section>
  );
}