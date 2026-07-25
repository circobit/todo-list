// domController.js

import { appController } from "./projectManager.js";
import trashCan from "../assets/images/icons/trash-can.svg";
import tag from "../assets/images/icons/tag.svg";
import calendar from "../assets/images/icons/calendar.svg";

// Helper function to change complete status
function toggleComplete(todoCard, checkButton, deleteButton, todoTitle, todoDescription, todoTag, todoDueDate, todo) {
	// Change completed status in todo object
	todo.toggleComplete();
	// Add or remove class lists in elements to 
	// change them visually from CSS
	todoCard.classList.toggle("completed");
	checkButton.classList.toggle("completed");
	deleteButton.classList.toggle("completed");
	todoTitle.classList.toggle("todoDone");
	todoDescription.classList.toggle("todoDone");
	todoTag.classList.toggle("completed");
	todoDueDate.classList.toggle("completed");
};

// Dom controller
export const domController = (() => {

	function renderProject(id) {
		// Get project by id
		const project = appController.getProjectById(id);
		// Get project items
		const projectItems = project.todos;
		console.log(`Print Todo's list: ${projectItems}`);
		console.log(projectItems[0]);
		// Clean previous content in #mainContent
		const projectView = document.createElement("projectView");
		projectView.innerHTML = "";
		// Add project div
		const projectTitleDiv = document.createElement("div");
		projectTitleDiv.className = "projectDiv";
		projectTitleDiv.textContent = project.name;
		projectView.appendChild(projectTitleDiv);
		// Add container of ToDo's list
		const todoList = document.createElement("div");
		todoList.className = "todoList";
		projectView.appendChild(todoList);
		// Add ToDo's cards
		projectItems.forEach((todo) => {
			// Create html elements
			const todoCard = document.createElement("div");
			todoCard.className = "todoCard";
			const todoCardLeft = document.createElement("div");
			todoCardLeft.className = "todoCardLeft";
			todoCard.appendChild(todoCardLeft);
			const todoCardRight = document.createElement("div");
			todoCardRight.className = "todoCardRight";
			todoCard.appendChild(todoCardRight);
			const todoCheckBtn= document.createElement("button");
			todoCheckBtn.className = "todoCheckBtn";
			todoCardLeft.appendChild(todoCheckBtn);
			const todoDeleteBtn= document.createElement("button");
			todoDeleteBtn.className = "todoDeleteBtn";
			todoDeleteBtn.innerHTML = trashCan;
			todoCardLeft.appendChild(todoDeleteBtn);
			const todoTitleAndDescription = document.createElement("div");
			todoTitleAndDescription.className = "todoTitleAndDescription";
			todoCardRight.appendChild(todoTitleAndDescription);
			const todoTitle = document.createElement("div");
			todoTitle.className = "todoTitle";
			todoTitle.textContent = todo.title;
			todoTitleAndDescription.appendChild(todoTitle);
			const todoDescription = document.createElement("div");
			todoDescription.className = "todoDescription";
			todoDescription.textContent = todo.description;
			todoTitleAndDescription.appendChild(todoDescription);
			const todoTagAndDueDate = document.createElement("div");
			todoTagAndDueDate.className = "todoTagAndDueDate";
			todoCardRight.appendChild(todoTagAndDueDate);
			const todoTag = document.createElement("div");
			todoTag.className = "todoTag";
			todoTagAndDueDate.appendChild(todoTag);
			const todoTagSvg = document.createElement("div");
			todoTagSvg.className = "todoTagSvg";
			todoTagSvg.innerHTML = tag;
			todoTag.appendChild(todoTagSvg);
			const todoTagText = document.createElement("div");
			todoTagText.className = "todoTagText";
			todoTagText.textContent = todo.priority;
			todoTag.appendChild(todoTagText);
			const todoDueDate = document.createElement("div");
			todoDueDate.className = "todoDueDate";
			todoTagAndDueDate.appendChild(todoDueDate);
			const todoDueDateSvg = document.createElement("div");
			todoDueDateSvg.className = "todoDueDateSvg";
			todoDueDateSvg.innerHTML = calendar;
			todoDueDate.appendChild(todoDueDateSvg);
			const todoDueDateText = document.createElement("div");
			todoDueDateText.className = "todoDueDateText";
			todoDueDateText.textContent = todo.dueDate;
			todoDueDate.appendChild(todoDueDateText);
			// Event listeners
			todoCheckBtn.addEventListener('click', () => toggleComplete(todoCard, todoCheckBtn, todoDeleteBtn, todoTitle, todoDescription, todoTag, todoDueDate, todo));
			// Append ToDo card to the ToDo List
			todoList.appendChild(todoCard);
		});

		return projectView;
	}

	
	function renderProjectList() {
		// Clean previous content in #projectListView
		const projectListView = document.createElement("projectListView");
		projectListView.innerHTML = "";
		// Add title
		const sectionTitle = document.createElement("div");
		sectionTitle.className = "sectionTitle";
		sectionTitle.textContent = "PROJECTS";
		projectListView.appendChild(sectionTitle);
        // Iterate through the project list and create elements
		const projects = appController.getProjects();
		projects.forEach((project) => {
			const projectCard = document.createElement("button");
			projectCard.className = "projectCard";
			projectCard.dataset.id = project.id;
			projectCard.textContent = project.name;
			projectListView.appendChild(projectCard);
		});

		return projectListView;
	}

	return { renderProject, renderProjectList };
})();