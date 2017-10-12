import React from "react";

import LoginForm from "../forms/LoginForm";

export default class LoginPage extends React.Component {
	submit = data => {
		return data;
	};

	render() {
		return (
			<div>
				<h1>Login page</h1>

				<LoginForm submit={this.submit} />
			</div>
		);
	}
}
