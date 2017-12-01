import {createStore} from 'redux'
import rootReducer from '../reducers/index'

export default function configureStore(initialState){
  const store = createStore(rootReducer, initialState,
    //出发 redux-devtools
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}
