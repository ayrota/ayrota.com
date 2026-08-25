import type { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-lg border border-line/60 bg-panel/80 p-6 shadow-soft transition-transform duration-200 hover:-translate-y-0.5">
      {children}
    </div>
  );
}