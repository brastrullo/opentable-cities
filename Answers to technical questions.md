# Answers to Technical Questions

**How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**
- About 4hrs. 
- Optimize search. I added an autocomplete datalist for the cities but it was a massive array and is still not the best.
- Add lazy loading.
- Push my unfinished pagination feature. The data list only shows up to 100 restaurants.
- A "Did you mean? ..." city search functionality
- Add more details on the restaurant cards using the api (i.e. reservations, photos, etc.)

**What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

I'm still new at this but really enjoyed using React hooks and I have used it throughout the project.

```
  const { setRestaurantData, setCityName, cities } = props
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [filteredCities, setFilteredCities] = useState([])
  useEffect(() => { if (query !== '') console.log(query) }, [query])
  const cityOptions = filteredCities && filteredCities.length > 0
    ? (
      filteredCities.map((city, id) => <option key={id}>{city}</option>)
    ) : (
      <option />
    )

  const fetchRestaurants = async () => {
    const data = await fetch('https://opentable.herokuapp.com/api/restaurants?per_page=10&city=' + query)
      .then(res => res.json())
    console.log(`fetch(https://opentable.herokuapp.com/api/restaurants?per_page=10&city=${query})`)
    setRestaurantData(data)
    setIsSearching(false)
  }

  const handleChangeInput = (e) => {
    if (e.target.id === 'searchCity') setQuery(e.target.value)
    if (e.target.value.length > 2) {
      const filteredCities = cities.filter(city => city.startsWith(query)).slice(0, 10)
      console.log('filteredCities: ', filteredCities.length, filteredCities)
      setFilteredCities(filteredCities)
    } else {
      setFilteredCities([])
    }
  }
```
**How would you track down a performance issue in production? Have you ever had to do this?**
I have had to do this extensively especially when I used to work at BMO on campaign pages. Chrome Dev Tools is really useful for this. I would use the Network, Performance and Memory tabs to check for leaks and slow downs.

**How would you improve the API that you just used?**
Right now the official Opentable API has a registration process that takes up to 4 weeks to get accepted so I used the Heroku Opentable API. There are datasets that are missing in this API like ratings, and cuisine type that I wasn't able to add to the app.

**Please describe yourself using JSON.**
JSON is basically used like Javascript object syntax so I fetched the API and transformed the data using Array methods and Object methods.