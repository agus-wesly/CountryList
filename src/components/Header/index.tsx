import style from './index.module.css'
import { ReactNode } from 'react'

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className={style.header}>
      <h3>CountryList</h3>
      {children}
    </header>
  )
}
