import React from 'react'
import {connect} from 'react-redux'
import {getAllCards, addNewCards} from '../reducers'
import {CardRow, AllCardsHeader} from './'

class Learn extends React.Component {
  componentDidMount() {
    console.log('hello')
  }
  render () {
    return (
      <div>hi</div>
    )
  }
}

export default Learn