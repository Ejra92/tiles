//Stylesheet
import './styles.css'

const ActionButton = props => {
  const {
    onClick,
    text,
    isDisabled,
    styles
  } = props

  return (
    <button 
      disabled={isDisabled} 
      className={styles} 
      onClick={onClick}
    > 
      {text}
    </button>
  )
}

export default ActionButton