import styles from './TaskList.module.css'
import clipboard from '../assets/clipboard.svg'
import { Task } from './Task';
import { TaskType } from '../types';

interface TaskListProps{
    tasks: TaskType[],
    deleteTask: (id: number) => void,
    completeTask: (id: number) => void,
    uncompleteTask: (id: number) => void
}

export function TaskList({tasks, deleteTask, completeTask, uncompleteTask}: TaskListProps) {

    function getTasksCount()
    {
        return tasks.length
    }

    function getCompletedTasksCount()
    {
        return tasks.filter(task => {
            return task.completed === true
        }).length
    }

    return (
        <div className={styles.taskListBox}>
            <header>
                <div className={styles.createdTasks}>
                    <strong>Tarefas criadas</strong>
                    <span>{getTasksCount()}</span>
                </div>
                <div className={styles.completedTasks}>
                    <strong>Concluídas</strong>
                    <span>
                        {getCompletedTasksCount()} de {getTasksCount()}
                    </span>
                </div>
            </header>
            { tasks.length > 0 ? (
                tasks.map(task => (
                    <Task key={task.id} task={task} deleteTask={deleteTask} completeTask={completeTask} uncompleteTask={uncompleteTask}/>
                ))
            ) : (
                <div className={styles.emptyTaskBox}>
                    <img src={clipboard} alt="Ícone de uma prancheta com um papel e um clipe" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            )}
            
        </div>
    );
}