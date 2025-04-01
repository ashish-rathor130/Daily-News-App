import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{width:'50px',position:'absolute',textAlign:"center", borderRadius:"50px",}} />
      </div>
    )
  }
}
