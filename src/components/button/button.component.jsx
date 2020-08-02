import React from "react";
import "./button.styles.scss";

/**
 * type: 'default', 'primary','link', 'text'
 * htmlType: 'submit', 'button'
 *
 * @param {*} {
 *   type,
 *   shape,
 *   size,
 *   className,
 *   children,
 *   htmlType,
 *   ...other
 * }
 * @returns
 */
const Button = ({
  type,
  shape,
  size,
  className,
  htmlType,
  children,
  onclick,
  value,
  ...other
}) => {
  /*  large => lg
   small => sm */
  let sizeCls = "";
  switch (size) {
    case "large":
      sizeCls = "lg";
      break;
    case "small":
      sizeCls = "sm";
      break;
    default:
      break;
  }
  /* classNames */
  let classes = "";
  if (className) classes = `${className} ${classes}`;
  if (type) classes = `${classes} ${type}`;
  if (shape) classes = `${classes} ${shape}`;
  if (sizeCls) classes = `${classes} ${sizeCls}`;

  /* anchor */
  if (type === "link")
    return (
      <a className={classes} onClick={onclick}>
        {children}
      </a>
    );

  /* button */
  let button = null;
  switch (htmlType) {
    case "submit":
      button = <input type="submit" value={value} className={classes} />;
      break;
    case "button":
      button = <button onClick={onclick}>{children}</button>;
      break;
    default:
      break;
  }

  return button;
};

Button.Group = () => {
  return <></>;
};

export default Button;
