import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import './index.css'

export class Home extends Component {
  static displayName = Home.name

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">We 🖤 people who code</h1>
          <p className="lead">
            We build products that empower developers and connect them to
            solutions that enable productivity, growth, and discovery.
          </p>
          <hr className="my-2" />
          <p>
            Suncoast Overflow is an open community for anyone that codes. We
            help you get answers to your toughest coding questions, share
            knowledge with your coworkers in private, and find your next dream
            job.
          </p>
          <p className="lead"></p>
        </Jumbotron>
      </div>
    )
  }
}
