import Checkbox from '../../ui/Checkbox'
import { useState } from 'react';
import styles from './styles.module.scss'

interface taskProps{
  text: string;
  checked: boolean;
}

const Task = ({ text, checked }: taskProps) => {
  const [check, setCheck] = useState(checked)

  const toggleCheck = () => {
    return setCheck(!check)
  }

  return (
    <div className={styles.task}>
        <Checkbox 
          checked = {check}
          onClick = {toggleCheck}
        />
        <p className = {styles.task_text}>{text}</p>
    </div>
  )
}

export default Task