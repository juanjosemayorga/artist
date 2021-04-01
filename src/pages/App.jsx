import React from 'react'
import { Provider } from 'react-redux'
import Main from '@Pages/Main/Main'
import store from '@Redux/store'

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App
