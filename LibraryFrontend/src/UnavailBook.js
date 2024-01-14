import React from 'react'
import bookStyle from './books.module.css'

export default function UnavailBook({ book }) {
  return (
    <div className={bookStyle.book}>
      { book.title }
      { book.avail === false? ': Checked out by ' + book.who + ' Due back by ' + book.due : null }
    </div>
  )
}
