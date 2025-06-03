const weather = (() => {
  function convertData(data) {
    const {
      name: cityName,
      main: { temp: temperature, feels_like: feelsLike, humidity },
      wind: { speed: windSpeed },
    } = data;
    return { cityName, temperature, feelsLike, humidity, windSpeed }
  }

  async function getData(city) {
    const API_KEY = process.env.OPEN_MAP_API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`; 

    try {
      const res = await fetch(url, {mode: "cors"});
      if (!res.ok) throw new Error(`City ${city} not found`)
      const data = convertData(await res.json());
      return data;         
    } catch (error) {
        alert(error)
        return null;
    }
  }
  return { getData };
})();

export default weather;
