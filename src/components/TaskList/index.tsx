import { useEffect, useState } from 'react'
import { useGetToDosByIdQuery } from '../../store'
import { taskObject } from '../../types'
import HeaderTaskList from '../HeaderTaskList'
import InputTask from '../InputTask'
import Task from '../Task'
import styles from './styles.module.scss'

const TaskList = () => {
  const [taskList, setTaskList] = useState<[] | taskObject[]>([])
  const { data, error, isLoading } = useGetToDosByIdQuery("1")

  const addTask = (text: string) => {
    setTaskList([...taskList, {text, checked: false}])
  }

  useEffect(() => { 
    if(!isLoading && data !== undefined){
      for(let elem of data){
        setTaskList(prev => [...prev, {text: elem.title, checked: elem.completed}])
      }
    }
    if(error){
      console.log(error)
    }
  }, [isLoading, error])

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