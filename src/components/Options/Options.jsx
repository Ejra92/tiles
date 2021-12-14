//CustomComponents
import { memo } from 'react'
import OptionButton from '../Buttons/Option/OptionButton'
//Hooks
import useOptions from './hooks/useOptions'
//Stylesheet
import './styles.css'

const Options = props => {
  const {
    clearWord,
    existAtLeast1Word
  } = props
  const {
    isSelected,
    handleBoard,
    handleRandom
  } = useOptions()

  return (
    <div className="tiles__options-buttons dFlexCenter">
      <OptionButton
        onClick={isSelected !== 'Board2' ? handleBoard : null} 
        text='Board2' 
        isSelected={isSelected}
        isDisabled={existAtLeast1Word}
        styles={isSelected === 'Board2' ? 'button--selected' : ''}
      />
      <OptionButton 
        onClick={isSelected !== 'Random' ? handleRandom : null} 
        text='Random' 
        isSelected={isSelected}
        isDisabled={existAtLeast1Word}
        styles={isSelected === 'Random' ? 'button--selected' : ''}
      />
      {existAtLeast1Word && (
        <OptionButton 
          onClick={clearWord} 
          text='Clear x'
          warning
          styles={'button--warning'} 
        />
      )}
    </div>
  )
}

export default memo(Options)