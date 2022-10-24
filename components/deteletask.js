const deleteIcon = () =>{
    const dump = document.createElement("i");
    dump.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");  
    dump.addEventListener("click",deleteTask)
    return dump
  }
  
  const deleteTask = (event) =>{
    let elementTask = event.path[1] // otra forma es //! event.target.parentElement para acceder al elemento padre
    elementTask.remove()
  }

export default deleteIcon