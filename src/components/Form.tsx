import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Form.module.css'
import { PlusCircle } from '@phosphor-icons/react';

interface FormProps{
    createNewTask: (content: string) => void;
}

export function Form({createNewTask}: FormProps) {

    const [content, setContent] = useState('')
    const [errorContent, setErrorContent] = useState('')

    function handleContentChange(event: ChangeEvent<HTMLInputElement>){
        setContent(event.target.value)
    }
    
    function handleFormSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(content.trim() === ''){
            setErrorContent('Este campo não pode ser vazio.')
            return;
        }
        setErrorContent('');
        createNewTask(content);
        setContent('')
    }

    return (
        <div className={styles.formBox}>
            
            <form onSubmit={handleFormSubmit}>
                <div className={styles.inputBox}>
                    <input type="text" name="content" value={content} onChange={handleContentChange} placeholder="Adicione uma nova tarefa" required/>
                    {(errorContent !== '') && (
                        <small className={styles.inputError}>{errorContent}</small>
                    )}
                </div>
                <button type="submit">Criar <PlusCircle weight="bold"/></button>
            </form>
        </div>
        
    );
}