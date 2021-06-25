import useSWR from 'swr'
import { useState } from 'react'

import Doggies from 'components/Doggies'
import DoggyDeets from 'components/DoggyDeets'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/dogs', fetcher)
  const [currentDog, setCurrentDog] = useState(null)
  let sortedDogsByName

  if (data) {
    sortedDogsByName = [...data].sort((a, b) =>
      b.name.localeCompare(a.name)
    )
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="layout">
      <Doggies data={sortedDogsByName} setCurrentDog={setCurrentDog} />
      <DoggyDeets currentDog={currentDog} />
    </div>
  )
}
