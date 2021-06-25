export default function DoggyDeets({
  currentDog,
}: {
  currentDog: {
    temperament: string
    weight: {
      metric: string
    }
    bred_for: string
  }
}) {
  return (
    <div className="deets">
      {currentDog ? (
        <>
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
          <p>
            <b>Weight in metric:</b>{' '}
            {currentDog.weight && currentDog.weight.metric
              ? currentDog.weight.metric
              : 'N/A'}
          </p>
          <p>
            <b>Bred for:</b> {currentDog.bred_for ? currentDog.bred_for : 'N/A'}
          </p>
        </>
      ) : (
        'Click on a dog to learn more.'
      )}
    </div>
  )
}
