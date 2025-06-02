const weather = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 296.35,
    feels_like: 296.27,
    temp_min: 294.94,
    temp_max: 297.08,
    pressure: 1018,
    humidity: 59,
    sea_level: 1018,
    grnd_level: 952,
  },
  visibility: 10000,
  wind: {
    speed: 1.65,
    deg: 214,
    gust: 3.62,
  },
  clouds: {
    all: 16,
  },
  dt: 1748852590,
  sys: {
    type: 2,
    id: 2004688,
    country: "IT",
    sunrise: 1748835280,
    sunset: 1748890425,
  },
  timezone: 7200,
  id: 3163858,
  name: "Zocca",
  cod: 200,
};

// const listArr = weather.map(item => item.timezone)

console.log(weather)
