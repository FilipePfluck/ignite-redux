import './styles/global.css'

import { Provider as ReduxProvider } from 'react-redux'

import { store } from './store'
import { Player } from './pages/Player'

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}
