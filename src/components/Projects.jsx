import React, {useState, useEffect} from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList"

const Projects = () => {
	const initialProjects = []

	const addProject = (project) => {
		// add project to start of list so it displays first
		// then add in a copy of existing projects (using spread operator)
		setProjects([project, ...projects])
	}

	const [projects, setProjects] = useState(initialProjects)

	useEffect(() => {
		fetch('data/projects.json',{
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}).then((response) => response.json())
		.then((projects) => {
			console.log("projects:", projects)
			setProjects(projects)
		})
		.catch((error) => console.log(error))
	},[])

	return(
		<div>
			<h1>Projects</h1>
			<ProjectForm addProject={addProject} />
			<ProjectList projects={projects} />
		</div>
	)
}

export default Projects;