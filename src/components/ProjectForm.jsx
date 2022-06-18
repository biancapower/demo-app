import React, {useState} from "react";

const ProjectForm = (props) => {
	const initialFormState = {
		name: "",
		description: ""
	}
	const [formData, setFormData] = useState(initialFormState)

	const onFormChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
	}

	return (
		<form className="form">
			<label htmlFor="name">Name of project:</label>
			<input type="text" name="name" value={formData.name} onChange={onFormChange} />
			<label htmlFor="description">Description:</label>
			<input type="text" name="description" value={formData.description} onChange={onFormChange} />
			<input type="submit" value="Create new project" />
		</form>
	)
}

export default ProjectForm;