(()=>{

const buton = document.querySelector("[data-form-btn]");

//** arrow function */
const createTask = (event) =>{
  event.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const value = input.value
  input.value = "";
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon" );
    i.addEventListener("click", completeTask);
    return i;
  }
    
  const completeTask = (event) => {
    let checkedTask = event.target;
    checkedTask.classList.toggle("far");//? toggle comprueva si la clase exite o no si existe la quita si no la pone
    checkedTask.classList.toggle("fas");
    checkedTask.classList.toggle("completeIcon");
  }

  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.textContent = value;
  taskContent.appendChild(titleTask);
  console.log(taskContent);
  //** agregar mos un hijo al html usamos apprndChild(hijo en html)*/
  list.appendChild(task);
  task.appendChild(taskContent);


  //*? backticks  permite agregar codigo html */
  const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`

  //*? agregar a html usamos la propiedad innerHtml */
}

buton.addEventListener("click", createTask)
//
//! Existen otros métodos que podemos utilizar para manipular nodos:
//?  insertBefore(padre, hijo): Coloca un nodo antes del otro
//?  replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
//?  removeChild(elemento): Remueve un nodo del árbol 
//
})()