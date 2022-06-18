import React from "react";

const ProjectForm = (props) => {
	return (
		<form className="form">
			<label htmlFor="name">Name of project:</label>
			<input type="text" />
			<label htmlFor="description">Description:</label>
			<input type="text" />
			<input type="submit" value="Create new project" />
		</form>
	)
}

export default ProjectForm;