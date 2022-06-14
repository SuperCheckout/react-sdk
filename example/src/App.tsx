import 'supercheckout/dist/index.css'

import React from 'react'
import SuperCheckout from 'supercheckout'

const App = () => {
  return (
    <SuperCheckout
      show={true}
      projectId='9d82ac2b-d9b8-4a25-a5f2-54cd11c1298d'
    />
  )
}

export default App
