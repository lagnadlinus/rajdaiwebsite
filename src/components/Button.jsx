const Button = ({ children, href, className = '', ...props }) => {
  const baseStyle =
    'inline-block px-6 py-2 rounded-xl font-semibold text-sm transition duration-200';
  const defaultStyle =
    'bg-brand-primary text-white hover:bg-brand-secondary shadow-md';

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${defaultStyle} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${defaultStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;


