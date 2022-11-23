import { uniqueDate } from "../services.js/date.js";
import checkComplete from "./checkcomplete.js"
import deleteIcon from "./deteletask.js"
import { displayTasks } from "./displayTasks.js";

export const addTask = (evento) =>{
    evento.preventDefault();
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;

    if (value === '' || date === ''){
        return
    }

    input.value = "";
    calendar.value = ''

    const complete = false
    
    const dateFormat = moment(date).format('DD/MM/YYYY');

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }

    //list.innerHTML = '';

    const tasklist = JSON.parse(localStorage.getItem('tasks')) || [];
    tasklist.push(taskObj)

    //? sessionStorage.setItem('task',JSON.stringify(tasklist);  guanda durante la secion hasta que se cierra la pestaña
    localStorage.setItem('tasks',JSON.stringify(tasklist));
    displayTasks();
    
  }
  
  
  
  
  //** arrow function */
export const createTask = ({value,dateFormat,complete,id}) =>{
    const task = document.createElement("li");
        task.classList.add("card");
    const taskContent = document.createElement("div");  
    
    const check = checkComplete(id);

    if (complete){
        console.log('complete')
        check.classList.toggle("far");//? toggle comprueva si la clase exite o no si existe la quita si no la pone
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
    }

    const titleTask = document.createElement("span");
        taskContent.appendChild(check);  
        titleTask.classList.add("task");
        titleTask.textContent = value;
        taskContent.appendChild(titleTask);
    
    

    const dateElement = document.createElement("span");
        dateElement.classList.add('date-content')
        //dateElement.textContent = dateFormat
        //*? agregar a html usamos la propiedad innerHtml */
        dateElement.innerHTML = dateFormat
    
        //** agregar mos un hijo al html usamos appendChild(hijo en html)*/
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));
    
    return task //** para que addtask la pueda añadir ala lista de tareas */
  }

  //
//! Existen otros métodos que podemos utilizar para manipular nodos:
//?  insertBefore(padre, hijo): Coloca un nodo antes del otro
//?  replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
//?  removeChild(elemento): Remueve un nodo del árbol 