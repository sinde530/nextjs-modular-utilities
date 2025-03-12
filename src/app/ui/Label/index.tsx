interface LabelProps {
  children: React.ReactNode;
}

export default function Label({ children }: LabelProps) {
  return (
    <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </label>
  );
}
