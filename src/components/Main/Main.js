import React from 'react'
import ZodiacCard from '../ZodiacCard/ZodiacCard.js'
import backgroundImg from '../../background.png'
// import { zodiac } from '../../data.js'
import './Main.css'

export default function Main({ zodiac }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  )
}
