// projectManager.js

import { defaultTodos } from "./defaultData.js";

// ToDo Class
class Todo {
	constructor(title, description, dueDate = "No Date", priority) {
		this.id = crypto.randomUUID();
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.completed = false;
	}

	// Update the attributes passed into the method
	updateDetails(newDetails = {}) {
		if (newDetails.title != undefined) this.title = newDetails.title;
		if (newDetails.description != undefined) this.description = newDetails.description;
		if (newDetails.dueDate != undefined) this.dueDate = newDetails.dueDate;
		if (newDetails.priority != undefined) this.priority = newDetails.priority;
	}

	toggleComplete() {
		this.completed = !this.completed;
	}
}


// Project Class
class Project {
	constructor(name) {
		this.id = crypto.randomUUID();
		this.name = name;
		this.todos = [];
	}

	addTodo(todo) {
		if (todo instanceof Todo) {
			this.todos.push(todo);
		}
	}

	deleteTodo(id) {
		// Use .filter to create a new array that doesn't include 
		// the todo to remove
		this.todos = this.todos.filter(todo => todo.id !== id);
	}

	getTodoById(id) {
		return this.todos.find(todo => todo.id === id);
	}
}


// App controller
export const appController = (() => {
	// Store projects and current project
	let projects = [];
	let currentProject = null;

	// Method to initialize the default state
	function init() {
		// Create default project
		const defaultProject = new Project("I'm your default Project!");
		projects.push(defaultProject);
		currentProject = defaultProject;
		// Iterate through the todo's and create them in the default project
		defaultTodos.forEach((todo) => {
			const newTodo = new Todo(todo.title, todo.description, todo.dueDate, todo.priority);
			defaultProject.addTodo(newTodo);
		})
	}

	// Ininitalize
	init();

	// Get list of projects
	function getProjects() {
		return projects;
	}

	// Get current project
	function getCurrentProject() {
		return currentProject;
	}

	// Set current project
	function setCurrentProject(id) {
		const project = getProjectById(id);
		if (project) {
			currentProject = project;
		}
	}

	// Add project
	function addProject(name) {
		const projectToAdd = new Project(name);
		projects.push(projectToAdd);
	}

	// Delete project
	function deleteProject(id) {
		projects = projects.filter(project => project.id !== id);
	}

	// Get project by id
	function getProjectById(id) {
		const project = projects.find(project => project.id === id);
		return projects.find(project => project.id === id);
	}

	// Return public methods
	return { getProjects, getCurrentProject, setCurrentProject, addProject, deleteProject, getProjectById };
})();