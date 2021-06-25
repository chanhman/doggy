export default function Doggies({
  data,
  setCurrentDog,
}: {
  data: {
    id: number
    name: string
    breed_group: string
  }[],
  setCurrentDog: (obj: object) => void;
}) {
  return (
    <aside>
      {data.map((dog) => (
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
  )
}
