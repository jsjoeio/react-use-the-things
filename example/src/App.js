import React, { Component } from 'react'

import TwilioLogo from '@jsjoeio/react-use-the-things'

export default class App extends Component {
  render () {
    return (
      <div>
        <TwilioLogo
          height='240px'
          width='520px'
          customStyles={{ border: '1px solid black' }}
      />
      </div>
    )
  }
}
