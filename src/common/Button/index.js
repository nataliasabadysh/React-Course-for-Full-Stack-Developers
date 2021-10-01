import styles from "./style.module.css";

export const Button = ({ type = "button", label, onClickButton }) => {
  return (
    <button onClick={onClickButton} type={type} className={styles.btn}>
      {label}
    </button>
  );
};
