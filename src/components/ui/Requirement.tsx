interface RequirementProps {
  number: string;
  title: string;
  value: string;
  reason: string;
  missing: string;
}

export function Requirement({
  number,
  title,
  value,
  reason,
  missing,
}: RequirementProps) {
  return (
    <div className="flex gap-4">
      <span className="font-display text-sm font-bold text-accent flex-shrink-0 pt-0.5">
        {number}
      </span>
      <div className="flex-1">
        <h4 className="font-display text-lg font-semibold text-white mb-2">{title}</h4>
        {value && <p className="text-base font-medium text-slate-200 mb-2">{value}</p>}
        <p className="text-sm text-navy-300 mb-2">{reason}</p>
        {missing && <p className="text-sm text-navy-400 italic">{missing}</p>}
      </div>
    </div>
  );
}
