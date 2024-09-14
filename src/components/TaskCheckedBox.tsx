import { Check } from '@phosphor-icons/react';
import styles from './TaskCheckedBox.module.css'

export function TaskCheckedBox(){
    return (
        <div className={styles.taskCheckedBox}>
            <div>
                <Check weight='bold'/>
            </div>
        </div>
    );
}