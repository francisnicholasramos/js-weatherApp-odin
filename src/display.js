const display = (() => {
  function setSearchResult(data) {
    if (!data) return;

    const cityName = document.querySelector('h3')
    const temperature = document.querySelector('.temperature')
    const feelsLike = document.querySelector('.feelsLike')
    const humidity = document.querySelector('.humidity')
    const wind = document.querySelector('.wind')

    cityName.textContent = `${data.cityName}`
    temperature.textContent = `${data.temperature}`
    feelsLike.textContent = `${data.feelsLike}`
    humidity.textContent = `${data.humidity}`
    wind.textContent = `${data.windSpeed}`
  }

  return { setSearchResult };

})();

export default display;
