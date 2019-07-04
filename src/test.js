import React from 'react'
import { render } from '@testing-library/react'
import TwilioLogo from './TwilioLogo'

describe('TwilioLogo', () => {
  it('renders correctly', () => {
    const { getByAltText } = render(<TwilioLogo />)
    const component = getByAltText('Twilio logo in red.')
    expect(component).toBeTruthy()
  })
})
