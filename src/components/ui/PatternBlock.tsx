interface PatternBlockProps {
  label: string;
  text: string;
}

export function PatternBlock({ label, text }: PatternBlockProps) {
  return (
    <div className="p-8 bg-gray-50 border-l-[3px] border-gray-300 my-8">
      <p className="text-xs font-semibold tracking-label uppercase text-gray-600 mb-4">
        {label}
      </p>
      <p className="text-lg leading-relaxed text-gray-900">{text}</p>
    </div>
  );
}
