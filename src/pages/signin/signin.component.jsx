import React from "react";
import SignInForm from "../../components/signin-form/signin-form.component";
import RegisterForm from "../../components/register-form/register-form.component";
import "./signin.styles.scss";

const INIT_STATE = {
  email: "",
  password: "",
  register_email: "",
  register_password: "",
  register_confirm_password: "",
  register_phn: "",
};

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = INIT_STATE;
  }

  /**
   * Reset
   *
   * @memberof SignIn
   */
  onSubmit = (event) => {
    // prevent or else page will load
    event.preventDefault();
    this.setState({
      ...INIT_STATE,
    });
  };

  /**
   * unique names
   * so, common for all
   * @memberof SignIn
   */
  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const signinFieldValues = {
      email: this.state.email,
      password: this.state.password,
    };

    const registerFieldValues = {
      register_email: this.state.register_email,
      register_password: this.state.register_password,
      register_confirm_password: this.state.register_confirm_password,
      register_phn: this.state.register_phn,
    };

    return (
      <div className="signin">
        <SignInForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          fieldValues={signinFieldValues}
        />
        <RegisterForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          fieldValues={registerFieldValues}
        />
      </div>
    );
  }
}

export default SignIn;
