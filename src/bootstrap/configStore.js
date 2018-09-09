import {
  createStore,
  compose
} from 'redux';
import rootReducer from 'modules/rootReducer';
import localStorageProvider from 'services/localStorageProvider';

export default () => {
  const composeEnhancers = process.env.NODE_ENV === 'production' 
    ? compose
    : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
  const savedItems = localStorageProvider.get('items') || [];
  
  return createStore(
    rootReducer,
    { items: savedItems },
    composeEnhancers()
  );
}
