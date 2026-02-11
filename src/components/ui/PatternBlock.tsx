interface PatternBlockProps {
  label: string;
  text: string;
}

export function PatternBlock({ label, text }: PatternBlockProps) {
  return (
    <div className="p-8 bg-navy-900 border-l-[3px] border-accent my-8">
      <p className="text-xs font-semibold tracking-label uppercase text-accent mb-4">
        {label}
      </p>
      <p className="text-lg leading-relaxed text-slate-200">{text}</p>
    </div>
  );
}
