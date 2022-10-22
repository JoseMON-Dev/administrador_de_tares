const buton = document.querySelector("[data-form-btn]");

//** arrow function */
const createTask = (event) =>{
    event.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li")
    task.classList.add("card")
    input.value = ""

    console.log(value)
    console.log(task.value)


    //*? backticks  permite agregar codigo html */
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task" >${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    console.log(content)

  //*? agregar a html usamos la propiedad innerHtml */
    task.innerHTML = content

  //** agregar mos un hijo al html usamos apprndChild(hijo en html)*/
    list.appendChild(task)

//** *//   
 //! Existen otros métodos que podemos utilizar para manipular nodos:
 //?  insertBefore(padre, hijo): Coloca un nodo antes del otro
 //?  replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
 //?  removeChild(elemento): Remueve un nodo del árbol 
//** *//

}

buton.addEventListener("click", createTask)
