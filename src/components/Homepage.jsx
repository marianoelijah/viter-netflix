import React from 'react'
import Homebanner from './Homebanner'
import HeaderNav from './pages/backend/partials/HeaderNav'
import FilmCollection from './FilmCollection'

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