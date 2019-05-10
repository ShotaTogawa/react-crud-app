import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import './index.css';
import reducer from './reducers';

// アプリケーション内の全てのstateはこのstateに集約されている
// storeを作成するための関数がcreateStore()
const store = createStore(reducer, applyMiddleware(thunk));

// Providerどのコンポーネントからもstoreを参照できるようにする。
// 既存のcomponentをProviderでラッピングする


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
