import { useEffect, useState } from 'react'
import PostService from '../../API/PostService'
import { useFetching } from '../../hooks/useFetching'
import { responseObject, taskObject } from '../../types'
import Loader from '../../ui/Loader'
import HeaderTaskList from '../HeaderTaskList'
import InputTask from '../InputTask'
import Task from '../Task'
import styles from './styles.module.scss'

const TaskList = () => {
  const [taskList, setTaskList] = useState<[] | taskObject[]>([])
  const [fetchTodos, isLoading, error] = useFetching(async () => {
    const todos = await PostService.getAll()
    setTaskList(todos.map((elem: responseObject) => {
      return {
        id: elem.id,
        text: elem.title,
        checked: elem.completed
      }
    }))
  })

  const addTask = (text: string) => {
    setTaskList([{text, checked: false}, ...taskList])
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <HeaderTaskList />
        <div className={styles.tasks}>
          {isLoading ? 
            <Loader />
          :
            taskList.map((elem) => (
              <Task text={elem.text} checked={elem.checked} />
            ))
          }
        </div>
        <InputTask addTask={addTask}/>
    </div>
    </div>
  )
}

export default TaskList