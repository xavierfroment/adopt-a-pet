import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import About from './about/About'
import Home from './home/Home'
import Adopt from './adopt/Adopt'
import Pet from './adopt/Pet'
import Account from './account/Account'
import Contact from './contact/Contact'
import NewUser from './account/NewUser'
import Error from './error/Error'
import Menu from './Menu'

const RoutePaths = () => {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/adopt" component={Adopt}/>
        <Route path="/pet/:id" component={Pet}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/newuser" component={NewUser}/>
        <Route component={Error}/>
      </Switch>
    </Router>
  )
}
export default RoutePaths