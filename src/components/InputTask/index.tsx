import { useState } from "react"
import styles from './styles.module.scss'
import { inputTaskProps } from "../../types"

const InputTask = ({ addTask }: inputTaskProps) => {
    const [taskText, setTaskText] = useState('')

    const onPressAddText = (e: any) => {
        if(e.key === 'Enter'){
            addTask(taskText)
            setTaskText('')
        }
    }

  return (
    <div className={styles.container}>
        <input 
            type="text" 
            className={styles.input}
            value = {taskText}
            onChange = {(e) => setTaskText(e.target.value)}
            onKeyUp = {onPressAddText}
            placeholder = 'Добавьте задачу и нажмите на Enter'
        />
    </div>
  )
}

export default InputTask