import React from 'react'
import homeStyle from './home.module.css'

export default function Home() {
  return (
    <div className={homeStyle.mainDiv}>
      <p>
        Welcome to Capstone Library! We are a community-oriented library dedicated to 
        promoting lifelong learning and reading.
      </p>
      <p>
        Our mission is to provide access to a wide range of materials, programs, and 
        services that enrich the lives of our patrons. Our diverse collection of books 
        caters to a variety of interests and age groups, with genres ranging from classic 
        literature to contemporary fiction, non-fiction, memoirs, biographies, and more. 
        Our online catalog is user-friendly, making it easy for patrons to browse and 
        request items from the comfort of their own homes.
      </p>
      <p>
        We take pride in our role as a vital community resource, and we strive to 
        provide a welcoming and inclusive environment for all. Whether you're a 
        lifelong reader or just getting started, we invite you to visit us and 
        discover all that Capstone Library has to offer.
      </p>
    </div>
  )
}
