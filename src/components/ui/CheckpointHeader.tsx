interface CheckpointHeaderProps {
  label: string;
}

export function CheckpointHeader({ label }: CheckpointHeaderProps) {
  return (
    <div className="mb-12">
      <span className="text-xs font-semibold tracking-label uppercase text-accent">
        {label}
      </span>
    </div>
  );
}
