import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const Label = (props) => {
	return (
		<div>{props.children}</div>
	)
}

Label.propTypes = {
	children: PropTypes.element.isRequired
};

export default Label;
