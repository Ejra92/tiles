//Page
import TilesPage from './pages/TilesPage'
//Provider
import MatchesState from './context/Matches/MatchesState'
import TilesState from './context/Tiles/TilesState'
//Stylesheet
import './App.css'

const App = () => {
  return (
    <MatchesState>
      <TilesState>
        <TilesPage />
      </TilesState>
    </MatchesState>
  )
}

export default App
