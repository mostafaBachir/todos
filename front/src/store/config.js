import {createStore,compose,applyMiddleware} from 'redux'
import storage from 'redux-persist/es/storage'
import authReducer from './reducers/authReducer'
import { apiMiddleware } from 'redux-api-middleware';
import { persistCombineReducers } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'




const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['gestion_auth']
}
const createStoreWithMiddleware = compose(applyMiddleware(apiMiddleware,thunk,logger))(createStore)
export default createStoreWithMiddleware(persistCombineReducers(rootPersistConfig, {gestion_auth:authReducer}))
