interface StageProps {
  number: string;
  label: string;
  showArrow?: boolean;
}

export function Stage({ number, label, showArrow = true }: StageProps) {
  return (
    <>
      <div className="flex items-center gap-2 px-4 py-3 border border-navy-700 bg-navy-900 hover:border-navy-500 transition-colors">
        <span className="font-display text-sm font-bold text-accent">
          {number}
        </span>
        <span className="text-base font-medium text-slate-200">{label}</span>
      </div>
      {showArrow && (
        <span className="text-sm text-navy-500 mx-1 select-none">&rarr;</span>
      )}
    </>
  );
}
