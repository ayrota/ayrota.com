import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ className?: string }>;

export function Container({ className = '', children }: Props) {
  return <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 ${className}`}>{children}</div>;
}