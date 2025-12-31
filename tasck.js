const tasks=[];
function addTask(task) {
    tasks.push(task)
    console.log("task add :",task);
    console.log("logging task..");
    
    
}
module.exports={tasks,addTask} 