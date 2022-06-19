import React, {useEffect, useReducer} from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList"
import reducer from "../utils/reducer";

const Projects = () => {
	const initialState = {
		projects: []
	}

	const addProject = (project) => {
		dispatch({
			type: 'addProject',
			data: project
		})
	}

	const [store, dispatch] = useReducer(reducer, initialState)
	const {projects} = store

	useEffect(() => {
		fetch('data/projects.json',{
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}).then((response) => response.json())
		.then((projects) => {
			dispatch({
				type: 'setProjects',
				data: projects
			})
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