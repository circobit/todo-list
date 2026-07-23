import { appController } from "./projectManager.js";
import trashCan from "../assets/images/icons/trash-can.svg";
import tag from "../assets/images/icons/tag.svg";
import calendar from "../assets/images/icons/calendar.svg";

// Helper function to change complete status
function toggleComplete(button, todoTitle, todo) {
	// Change completed status in todo object
	todo.toggleComplete();
	// Add or remove class lists in elements to 
	// change them visually from CSS
	button.classList.toggle("completed");
	todoTitle.classList.toggle("todoDone");
};

// Dom controller
export const domController = (() => {

	function renderProject(id) {
		// Get project by id
		const project = appController.getProjectById(id);
		// Get project items
		const projectItems = project.todos;
		// Clean previous content in #mainContent
		const mainContent = document.getElementById("mainContent");
		mainContent.innerHTML = "";
		// Add project div
		const projectTitleDiv = document.createElement("div");
		projectTitleDiv.className = "projectDiv";
		projectTitleDiv.textContent = project.name;
		mainContent.appendChild(projectTitleDiv);
		// Add container of ToDo's list
		const todoList = document.createElement("div");
		todoList.className = "todoList";
		mainContent.appendChild(todoList);
		// Add ToDo's cards
		projectItems.forEach((todo) => {
			// Create html elements
			const todoCard = document.createElement("div");
			todoCard.className = "todoCard";
			const todoCardTop = document.createElement("div");
			todoCardTop.className = "todoCardTop";
			todoCard.appendChild(todoCardTop);
			const todoCardBottom = document.createElement("div");
			todoCardBottom.className = "todoCardBottom";
			todoCard.appendChild(todoCardBottom);
			const todoCheckBtn= document.createElement("button");
			todoCheckBtn.className = "todoCheckBtn";
			todoCardTop.appendChild(todoCheckBtn);
			const todoTitle = document.createElement("div");
			todoTitle.className = "todoTitle";
			todoTitle.textContent = todo.title;
			todoCardTop.appendChild(todoTitle);
			const todoTag = document.createElement("div");
			todoTag.className = "todoTag";
			todoTag.textContent = todo.priority;
			todoCardTop.appendChild(todoTag);
			const todoDeleteBtn= document.createElement("button");
			todoDeleteBtn.className = "todoDeleteBtn";
			todoDeleteBtn.innerHTML = trashCan;
			todoCardBottom.appendChild(todoDeleteBtn);
			const todoDescription = document.createElement("div");
			todoDescription.className = "todoDescription";
			todoDescription.textContent = todo.description;
			todoCardBottom.appendChild(todoDescription);
			const todoDueDate = document.createElement("div");
			todoDueDate.className = "todoDueDate";
			todoDueDate.textContent = todo.dueDate;
			todoCardBottom.appendChild(todoDueDate);
			// Event listeners
			todoCheckBtn.addEventListener('click', (element) => toggleComplete(element, todoTitle, todo));
		});

		return mainContent;
	}

	
	function renderProjectList() {
		// Clean previous content in #mainContent
		const mainContent = document.getElementById("mainContent");
		mainContent.innerHTML = "";
		// Add title
		const sectionTitle = document.createElement("div");
		sectionTitle.className = "sectionTitle";
		sectionTitle.textContent = "PROJECTS";
		mainContent.appendChild(sectionTitle);
        // Iterate through the project list and create elements
		const projects = appController.getProjects();
		projects.forEach((project) => {
			const projectCard = document.createElement("button");
			projectCard.className = "projectCard";
			projectCard.dataset.id = project.id;
			projectCard.textContent = project.name;
			mainContent.appendChild(projectCard);
		});

		return mainContent;
	}

	return { renderProject, renderProjectList };
})();