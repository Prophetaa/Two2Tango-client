import React, { Component } from 'react'

export default class LoadingScreen extends Component {

    componentDidMount(){
        this.props.setReactState()
    }

  render() {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
}
