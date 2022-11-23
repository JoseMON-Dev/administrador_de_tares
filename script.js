import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/displayTasks.js";

displayTasks()

const buton = document.querySelector("[data-form-btn]");
buton.addEventListener("click", addTask)