import { GetStaticProps } from 'next'
import { useState } from 'react'

import Doggies from 'components/Doggies'
import DoggyDeets from 'components/DoggyDeets'

export default function Home({
  data,
}: {
  data: {
    id: number
    name: string
    breed_group: string
    bred_for: string
    height: object
    life_span: string
    reference_image_id: string
    temperament: string
    weight: object
  }[]
}) {
  const [currentDog, setCurrentDog] = useState(null)
  const sortedDogsByName = [...data].sort((a, b) =>
    b.name.localeCompare(a.name)
  )

  return (
    <div className="layout">
      <Doggies data={sortedDogsByName} setCurrentDog={setCurrentDog} />
      {currentDog ? <DoggyDeets currentDog={currentDog} /> : null}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const endPoint = 'http://localhost:3000/dogs.json'
    const res = await fetch(endPoint)
    const data = await res.json()

    return { props: { data } }
  } catch {
    return { notFound: true }
  }
}
