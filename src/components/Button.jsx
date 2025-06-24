import ButtonSvg from '../assets/svg/ButtonSvg.jsx';

const Button = ({ className, href, onClick, children, px, white }) => {
  // Construct Tailwind classes
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-brand-highlight ${px || "px-7"} ${white ? "text-brand-dark" : "text-neutral-100"} ${className || ""}`;
  const spanClasses = 'relative z-10';

  // Render as <button>
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
  );

  // Render as <a>
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
