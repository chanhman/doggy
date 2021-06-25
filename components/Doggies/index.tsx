export default function Doggies({
  data,
  setCurrentDog,
}: {
  data: {
    id: number
    name: string
    breed_group: string
  }[]
  setCurrentDog: (obj: object) => void
}) {
  return (
    <aside>
      {data.map((dog) => (
        <div className="card" key={dog.id} onClick={() => setCurrentDog(dog)}>
          <p>
            <b>Name:</b> {dog.name ? dog.name : 'N/A'}
          </p>
          <p>
            <b>Breed group:</b> {dog.breed_group ? dog.breed_group : 'N/A'}
          </p>
        </div>
      ))}
    </aside>
  )
}
