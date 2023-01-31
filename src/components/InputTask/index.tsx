import { useState, useRef, useEffect } from "react"
import styles from './styles.module.scss'
import { inputTaskProps } from "../../types"
import plusLG from '../../assets/plus-lg.svg'
import PrimaryButton from "../../ui/PrimaryButton"

const InputTask = ({ addTask }: inputTaskProps) => {
    const [taskText, setTaskText] = useState('')
    const [styleInput, setStyleInput] = useState(styles.hidden)
    const [styleButton, setStyleButton] = useState(styles.button_add)

    const nodeRef = useRef<HTMLInputElement | null>(null)

    const onPressAddText = (e: any) => {
        if(e.key === 'Enter'){
            addTask(taskText)
            setTaskText('')
        }
    }

    const addText = () => {
        addTask(taskText)
        console.log(taskText)
        hideInput()
    }

    const openInput = () => {
        setStyleButton(styles.hidden)
        setStyleInput(styles.input_container)
    }

    const hideInput = () => {
        setStyleButton(styles.button_add)
        setStyleInput(styles.hidden)
        setTaskText('')
    }

    useEffect(() => {
        if(styleInput === styles.input_container && nodeRef.current !== null){
            nodeRef.current.focus()
        }
    }, [styleInput])

  return (
    <div className={styles.container}>
        <button 
            className={styleButton} 
            onClick={openInput}
        >
            <div className={styles.img_container}>
                <img src={plusLG} alt="" />
            </div>
            <p>Добавить задачу</p>
        </button>
        <div className={styleInput}>
            <input 
                type="text" 
                className={styles.input}
                value = {taskText}
                onChange = {(e) => setTaskText(e.target.value)}
                onKeyUp = {onPressAddText}
                placeholder = 'Название задания'
                ref={nodeRef}
            />
            <div className={styles.buttons_apply}>
                <PrimaryButton 
                    stylesheet="apply"
                    onClick={addText}
                >
                    Добавить задачу
                </PrimaryButton>
                <PrimaryButton 
                    stylesheet="deny"
                    onClick={hideInput}
                >
                    Отмена
                </PrimaryButton>
            </div>
        </div>
    </div>
  )
}

export default InputTask