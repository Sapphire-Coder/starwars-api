import React, { useEffect, useState } from 'react'
import getAllStarships from './services/sw-api.js'
import StarshipCard from './starshipcard.js'
import './App.css'

export default function App () {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
      .then(res => setStarships(res.results))
  }, [])

  return (
    <div>
      <h1 id = 'header'>Star Wars Starships</h1>
      <div id = 'container'>
        {
          starships.map((e, i) => {
            return (
              <StarshipCard name = {e.name} key = {i}/>
            )
          })
        }
      </div>
    </div>
  )
}