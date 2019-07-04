import React from 'react'

const TwilioLogo = ({ height = '120px' , width = '260px', customStyles }) => (
  <div>
    <img
      style={{ height, width, ...customStyles }}
      src='https://www.twilio.com/marketing/bundles/company/img/logos/red/twilio-logo-red.png'
      alt='Twilio logo in red.'
    />
  </div>
)

export default TwilioLogo
