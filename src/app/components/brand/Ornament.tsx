import type { ReactNode } from 'react';

/* Filete com losango no meio: ——— ◆ ——— (ou um texto no lugar do losango) */
export function Ornament({ className = '', lineClass = 'bg-gold/70', children }: { className?: string; lineClass?: string; children?: ReactNode }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden={children ? undefined : true}>
      <span className={`h-px flex-1 ${lineClass}`} />
      {children ?? <span className="size-1.5 rotate-45 bg-gold" />}
      <span className={`h-px flex-1 ${lineClass}`} />
    </div>
  );
}

/* Coluna jônica em traço, para a placa das obras */
export function ColumnIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="1" className={className} aria-hidden>
      <rect x="2" y="3" width="20" height="2" />
      <path d="M5 5h14v3H5z" />
      <circle cx="4.5" cy="7.5" r="2.2" />
      <circle cx="19.5" cy="7.5" r="2.2" />
      <rect x="6" y="9" width="12" height="24" />
      <path d="M9 10.5v21M12 10.5v21M15 10.5v21" strokeOpacity="0.7" />
      <rect x="4.5" y="33" width="15" height="2" />
      <rect x="3" y="35" width="18" height="2.5" />
    </svg>
  );
}
