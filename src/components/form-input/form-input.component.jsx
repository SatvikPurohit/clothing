import React from "react";
import "./form-input.styles.scss";

const FormInput = ({
  htmlType,
  htmlName,
  className,
  label,
  value,
  ...other
}) => {
  let classString = "form-group__input";
  let labelClassString = "form-group__label";
  if (className) classString = `${classString} ${className}`;
  if (label && value) labelClassString = `${labelClassString} shrink`;

  return (
    <div className="form-group">
      <input
        name={htmlName}
        type={htmlType}
        className={classString}
        value={value}
        {...other}
      />
      {label && (
        <label htmlFor={htmlName} className={labelClassString}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
