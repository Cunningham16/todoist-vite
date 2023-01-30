import {useEffect, useRef, useState} from 'react'
import styles from './styles.module.scss'

const HeaderTaskList = () => {
    const [header, setHeader] = useState('State')
    const [styleInput, setStyleInput] = useState(styles.inputHeader)
    const [styleHeader, setStyleHeader] = useState(styles.header__active)

    const nodeRef = useRef<HTMLInputElement | null>(null)

    const openInput = () => {
        setStyleHeader(styles.header)
        setStyleInput(styles.inputHeader__active)
    }

    useEffect(() => {
        if(styleInput === styles.inputHeader__active){
            if(nodeRef.current !== null){
                nodeRef.current.focus()
            }
        }
    }, [styleInput])

    const setNewHeader = (e: any) => {
        if(e.key === 'Enter'){
            setStyleHeader(styles.header__active)
            setStyleInput(styles.inputHeader)
        }
    }

    const onBlurHeader = () => {
        setStyleHeader(styles.header__active)
        setStyleInput(styles.inputHeader)
    }

  return (
    <div className={styles.container}>
        <h1 
            className={styleHeader}
            onClick={openInput}
        >
            {header}
        </h1>
        <input
            type='text'  
            className={styleInput}
            onKeyUp={setNewHeader}
            onBlur={onBlurHeader}
            ref={nodeRef}
            value={header}
            maxLength={40}
            onChange={e => setHeader(e.target.value)}
        />
    </div>
  )
}

export default HeaderTaskList