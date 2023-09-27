import React, { useState } from "react";

export default function MyList() {
	const [list, setList] = useState([]);
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleClick = (event) => {
		event.preventDefault();

		if (value.trim() !== "") {
			const updatedList = [...list, value];
			setList(updatedList);
			setValue("");
		}
	};

	return (
		<>
			<label>
				<input type="text" value={value} onChange={handleChange} />
				<button type="submit" onClick={handleClick}>
					Add to list
				</button>
			</label>

			<ul>
				{list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
}
