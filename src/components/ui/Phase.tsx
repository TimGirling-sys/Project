interface PhaseProps {
  number: string;
  title: string;
  description: string;
  warning: string;
}

export function Phase({ number, title, description, warning }: PhaseProps) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
      <span className="font-display text-3xl font-bold text-navy-700 flex-shrink-0 md:w-12">
        {number}
      </span>
      <div className="flex-1 pt-0 md:pt-2">
        <h4 className="font-display text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-base leading-relaxed text-navy-300 mb-3">
          {description}
        </p>
        <p className="text-sm text-navy-400 italic">{warning}</p>
      </div>
    </div>
  );
}
