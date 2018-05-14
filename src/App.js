import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)
export default App

const Header = () => (
  <h2>Head</h2>
)
const Main = () => (
  <h2>Main</h2>
)
