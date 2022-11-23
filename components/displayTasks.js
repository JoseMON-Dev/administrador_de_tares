import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDate,orderDates } from "../services.js/date.js";


export const displayTasks = ()=>{
    const list = document.querySelector('[data-list]')
    list.innerHTML = ''
    const tasklist = JSON.parse(localStorage.getItem('tasks')) //** regresa un json por lo qe usamos json.parse*/
    //console.log(tasklist[0].value)
    const dates = uniqueDate(tasklist);
    orderDates(dates); //modifica directamente a dates
    
    dates.forEach(date => {
        const dateMonment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date))
        
        tasklist.forEach(task => { 
            const taskDate = moment(task.dateFormat,'DD/MMYYYY');
            const diff = dateMonment.diff(taskDate);
            if (diff == 0){
                list.appendChild(createTask(task));
            }
                
        });
    
    })
    
    //! con forEach recorremos las litas 
    
}