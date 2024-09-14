import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css'
import { TaskType } from '../types';
import { Check } from '@phosphor-icons/react';

interface TaskProps{
    task: TaskType,
    deleteTask: (id: number) => void,
    completeTask: (id: number) => void,
    uncompleteTask: (id: number) => void
}

export function Task({task, deleteTask, completeTask, uncompleteTask}: TaskProps){

    function handleDeleteIconClick(){
        deleteTask(task.id)
    }

    function handleUncheckedBoxClick(){
        completeTask(task.id)
    }

    function handleCheckedBoxClick(){
        uncompleteTask(task.id)
    }

    return (
        <div className={styles.taskBox}>
            {task.completed ? (
                <div className={styles.taskCheckedBox} onClick={handleCheckedBoxClick}>
                    <div>
                        <Check weight='bold'/>
                    </div>
                </div>
            ) : (
                <div className={styles.taskUncheckedBox} onClick={handleUncheckedBoxClick}>
                    <div>
                        
                    </div>
                </div>
            )}
            <span className={task.completed ? styles.completed : ''}>
                {task.content}
            </span>
            <Trash weight="bold" onClick={handleDeleteIconClick}/>
        </div>
    );
}