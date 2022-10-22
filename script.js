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
}

buton.addEventListener("click", createTask)
