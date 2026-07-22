// index.js

import "./style.css";
import { createHeader, createContentWrapper, createFooter } from "./modules/initial-load.js";

// Get #content div
const contentDiv = document.getElementById("content");

// Append header to #content div
contentDiv.appendChild(createHeader());
// Append content wrapper to #content div
contentDiv.appendChild(createContentWrapper());
// Append footer to #content div
contentDiv.appendChild(createFooter());

// Load default init tab when loading the page for the first time
const main = document.getElementById("mainContent");