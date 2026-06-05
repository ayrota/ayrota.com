import { useState } from 'react';

type CapabilityCardProps = {
  title: string;
  description: string;
};

export function CapabilityCard({
  title,
  description,
}: CapabilityCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-fit rounded-lg border border-line/60 bg-panel/40 p-6 backdrop-blur shadow-soft transition-transform duration-200 hover:-translate-y-0.5">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-4 text-left"
      >
        <h3 className="text-lg font-medium leading-snug text-fg">
          {title}
        </h3>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line/60 text-sm text-muted transition-all duration-200 ${
            isOpen
              ? 'rotate-180 border-line text-fg'
              : 'group-hover:border-line group-hover:text-fg'
          }`}
        >
          ⌄
        </span>
      </button>

      {isOpen && (
        <p className="mt-5 border-t border-line/40 pt-5 text-sm leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}