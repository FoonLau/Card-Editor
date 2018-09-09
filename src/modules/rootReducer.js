import { combineReducers } from 'redux';
import editorReducer from 'components/Main/Editor/duck/duck';
import galleryReducer from 'components/Main/Gallery/duck/duck';

export default combineReducers({
  items: galleryReducer,
  edittingItem: editorReducer
});
