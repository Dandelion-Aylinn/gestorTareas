import { renderTask } from "./ui";
import { addTask } from "./task";

document.addEventListener("DOMContentLoaded", () =>{
    //Hacemos visible la lista de tareas
    renderTask();

    //Agregar elemento para la función para agregar tareas
    document.getElementById("task-form").addEventListener("submit", (e) =>{
       e.preventDefault();
       const taskInput = document.getElementById("task-input");
       if(taskInput.value !== "") {
        //Agregamos las tareas 
        addTask(taskInput.value);

        //Volvemos a cargar la lista de tareas
        renderTask();

        //Limpiar el input
        document.getElementById("task-input").value = "";
       }
    });

});