import CountryCard from '../CountryCard'
import style from './index.module.css'
import type { GetContinentQuery } from '../../gql/graphql'
import { useState } from 'react'
import Modal from '../Modal'

export type Countries = GetContinentQuery['countries']

export default function Content({ countries }: { countries: Countries }) {
  const [openModal, setOpenModal] = useState(false)
  const [activeEmoji, setActiveEmoji] = useState('')

  function onItemClick(emoji: string) {
    setOpenModal(true)
    setActiveEmoji(emoji)
  }

  const activeCountry = countries.find(
    (countrie) => countrie.emoji === activeEmoji
  )

  const countryLanguage = activeCountry?.languages
    .map((lang) => lang.name)
    .join(',')

  const countryContinent = activeCountry?.continent.name
  return (
    <>
      <main className={style.content}>
        <h1>List</h1>

        <div className={style.list}>
          {countries.map((country) => (
            <CountryCard
              {...country}
              key={country.emoji}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      </main>
      <Modal open={openModal} onOpenChange={setOpenModal}>
        <Modal.Title className="DialogTitle">{activeCountry?.name}</Modal.Title>
        <Modal.Description className="DialogDescription">
          <p>Language : {countryLanguage}</p>
          <p>Continent : {countryContinent}</p>
        </Modal.Description>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Modal.Close asChild>
            <button className="button-close">Close</button>
          </Modal.Close>
        </div>
        <Modal.Close asChild>
          <button className="hidden" aria-label="Close"></button>
        </Modal.Close>
      </Modal>
    </>
  )
}
