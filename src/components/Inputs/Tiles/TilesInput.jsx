//CustomComponents
import { memo } from 'react'
import CommonSpan from '../../Spans/Common/CommonSpan'
import CommonInput from '../Common/CommonInput'
import useIsMatch from './hooks/useIsMatch'
//Stylesheet
import './styles.css'
//Utils
import {matchingStyles, matchingText} from './utils'

const TilesInput = ({word, matches}) => {
  const isMatch = useIsMatch(word, matches)
  const value = word.map(l => l[0]).join('')

  return (
    <div className="tiles__input dFlexCenter">
      <CommonInput
        value={value}
        type='text'
        disabled
        styles={matchingStyles[isMatch]}
      />

      {word.length > 2 && (
        <CommonSpan
          styles={matchingStyles[isMatch]}
          txt={matchingText[isMatch]}
        />
      )}
    </div>
  )
}

export default memo(TilesInput)