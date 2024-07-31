import { getTasks } from './task';

export const renderTask = () =>{
    const taskList = Document.getElementById("task-list");
    taskList.innerHTML = "";
}