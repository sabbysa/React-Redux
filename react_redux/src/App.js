import Counter from './components/Counter'
import store from './Redux/store'
import {Provider} from 'react-redux'

function App(){
  return(
    <Provider store={store}>
    <div>
      <Counter></Counter>
    </div>
    </Provider>
  )
}
export default App

