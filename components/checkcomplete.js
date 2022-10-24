const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon" );
    i.addEventListener("click", completeTask);
    return i;
  }
    
  const completeTask = (event) => {
    console.log(event)
    let checkedTask = event.target;
    checkedTask.classList.toggle("far");//? toggle comprueva si la clase exite o no si existe la quita si no la pone
    checkedTask.classList.toggle("fas");
    checkedTask.classList.toggle("completeIcon");
  }

export default checkComplete