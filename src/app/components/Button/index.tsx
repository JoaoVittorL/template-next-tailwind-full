function Button({ title, ...rest }: { title: string; [key: string]: string }) {
  return (
    <button
      {...rest}
      className="bg-blue-dark bg-green-400 transition ease-in duration-600 text-white rounded w-full h-12 "
    >
      {title}
    </button>
  );
}

export default Button;
