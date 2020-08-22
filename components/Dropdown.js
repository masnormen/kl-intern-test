import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const Dropdown = (props) => {
	const [expanded, setExpanded] = useState(false);
	const [value, setValue] = useState(props.value == null
		? {label: "ALL"}
		: props.value.label
	);
	
	useEffect(() => {
		setValue(props.value == null
			? {label: "ALL"}
			: props.value
		);
	}, [props.value]);
	
	
	const handleItemClick = (item) => {
		setExpanded(false);
		setValue(item);
		props.onChange(item);
	}
	
	const handleTriggerClick = () => {
		setExpanded(!expanded);
	}
	
	const selection = () => {
		if (expanded) {
			return (
				<div className="content">
					{props.options.map((item, index) =>
						<div key={index} onClick={() => handleItemClick(item)} className="item">{item.label}</div>
					)}
				</div>
			)
		}
		return <></>;
	}
	
	return (
		<div
			className={`dropdown ${expanded ? 'active' : ''}`}
			tabIndex="0"
			onBlur={() => setExpanded(false)}
		>
			<div
				className="trigger"
				onClick={() => handleTriggerClick()}
			>
				{value == null ? "ALL" : value.label}
				<span className="arrow">▼</span>
			</div>
			{selection()}
		</div>
	);
}

Dropdown.propTypes = {
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.object
};

export default Dropdown;
