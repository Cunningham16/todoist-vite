import styles from './styles.module.scss'
import checkIcon from '../../assets/check-lg.svg'

interface checkboxProps{
  checked: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement>;
}

const Checkbox = ({ checked, onClick }: checkboxProps) => {
  return (
    <label className={styles.container}>
        <input type="checkbox" 
               className={styles.checkbox}
               checked = {checked}
               onClick = {onClick}
        />
        <span className={styles.label}>
          <img src={checkIcon} alt="" />
        </span>
    </label>
  )
}

export default Checkbox