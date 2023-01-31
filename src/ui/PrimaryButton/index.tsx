import React from 'react'
import { primaryButtonProps } from 'types'
import styles from './styles.module.scss'

const PrimaryButton = ({ children, stylesheet, onClick }: primaryButtonProps) => {

    const configureStyle = () => {
        switch (stylesheet) {
            case 'apply':
                return styles.apply
            case 'deny':
                return styles.deny
            default:
                break;
        }
    }

  return (
    <button 
        className={configureStyle()}
        onClick = {onClick}
    >
        {children}
    </button>
  )
}

export default PrimaryButton