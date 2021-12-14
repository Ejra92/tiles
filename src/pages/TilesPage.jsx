//React
import { memo } from 'react'
//Layout
import Layout from '../layout/Main'
//CustomComponents
import Tiles from '../components/Tiles/Tiles'
import MatchWords from '../components/MatchWords/MatchWords'

const TilesPage = () => {
  return (
    <Layout>
      <Tiles />
      <MatchWords />
    </Layout>
  )
}

export default memo(TilesPage)