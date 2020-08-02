import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import "./register-form.styles.scss";

const RegisterForm = ({ onSubmit, onChange, fieldValues }) => {
  const {
    register_email,
    register_password,
    register_confirm_password,
    register_phn,
  } = fieldValues;

  return (
    <div className="register-form">
      <h2 className="register-form__title"> Create Account</h2>
      <span className="register-form__subtitle">Sign up with your details</span>

      <form onSubmit={onSubmit}>
        <FormInput
          htmlName="email"
          htmlType="email"
          className="register-form__input"
          value={register_email}
          onChange={onChange}
          label="Email"
          required
        />
        <FormInput
          htmlName="register_password"
          htmlType="password"
          className="register-form__input"
          value={register_password}
          onChange={onChange}
          label="Password"
          required
        />
        <FormInput
          htmlName="register_confirm_password"
          htmlType="password"
          className="register-form__input"
          value={register_confirm_password}
          onChange={onChange}
          label="Confirm Password"
          required
        />
        <FormInput
          htmlName="register_phn"
          htmlType="number"
          className="register-form__input"
          value={register_phn}
          onChange={onChange}
          label="Phone"
          required
        />
        <Button
          htmlType="submit"
          value="Create Account"
          className="register-form__submit"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
