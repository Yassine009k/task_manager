const tasks=[];
function addTask(task) {
    tasks.push(task)
    console.log("task add :",task);
    if(!task){
        console.log("EMPTY task");
        return;
        
    }
    
}
module.exports={tasks,addTask} 