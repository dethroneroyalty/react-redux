import React from "react";
import validator from "validator";
import PropTypes from "prop-types";

import InlineError from "../messages/InlineError";

export default class LoginForm extends React.Component {
	state = {
		data: {
			email: "",
			password: ""
		},
		errors: {},
		loading: false
	};

	onChange = ev => {
		const { name, value } = ev.target;
		this.setState(prev => ({
			data: { ...prev.data, [name]: value }
		}));
	};

	onSubmit = ev => {
		ev.preventDefault();

		const errors = validate(this.state.data);
		this.setState({ errors });

		if (Object.keys(errors).length === 0) {
			this.props.submit(this.state.data);
		}
	};

	render() {
		const { data, errors } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<div className="field">
					<label>
						Email:
						<input
							id="email"
							type="email"
							name="email"
							placeholder="example@example.com"
							value={data.email}
							onChange={this.onChange}
						/>
					</label>
					{errors && errors.email && <InlineError text={errors.email} />}
				</div>
				<div className="field">
					<label>
						Password:
						<input
							id="password"
							type="password"
							name="password"
							placeholder="super secret password here"
							value={data.password}
							onChange={this.onChange}
						/>
					</label>
					{errors && errors.password && <InlineError text={errors.password} />}
				</div>
				<div className="field">
					<button>Login</button>
				</div>
			</form>
		);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};

function validate(data) {
	const errors = {};

	if (!data.password) errors.password = "Password can't be blank";
	if (data.password.length < 8) errors.password = "Password too short";
	if (!validator.isEmail(data.email)) errors.email = "Invalid email";

	return errors;
}
