//Stylesheet
import './styles.css'

const Main = ({children}) => {
  return (
    <div className="layout dFlexCenter">
      {children}
    </div>
  )
}

export default Main