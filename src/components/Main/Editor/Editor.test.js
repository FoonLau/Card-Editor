import React from 'react';
import { 
  shallow,
  mount
} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { 
  UPDATE,
  SAVE,
  initialState
} from './duck/duck';
import EditorContainer, { Editor } from './Editor';
import EditorItem from './EditorItem/EditorItem';

let store;

beforeEach(() => {
  store = configureMockStore()({
    edittingItem: initialState,
    items: []
  });
});

it('should render correctly', () => {
  const wrapper = shallow(<Editor />);

  expect(wrapper.find('[id="app-editor-background"]')).toHaveLength(1);
  expect(wrapper.find('[id="app-editor-width"]')).toHaveLength(1);
  expect(wrapper.find('[id="app-editor-height"]')).toHaveLength(1);
  expect(wrapper.find('[id="app-editor-border-radius"]')).toHaveLength(1);
  expect(wrapper.find('.app-editor-save')).toHaveLength(1);
});

it('should dispatch update action when value change', () => {
  const wrapper = mount(
    <Provider store={store}>
      <EditorContainer />
    </Provider>
  );
  const config = { backgroundColor: '#123456' }

  wrapper.find(EditorItem).get(0).props.onChange({ currentTarget: { value: config.backgroundColor } });
  const action = store.getActions()[0];

  expect(action).toEqual({
    type: UPDATE,
    payload: { config }
  });
});

it('should dispatch save action when click the save button', () => {
  const wrapper = mount(
    <Provider store={store}>
      <EditorContainer />
    </Provider>
  );

  wrapper.find('button').get(0).props.onClick();
  const action = store.getActions()[0];

  expect(action).toEqual({
    type: SAVE,
    payload: { config: initialState }
  });
});
