interface StageProps {
  number: string;
  label: string;
  showArrow?: boolean;
}

export function Stage({ number, label, showArrow = true }: StageProps) {
  return (
    <>
      <div className="flex items-center gap-2 px-4 py-3 border border-gray-200 bg-white hover:border-gray-400 transition-colors">
        <span className="font-display text-sm font-bold text-gray-600">
          {number}
        </span>
        <span className="text-base font-medium text-gray-900">{label}</span>
      </div>
      {showArrow && (
        <span className="text-sm text-gray-400 mx-1 select-none">&rarr;</span>
      )}
    </>
  );
}
