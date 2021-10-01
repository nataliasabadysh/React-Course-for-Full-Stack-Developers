import styles from "./style.module.css";

export const Input = ({
  type,
  onChangeInput,
  placeholder,
  autoFocus = false,
}) => {
  return (
    <input
      onChange={onChangeInput}
      type={type}
      className={styles.input}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
};
