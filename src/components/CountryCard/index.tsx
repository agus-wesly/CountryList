import style from './index.module.css'
import type { Countries } from '../Countries'
type Props = Countries[number] & {
  onItemClick: (emoji: string) => void
}

export default function CountryCard({
  name,
  emoji,
  capital,
  currency,
  onItemClick,
}: Props) {
  return (
    <article className={style.card} onClick={() => onItemClick(emoji)}>
      <header>
        <h3>{name}</h3>
        <p>{emoji}</p>
      </header>
      <h5 className={style.capital}>{capital || '-'}</h5>
      <p>Curr : {currency || '-'}</p>
    </article>
  )
}
