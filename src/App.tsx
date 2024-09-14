import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskType } from "./types";

export function App()
{
    const [tasks, setTasks] = useState<TaskType[]>([]);

    function createNewTask(content: string){
        const newTask: TaskType = {
            id: Math.random(),
            content,
            completed: false
        }

        setTasks( () => {
            return [...tasks, newTask]
        })
    }

    function deleteTask(id: number){
        setTasks((state) => {
            return state.filter((task) => {
                return task.id !== id
            })
        })
    }

    function completeTask(id: number){
        setTasks(state => {
            return state.map(task => {
                return task.id === id ? {...task, completed: true} : task
            })
        })
    }

    function uncompleteTask(id: number){
        setTasks(state => {
            return state.map(task => {
                return task.id === id ? {...task, completed: false} : task
            })
        })
    }

    return <>
        <Header />
        <Form createNewTask={createNewTask}/>
        <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} uncompleteTask={uncompleteTask}/>
    </>
}