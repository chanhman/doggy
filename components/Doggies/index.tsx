export default function Doggies({
  data,
  currentDog,
  setCurrentDog,
}: {
  data: {
    id: number
    name: string
    breed_group: string
  }[]
  currentDog: { id: number }
  setCurrentDog: (obj: object) => void
}) {
  return (
    <aside>
      {data.map((dog) => (
        <div
          className={`card ${
            currentDog && currentDog.id == dog.id ? 'active' : ''
          }`}
          key={dog.id}
          onClick={() => setCurrentDog(dog)}
        >
          <p>
            <div className="label">Name:</div> {dog.name ? dog.name : 'N/A'}
          </p>
          <p>
            <div className="label">Breed group:</div>{' '}
            {dog.breed_group ? dog.breed_group : 'N/A'}
          </p>
        </div>
      ))}
    </aside>
  )
}
