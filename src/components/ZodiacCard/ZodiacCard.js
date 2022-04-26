import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div>
      <h2>Zodiac card</h2>
      <div className="zodiac-card">
        <img alt={name} src={`/images/${name}.png`} />
        <span className="name">{name}</span>
        <span>{dates}</span>
      </div>
    </div>
  )
}
