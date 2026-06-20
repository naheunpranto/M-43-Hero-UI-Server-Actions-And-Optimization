import AddTask from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/tasks";

 

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div>
            <h2>Tasks: {tasks.length}</h2>
            <AddTask/>
            <div className="grid grid-cols-3 gap-4 container mx-auto pt-8">
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}/>)
                }
            </div>
        </div>
    );
};

export default TasksPage;