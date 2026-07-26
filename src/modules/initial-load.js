// modules/initial-load.js

import { loadDefaultProject, renderProjectList } from "./loadProject.js";
import { domController, switchView } from "./domController.js";

// Function to open Nav
function openNav() {
	document.getElementById("nav").style.width = "250px";
}
// Function to close Nav
function closeNav() {
	document.getElementById("nav").style.width = "0";
}

// Header
export function createHeader() {
	// Header container
	const header = document.createElement("header");

	// Hamburguer button
	const openBtn = document.createElement("a");
	openBtn.innerHTML = "&#9776;";
	openBtn.className = "openBtn";
	header.appendChild(openBtn);

	// Nav container
	const nav = document.createElement("nav");
	nav.id = "nav";
	// Menu Items
	const menuItems = [
		{ name: "&times;", link: "javascript:void(0)", id: "closeBtn" },
		{ name: "Home", id: "home" },
		{ name: "Projects", id: "projects" }
	];
	menuItems.forEach((item) => {
		const menuItem = document.createElement("a");
		if (item.name === "&times;") {
			menuItem.innerHTML = item.name;
			menuItem.className = item.id;
			menuItem.href = item.link;
			menuItem.addEventListener("click", () => closeNav());
		} else {
			menuItem.textContent = item.name;
			menuItem.className = "menuItem";
			menuItem.id = item.id;
		};
		if (item.id === "home") {
			menuItem.addEventListener("click", () => {
				domController.switchView(loadDefaultProject());
				closeNav();
			});
		} else if (item.id === "projects") {
			menuItem.addEventListener("click", () => {
				domController.switchView(renderProjectList());
				closeNav();
			});
		};
		nav.appendChild(menuItem);
	})
	// Event listener to open button
	openBtn.addEventListener("click", () => openNav());

	// Logo container
	const logoDiv= document.createElement("div");
	logoDiv.className = "logoDiv";
	logoDiv.textContent = "Notari";

	// Append Menu and Logo to header
	header.appendChild(nav);
	header.appendChild(logoDiv);

	return header;
}


// Content Wrapper
export function createContentWrapper() {
	// Main container
	const main = document.createElement("main");
	main.id = "mainContent";

	// Return main element
	return main;
}


// Footer
export function createFooter() {
	// Footer element
	const footer = document.createElement("footer");

	return footer;
}