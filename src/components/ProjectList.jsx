import React from "react";

const ProjectList = (props) => {
	const {projects} = props

	return (
		<div>
			{projects.map(({name, description}, index) => (
				<div key={index}>
					<h4>{name}</h4>
					<p>{description}</p>
				</div>
			))}
		</div>
	)
}

export default ProjectList;