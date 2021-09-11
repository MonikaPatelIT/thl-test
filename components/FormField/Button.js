import styles from "./FormField.module.scss";

const Button = ({ variant, content, onClick, children }) => {
  return (
    <button
      className={`${styles.button} ${variant ? styles[variant] : undefined}`}
      onClick={onClick}
    >
      {content ? content : children}
    </button>
  );
};
export default Button;
