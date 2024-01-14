import React from 'react'
import bookStyle from './books.module.css'

export default function Book({ book }) {
  return (
    <div className={bookStyle.book}>
      { book.title }
    </div>
  )
}
