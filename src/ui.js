import { getTasks } from './task';

export const renderTask = () =>{
    const taskList = Document.getElementById("task-list");
    taskList.innerHTML = "";

    const tasks = getTask ();
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
    
    //Añadir clase solo si la tarea esta completada
    if(task.completed === true){
        li.classList.add("completed");
    }

    li.innerHTML = `
        ${task.text}
        <button class="delete"> Eliminar </button>
        <button class="toggle"> ${ task.completed === false ? "Completar" : "Deshacer"} </button>
    `;

       taskList.appendChild(li);
    });
};