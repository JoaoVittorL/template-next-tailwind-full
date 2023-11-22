import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  title: string;
}

function Input({ icon, title, ...rest }: InputProps) {
  return (
    <div>
      <label className="block text-center text-blue-dark font-bold my-2 text-base	">
        {title}
      </label>
      <div className="flex items-center justify-between column border border-solid border-gray px-2 h-12 my-2 rounded">
        {/* {icon && <div>{icon}</div>} */}
        <input
          className="border-none h-full outline-none w-[90%] text-sm"
          {...rest}
        />
      </div>
    </div>
  );
}

export default Input;
