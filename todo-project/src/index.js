import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './Reducer/rootReducer';

const store = createStore(rootReducer, {
  userInfo: { id: 0, profile_image_url: "", user_id: "", user_nickname: "" },
  initialData: { id: 0, lists: [] }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
