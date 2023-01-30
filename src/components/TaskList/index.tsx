import { useState } from 'react'
import HeaderTaskList from '../HeaderTaskList'
import InputTask from '../InputTask'
import Task from '../Task'
import styles from './styles.module.scss'

const tasks = [
    {text: 'Make Cake', checked: true},
    {text: 'Make food', checked: false},
    {text: 'Make hot tea', checked: false},
    {text: 'Make chokolate', checked: false},
]

const TaskList = () => {
  const [taskList, setTaskList] = useState(tasks)

  const addTask = (text: string) => {
    setTaskList([...taskList, {text, checked: false}])
  }

  return (
    <div className={styles.list}>
        <HeaderTaskList />
        {taskList.map((elem) => (
            <Task text={elem.text} checked={elem.checked} />
        ))}
        <InputTask addTask={addTask}/>
    </div>
  )
}

export default TaskList