## Get the data
* Load in the contents of `dogs.json`.

## List the dogs
* √ Create a list of dogs. Each item should contain the `name` and `breed_group`.
* √ Sort the dogs alphabetically by name from Z to A.

## Show the details
When a dog is selected:

* √ Display a bulleted list of their `temperament` values
* √ Display their weight (in metric)
* √ Display their `bred_for` value

## Bonus!

```
import { useRouter } from 'next/router'
const Router = useRouter()
useEffect(() => {
  if (currentDog) {
    Router.push(`/?counter=${currentDog.id}`, undefined, { shallow: true })
  }
}, [currentDog])
```
