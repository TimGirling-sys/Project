interface ResultItemProps {
  label: string;
  title: string;
  description: string;
}

export function ResultItem({ label, title, description }: ResultItemProps) {
  return (
    <div className="pl-6 border-l-2 border-navy-700">
      <span className="block text-sm font-semibold text-accent mb-2 tracking-wide">
        {label}
      </span>
      <h4 className="font-display text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-base leading-relaxed text-navy-300">{description}</p>
    </div>
  );
}
