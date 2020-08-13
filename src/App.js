import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './store'
import RouterView from './router/router_view'
import routers from './router/router_config'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <RouterView routers={routers}></RouterView>
        </HashRouter>
      </Provider>
    )
  }
}
