import { appController } from "./projectManager.js";
import { loadProject } from "./loadProject.js";
import trashCan from "../assets/images/icons/trash-can.svg";
import tag from "../assets/images/icons/tag.svg";
import calendar from "../assets/images/icons/calendar.svg";
import edit from "../assets/images/icons/edit.svg";

// Helper function to change complete status and re-render
function toggleComplete(projectId, todoCard, checkButton, deleteButton, todoTitle, todoDescription, todoTag, todoDueDate, todo) {
    todo.toggleComplete();
    
    // Immediate visual feedback
    todoCard.classList.toggle("completed");
    checkButton.classList.toggle("completed");
    deleteButton.classList.toggle("completed");
    todoTitle.classList.toggle("todoDone");
    todoDescription.classList.toggle("todoDone");
    todoTag.classList.toggle("completed");
    todoDueDate.classList.toggle("completed");

    // Re-render todos' cards
    setTimeout(() => {
        const main = document.getElementById("mainContent");
        main.innerHTML = "";
        main.appendChild(domController.renderProject(projectId));
    }, 600);
}

// Helper to build individial todo card
function createTodoCard(todo, projectId) {
    const todoCard = document.createElement("div");
    todoCard.className = "todoCard";

    const todoCardLeft = document.createElement("div");
    todoCardLeft.className = "todoCardLeft";
    todoCard.appendChild(todoCardLeft);

    const todoCardRight = document.createElement("div");
    todoCardRight.className = "todoCardRight";
    todoCard.appendChild(todoCardRight);

    const todoCheckBtn = document.createElement("button");
    todoCheckBtn.className = "todoCheckBtn";
    todoCardLeft.appendChild(todoCheckBtn);

    const todoDeleteBtn = document.createElement("button");
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
    todoTag.className = `todoTag ${todo.priority.toLowerCase()}`;
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

    // Apply classes to todo elements
    if (todo.completed) {
        todoCard.classList.add("completed");
        todoCheckBtn.classList.add("completed");
        todoDeleteBtn.classList.add("completed");
        todoTitle.classList.add("todoDone");
        todoDescription.classList.add("todoDone");
        todoTag.classList.add("completed");
        todoDueDate.classList.add("completed");
    }

    // Event listener
    todoCheckBtn.addEventListener('click', () => 
        toggleComplete(projectId, todoCard, todoCheckBtn, todoDeleteBtn, todoTitle, todoDescription, todoTag, todoDueDate, todo)
    );

    return todoCard;
}

// Dom controller
export const domController = (() => {

	// Method to re-render view
	function switchView(newContent) {
		const main = document.getElementById("mainContent");
		main.innerHTML = "";
		main.appendChild(newContent);
	}

    function renderProject(id) {
        const project = appController.getProjectById(id);
        
        // Filter todos based on completion
        const pendingTodos = project.todos.filter(todo => !todo.completed);
        const completedTodos = project.todos.filter(todo => todo.completed);

        const projectView = document.createElement("projectView");
        projectView.innerHTML = "";

        const projectTitleDiv = document.createElement("div");
        projectTitleDiv.className = "projectDiv";
        projectTitleDiv.textContent = project.name;
        projectView.appendChild(projectTitleDiv);

        const todoList = document.createElement("div");
        todoList.className = "todoList";
        projectView.appendChild(todoList);

        // Render pending todos
        pendingTodos.forEach(todo => {
            todoList.appendChild(createTodoCard(todo, id));
        });

        // Render completed todos if existent
        if (completedTodos.length > 0) {
            // Title for completed todos
            const completedTitle = document.createElement("div");
            completedTitle.className = "projectDiv";
            completedTitle.style.fontSize = "1.2rem";
            completedTitle.style.marginTop = "1.5rem";
            completedTitle.textContent = "Completed";
            todoList.appendChild(completedTitle);

            completedTodos.forEach(todo => {
                todoList.appendChild(createTodoCard(todo, id));
            });
        }

        return projectView;
    }

    function renderProjectList() {
        const projectListView = document.createElement("projectListView");
        projectListView.innerHTML = "";

        const sectionTitle = document.createElement("div");
        sectionTitle.className = "sectionTitle";
        sectionTitle.textContent = "Projects";
        projectListView.appendChild(sectionTitle);

        const projects = appController.getProjects();
        projects.forEach((project) => {
            const projectCard = document.createElement("div");
            projectCard.className = "projectCard";
            projectCard.dataset.id = project.id;
            projectListView.appendChild(projectCard);
			const projectTitle = document.createElement("div");
			projectTitle.className = "projectTitle";
			projectTitle.textContent = project.name;
			projectCard.appendChild(projectTitle);
			// Add buttons
			const buttonsDiv = document.createElement("div");
			buttonsDiv.className = "buttonsDiv";
			if (project.id !== appController.getCurrentProject().id) {
				const setAsDefault = document.createElement("button");
				setAsDefault.textContent = "Set as default";
				setAsDefault.id = "setAsDefault";
				buttonsDiv.appendChild(setAsDefault);
				setAsDefault.addEventListener('click', (event) => {
					event.stopPropagation();
					appController.setCurrentProject(project.id);
					this.switchView(this.renderProjectList());
				});
			}
			const changeProjectName = document.createElement("button");
			changeProjectName.innerHTML = edit;
			changeProjectName.id = "changeProjectName";
			const deleteProject = document.createElement("button");
			deleteProject.innerHTML = trashCan;
			deleteProject.id = "deleteProject";
			buttonsDiv.appendChild(changeProjectName);
			buttonsDiv.appendChild(deleteProject);
			projectCard.appendChild(buttonsDiv);
			// Event listener to open project
			projectCard.addEventListener('click', () => this.switchView(loadProject(project.id)));
			// Event listener to delete project
			deleteProject.addEventListener('click', (event) => {
				// event.stopPropagation() is used to stop the propagation of the 
				// event to the parent of the element, which also has an event 
				// listener attached
				event.stopPropagation();
				const isDeleted = appController.deleteProject(project.id);
				if (isDeleted) {
                    this.switchView(this.renderProjectList());
                }
			});
        });

        return projectListView;
    }

    return { switchView, renderProject, renderProjectList };
})();