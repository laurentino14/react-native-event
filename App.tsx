import {StatusBar} from 'react-native'
import {Home} from './src/screens/Home'
export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        animated
        backgroundColor={'transparent'}
        barStyle='light-content'
        translucent
      />
    </>
  )
}
