import { useState } from 'react'
import './App.css'
import Countries from './components/Countries'
import Header from './components/Header'
import Loading from './components/Loading'
import useCountry from './hooks/useCountry'
import Notfound from './components/Notfound'

function App() {
  const [countries, isLoadingCountries, isErrorCountries] = useCountry()
  const [searchInput, setSearchInput] = useState('')

  if (isLoadingCountries) return <Loading />

  if (isErrorCountries || !countries)
    return (
      <p>
        Something went wrong , <br /> Please refresh the page{' '}
      </p>
    )

  const filteredCountries = countries.countries.filter((cntry) =>
    cntry.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
  )

  let content
  if (filteredCountries.length) {
    content = <Countries countries={filteredCountries} />
  } else {
    content = <Notfound />
  }

  return (
    <>
      <Header>
        <div className="relative">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search Country..."
          />
        </div>
      </Header>

      {content}
    </>
  )
}

export default App
