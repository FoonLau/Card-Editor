import { combineReducers } from 'redux';
import editorReducer from 'components/Main/Editor/duck/duck'

export default combineReducers({
  items: (state = []) => state,
  edittingItem: editorReducer
});
