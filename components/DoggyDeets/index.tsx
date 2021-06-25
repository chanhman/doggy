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
            <div className="label">Temperament:</div>
            <ul>
              {currentDog.temperament ? (
                currentDog.temperament
                  .split(', ')
                  .map((behavior) => <li key={behavior}>{behavior}</li>)
              ) : (
                <li>N/A</li>
              )}
            </ul>
          </div>
          <p>
            <div className="label">Weight in metric:</div>
            {currentDog.weight && currentDog.weight.metric
              ? currentDog.weight.metric
              : 'N/A'}
          </p>
          <p>
            <div className="label">Bred for:</div>
            {currentDog.bred_for ? currentDog.bred_for : 'N/A'}
          </p>
        </>
      ) : (
        'Click on a dog to learn more.'
      )}
    </div>
  )
}
