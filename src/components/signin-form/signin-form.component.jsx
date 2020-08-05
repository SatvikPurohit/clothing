import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./signin-form.styles.scss";

const SignInForm = ({ onSubmit, onChange, fieldValues }) => {
  const { email, password } = fieldValues;
  return (
    <div className="signin-form">
      <h2 className="signin-form__title"> I already have an account</h2>
      <span className="signin-form__subtitle">
        Sign in with existing account
      </span>

      <form onSubmit={onSubmit}>
        <FormInput
          htmlName="email"
          htmlType="email"
          className="signin-form__input"
          value={email}
          onChange={onChange}
          label="Email"
        />
        <FormInput
          htmlName="password"
          htmlType="password"
          className="signin-form__input"
          value={password}
          onChange={onChange}
          label="Password"
        />
        <div className="signin-form__button-group">
          <Button htmlType="submit" value="Sign In" />
          <Button htmlType="button" type="primary" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
