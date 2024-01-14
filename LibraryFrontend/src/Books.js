import React from 'react'
import AvailableBooks from './availableBooks'
import UnavailableBooks from './unavailableBooks'

export default function Books() {
  return (
    <div>
      <AvailableBooks/>
      <UnavailableBooks/>
    </div>
  )
}
