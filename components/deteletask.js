import { displayTasks } from "./displayTasks.js";

const deleteIcon = (id) =>{
    const dump = document.createElement("i");
    dump.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    dump.addEventListener("click",() => deleteTask(id))
    
    return dump
  }
  
  const deleteTask = (id) =>{
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex((item) => item.id === id)
    tasks.splice(index,1);
    localStorage.setItem('tasks', JSON.stringify(tasks))
    displayTasks()
    /*
    let elementTask = event.path[1] //? otra forma es event.target.parentElement para acceder al elemento padre
    elementTask.remove()
    */
    /*
    let elementTaskLocalStorage = event.target.parentElement.firstChild.textContent;
    let datelocal = event.target.parentElement.children
    let textdatelocal = datelocal[1].textContent
    
    const tasklist = JSON.parse(localStorage.getItem('tasks')) //** regresa un json por lo qe usamos json.parse*/
    //const newTaskList = tasklist.filter(task => task.value != elementTaskLocalStorage)
    
    /*
    const newTaskList = []
    if(tasklist != null){
      tasklist.forEach(task => {
        if (task.value == elementTaskLocalStorage && task.dateFormat == textdatelocal){
        }
        else{
          newTaskList.push(task)
        }
      });
    }
    localStorage.clear();
    localStorage.setItem('tasks',JSON.stringify(newTaskList))
    */
  }

export default deleteIcon