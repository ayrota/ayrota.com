import type { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-lg border border-line/60 bg-panel/40 p-6 backdrop-blur shadow-soft transition-transform duration-200 hover:-translate-y-0.5">
      {children}
    </div>
  );
}