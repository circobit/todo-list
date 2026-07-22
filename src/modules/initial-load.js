// modules/initial-load.js

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
		{ name: "&times;", link: "javascript:void(0)", class: "closeBtn" },
		{ name: "Home", link: "#" + `${name}` },
		{ name: "Projects", link: "#" + `${name}` },
		{ name: "About", link: "#" + `${name}`}
	];
	menuItems.forEach((item) => {
		const menuItem = document.createElement("a");
		if (item.name === "&times;") {
			menuItem.innerHTML = item.name;
		} else {
			menuItem.textContent = item.name;
		};
		menuItem.href = item.link;
		if (item.class) {
			menuItem.className = item.class; 
			menuItem.id = item.class;
			// Event listener to close button
			menuItem.addEventListener("click", () => closeNav());
		} else {
			menuItem.className = "menuItem";
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