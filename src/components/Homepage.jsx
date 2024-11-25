import React from 'react'
import HeaderNav from './pages/backend/partials/HeaderNav'
import FilmCollection from './FilmCollection'
import Homebanner from './Homebanner'

const Homepage = () => {
  return (
      <>
      <HeaderNav />
      <Homebanner/>
      <FilmCollection />
      </>
  )
}

export default Homepage;