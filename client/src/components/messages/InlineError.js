import React from "react";
import PropTypes from "prop-types";

export default function InlineError({ text }) {
	return <span style={{ color: "red" }}>{text}</span>;
}

InlineError.propTypes = {
	text: PropTypes.string.isRequired
};
