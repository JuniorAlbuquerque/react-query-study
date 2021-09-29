import React from "react";

interface IInput {
  name: string;
  register: any;
  error?: string;
  isTouched?: boolean;
  isSubmitted?: boolean;
  isOne?: boolean;
  isTwo?: boolean;
}

const Input: React.FC<IInput> = ({
  name,
  register,
  error,
  isTouched,
  isSubmitted,
  isOne,
  isTwo,
  ...rest
}) => {
  const selectStyle = {
    error: (isSubmitted && error) || error,
    default: !isTouched,
    success: !error,
  };

  const chooseClassname = () => {
    if (selectStyle.error) {
      return "invalid-input";
    }

    if (selectStyle.default) {
      return "";
    }

    if (selectStyle.success) {
      return "valid-input";
    }
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
        {...register(name)}
        {...rest}
        style={{
          width: "90%",
        }}
        className={chooseClassname()}
      />
      Dirty:
      {isOne ? "S" : "n"}
      <br />
      DirtyField:
      {isTwo ? "S" : "n"}
      {error && (
        <span style={{ color: "#e45", fontWeight: "bold" }}>{error}</span>
      )}
    </div>
  );
};

export default Input;
