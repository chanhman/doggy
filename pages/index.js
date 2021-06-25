// ## Get the data
// * Load in the contents of `dogs.json`.

// ## List the dogs
// * √ Create a list of dogs. Each item should contain the `name` and `breed_group`.
// * √ Sort the dogs alphabetically by name from Z to A.

// ## Show the details
// When a dog is selected:

// * √ Display a bulleted list of their `temperament` values
// * √ Display their weight (in metric)
// * √ Display their `bred_for` value

// Bonus!
// import { useRouter } from 'next/router'
// const Router = useRouter()
// useEffect(() => {
//   if (currentDog) {
//     Router.push(`/?counter=${currentDog.id}`, undefined, { shallow: true })
//   }
// }, [currentDog])

import { useState, useEffect } from 'react'

const DoggyDeets = ({ currentDog }) => {
  return (
    <div>
      <div>
        <b>Temperament:</b>
        <ul>
          {currentDog.temperament
            ? currentDog.temperament
                .split(', ')
                .map((behavior) => <li key={behavior}>{behavior}</li>)
            : 'N/A'}
        </ul>
      </div>
      <div>
        <b>Weight in metric:</b>{' '}
        {currentDog.weight && currentDog.weight.metric ? currentDog.weight.metric : 'N/A'}
      </div>
      <div>
        <b>Bred for:</b> {currentDog.bred_for ? currentDog.bred_for : 'N/A'}
      </div>
    </div>
  )
}

export default function Home({ data }) {
  const [currentDog, setCurrentDog] = useState(null)
  const sortedDogsByName = [...data].sort((a, b) =>
  b.name.localeCompare(a.name)
  )

  return (
    <div className="layout">
      <aside>
        {sortedDogsByName.map((dog) => (
          <div key={dog.id}>
            <div onClick={() => setCurrentDog(dog)}>
              <div>
                <b>Name:</b> {dog.name ? dog.name : 'N/A'}
              </div>
              <div>
                <b>Breed group:</b> {dog.breed_group ? dog.breed_group : 'N/A'}
              </div>
            </div>
            <br />
          </div>
        ))}
      </aside>
      {currentDog ? <DoggyDeets currentDog={currentDog} /> : null}
    </div>
  )
}

export async function getStaticProps() {
  try {
    const endPoint = 'http://localhost:3000/dogs.json'
    const res = await fetch(endPoint)
    const data = await res.json()

    return { props: { data } }
  } catch {
    return { notFound: true }
  }
}
