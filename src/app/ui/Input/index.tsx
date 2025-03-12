interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export default function Input({ error, className, ...props }: InputProps) {
  return (
    <>
      <input
        className={`w-full px-3 py-2 rounded-md border-[1px] h-[38px] border-borderColor focus:outline-none focus:ring-borderColor focus:border-[2px]" ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </>
  );
}
