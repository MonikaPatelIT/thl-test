import { Field } from "formik";
import styles from "./FormField.module.scss";

const InputFeedback = ({ error }) =>
  error ? (
    <div className={`${styles.error} ${styles.inputFeedback}`}>{error}</div>
  ) : null;

const InputField = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  required,
  ...props
}) => {
  return (
    <>
      <label className={required ? styles.required : undefined}>
        {label}
      </label>
      <input
        required={required}
        name={name}
        aria-label={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        tabIndex={0}
        className={styles.inputField}
        {...props}
      />
    </>
  );
};
const Input = ({
  id,
  name,
  value,
  error,
  touched,
  label,
  required = false,
}) => {
  return (
    <div
      className={`${styles.field} ${
        touched && error ? styles.error : undefined
      }`}
    >
      <Field
        required={required}
        id={id}
        name={name}
        label={label}
        value={value}
        component={InputField}
      />
      {touched && <InputFeedback error={error} />}
    </div>
  );
};

export default Input;
