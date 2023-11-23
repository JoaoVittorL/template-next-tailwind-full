import clsx from 'clsx';
type ButtonProps = {
  children: React.ReactNode;
  color?: 'green' | 'blue';
  variant?: 'filled' | 'outlined' | 'tinted' | 'plain';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function cn(...inputs: (string | undefined)[]) {
  return clsx(inputs.filter(Boolean) as string[]);
}

const Button = ({ children, color, ...rest }: ButtonProps) => {
  const defaultButtonClasses =
    'w-full justify-center flex items-center gp-2 h-12 text-md rounded-lg font-bold focus:outline-none text-white transition duration-700 ease-in-out';
  const colors = {
    green: 'bg-green-400 hover:bg-green-600',
    blue: 'bg-blue-dark-900 hover:bg-blue-800'
  };
  const colorClass = color && colors[color];

  return (
    <button {...rest} className={cn(defaultButtonClasses, colorClass)}>
      {children}
    </button>
  );
};

export default Button;
