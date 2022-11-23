const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon" );
    i.addEventListener("click", (event) => {
      completeTask(event,id) //para poder capturar el evento
    });
    return i;
  }
    
export const completeTask = (event,id) => {
    let checkedTask = event.target;
    checkedTask.classList.toggle("far");//? toggle comprueva si la clase exite o no si existe la quita si no la pone
    checkedTask.classList.toggle("fas");
    checkedTask.classList.toggle("completeIcon");
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex(item => item.id === id) //? regra el index del que cumpla ala condicion
    tasks[index]['complete'] = !tasks[index]['complete'];
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

export default checkComplete