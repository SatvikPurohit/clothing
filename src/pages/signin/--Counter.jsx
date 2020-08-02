import React from "react";

/* let map = {
  success: "success",
  message: "info",
  caution: "warning",
  error: "danger",
};

class Notification extends React.Component {
  render() {
    let props = this.props;
    let type = map[props.type] || "info";
    let className = ["alert", `alert-${type}`].join(" ");
    if (props.message) {
      return <div className={className}>{props.message}</div>;
    }
    return null;
  }
}

// TODO: Create a Confirmation Component
const Confirmation = function (Wrapped) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      const { accept, decline, ...notificationProps } = this.props;

      return (
        <div class="alert alert-info">
          <Wrapped {...notificationProps} />
          <div class="btn btn-primary" onClick={accept}>
            Sure
          </div>
          <div class="btn btn-danger" onClick={decline}>
            No Thanks
          </div>
        </div>
      );
    }
  };
};

export function App(props) {
  const Notification = Confirmation(Notification);
  return (
    <div id="app">
      <Notification {...props.notification} />
    </div>
  );
}

export default App; */

/* import React from "react";

export function Test(props) {
  return (
    <div id="app">
      <Confirmation {...props} />
    </div>
  );
}

let map = {
  success: "success",
  message: "info",
  caution: "warning",
  error: "danger",
};

class Notification extends React.Component {
  render() {
    let props = this.props;
    let type = map[props.type] || "info";
    let className = ["alert", `alert-${type}`].join(" ");
    if (props.message) {
      return <div className={className}>{props.message}</div>;
    }
    return null;
  }
}

// TODO: Create a Confirmation Component
class Confirmation extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { accept, decline, message, type } = this.props;

    return (
      <div className="alert alert-info">
        <Notification message={message} type={type} />
        <div className="btn btn-primary" onClick={accept}>
          Sure
        </div>
        <div className="btn btn-danger" onClick={decline}>
          No Thanks
        </div>
      </div>
    );
  }
}
export default Test;
 */

export function App(props) {
  return (
    <div id="app">
      <Notification {...props.notificationProps} />
    </div>
  );
}

let map = {
  success: "success",
  message: "info",
  caution: "warning",
  error: "danger",
};

export class Notification extends React.Component {
  render() {
    let props = this.props;
    let type = map[props.type] || "info";
    let className = ["alert", `alert-${type}`].join(" ");
    if (props.message) {
      return (
        <div className={className}>
          <p>{props.message}</p>
          {props.children}
        </div>
      );
    }
    return null;
  }
}

// TODO: Create a Confirmation Component
export class Confirmation extends React.Component {
  constructor() {
    super();
    this.state = {
      close: false,
    };
    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);
  }

  decline() {
    const { decline } = this.props;
    if (!decline)
      this.setState({
        close: true,
      });
    else decline();
  }

  accept() {
    const { accept } = this.props;
    if (!accept)
      this.setState({
        close: true,
      });
    else accept();
  }

  render() {
    const { message, type } = this.props;

    if (this.state.close) return null;

    return (
      <Notification type={type} message={message}>
        <div className="btn btn-primary" onClick={this.accept}>
          Sure
        </div>
        <div className="btn btn-danger" onClick={this.decline}>
          No Thanks
        </div>
      </Notification>
    );
  }
}

export default Confirmation;
