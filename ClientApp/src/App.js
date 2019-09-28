import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import Testing from './Testing'
import Questions from './components/Questions'
import AddQuestion from './components/AddQuestion'
import Question from './components/Question'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route exact path="/question/id" component={Question} />
        <Route path="/fetch-data" component={FetchData} />
        <Route exact path="/add-new" component={AddQuestion} />
        <Route path="/hello" component={Testing} />
      </Layout>
    )
  }
}
