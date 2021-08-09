import React from "react";

interface IInput {
  name: string;
  register: any;
  error?: string;
  isTouched?: boolean;
  isSubmitted?: boolean;
}

const Input: React.FC<IInput> = ({
  name,
  register,
  error,
  isTouched,
  isSubmitted,
  ...rest
}) => {
  const selectStyle = {
    error: (isSubmitted && error) || error,
    default: !isTouched && !error,
  };

  const chooseClassname = () => {
    if (selectStyle.error) {
      return "invalid-input";
    }

    if (selectStyle.default) {
      return "";
    }

    return "valid-input";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        marginBottom: 8,
      }}
    >
      <input
        type="text"
        {...register(name, { keepTouched: false })}
        {...rest}
        style={{
          width: "90%",
        }}
        className={chooseClassname()}
      />
      {error && (
        <span style={{ color: "#e45", fontWeight: "bold" }}>{error}</span>
      )}
    </div>
  );
};

export default Input;
