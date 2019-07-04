import React, { useState } from 'react'

function useCounter (initialCount) {
  return useState(initialCount)
}

export default useCounter