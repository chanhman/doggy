export default function DoggyDeets1({ currentDog }) {
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
        {currentDog.weight && currentDog.weight.metric
          ? currentDog.weight.metric
          : 'N/A'}
      </div>
      <div>
        <b>Bred for:</b> {currentDog.bred_for ? currentDog.bred_for : 'N/A'}
      </div>
    </div>
  )
}
