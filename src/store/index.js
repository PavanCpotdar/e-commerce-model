import { combineReducers ,createStore} from 'redux';
import { productList } from './ProductReducer';
import { cardReducer } from './CardReducer';


const reducer= combineReducers({
  productList,
  cardReducer
  })

export  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__?.()
  )