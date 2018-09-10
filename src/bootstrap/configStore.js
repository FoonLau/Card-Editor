import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'modules/rootReducer';
import localStorageProvider from 'services/localStorageProvider';

export default () => {
  const composeEnhancers = process.env.NODE_ENV === 'production' 
    ? compose
    : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
  const savedItems = localStorageProvider.get('app.items') || [];
  
  return createStore(
    rootReducer,
    { items: savedItems },
    composeEnhancers(applyMiddleware(thunk))
  );
}
