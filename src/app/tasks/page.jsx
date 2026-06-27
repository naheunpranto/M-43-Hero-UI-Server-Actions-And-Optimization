import AddTask from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";

 

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div>
            <h2>Tasks: {tasks.length}</h2>
            <AddTask createATask = {createATask}/>
            <Link href="/tasks/new">
                <Button variant="secondary">Add Task</Button>
            </Link>
            <div className="grid grid-cols-3 gap-4 container mx-auto pt-8">
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}/>)
                }
            </div>
        </div>
    );
};

export default TasksPage;