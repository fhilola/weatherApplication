const form = document.querySelector("#searchbar-form")
const cityInput = document.querySelector("#searchbar")
const API_KEY = "644f6ce0ca9e401ebb891832211707";
const time = document.querySelector(".time > h1")
const month = document.querySelector(".time > strong")
const currentTime = new Date().getHours()
const currenMinutes = new Date().getMinutes()
const currenMonth = new Date().getMonth()+1
const currentDay = new Date().getDay()
const currentDate = new Date().getDate()
const temperature = document.querySelector(".temperature > h2")
const feelsLike = document.querySelector(".temperature > strong")
const sunriseTime = document.querySelector(".sunrise > strong > span")
const sunsetTime = document.querySelector(".sunset > strong > span")
const conditionImg = document.querySelector(".condition > img")
const conditionText = document.querySelector(".condition > h3")
const humidity = document.querySelector(".humidity > h3")
const windSpeed = document.querySelector(".wind-speed > h3")
const pressure = document.querySelector(".pressure > h3")
const uv = document.querySelector(".uv > h3")
const button = document.querySelector(".location")
const mainTitle = document.querySelector(".nav-wrapper > h2")
const darkMode = document.querySelector(".dark-mode")
const indicator = document.querySelector(".indicator")
const dailyForecast = document.querySelector(".daily-forecast")
const hourlyForecast = document.querySelector(".hourly-forecast")
function renderDay(){
    if(currentDay == 1){
        return "Monday"
    }
    if(currentDay == 2){
        return "Tuesday"
    }
    if(currentDay == 3){
        return "Wednesday"
    }
    if(currentDay == 4){
        return "Thursday"
    }
    if(currentDay == 5){
        return "Friday"
    }
    if(currentDay == 6){
        return "Saturday"
    }
    if(currentDay == 7){
        return "Sunday"
    }
}
function renderMonth(){  
if(currenMonth == 1){
    return "January"
}
if(currenMonth == 2){
    return "February"
}
if(currenMonth == 3){
    return "Mrch"
}
if(currenMonth == 4){
    return "April"
}
if(currenMonth == 5){
    return "May"
}
if(currenMonth == 6){
    return "June"
}
if(currenMonth == 7){
    return "July"
}
if(currenMonth == 8){
    return "August"
}
if(currenMonth == 9){
    return "September"
}
if(currenMonth == 10){
    return "October"
}
if(currenMonth == 11){
    return "November"
}
else{
    return "December"
}
}
async function renderWeatherData(){
    try{
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityInput.value ? cityInput.value : "Tashkent"}&days=7&aqi=yes&alerts=yes`)
        let data = await response.json()
        console.log(data);
        console.log(data.forecast.forecastday[0].astro.sunrise);
        time.innerHTML = `${currentTime} : ${currenMinutes}`
        month.innerHTML = `${currentDate} ${renderMonth()}, ${renderDay()}`
        temperature.innerHTML = `${data.current.temp_c}°C`
        feelsLike.innerHTML = `Feels Like: ${data.current.feelslike_c}°C`
        sunriseTime.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
        sunsetTime.innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
        conditionImg.src = `${data.current.condition.icon}`
        conditionText.innerHTML = `${data.current.condition.text}`
        humidity.innerHTML = `${data.current.humidity} %`
        windSpeed.innerHTML = `${data.current.wind_kph}km/h`
        pressure.innerHTML = `${data.current.pressure_mb}hPa`
        uv.innerHTML = `${data.current.uv}`
        button.innerHTML = `
        <i class="bi bi-crosshair"></i>
        <a href="./pages/location.html?lat=${data.location.lat}&lon=${data.location.lon}">City Location</a>
        `
         mainTitle.innerHTML = `${cityInput.value ? cityInput.value : "Tashkent"}`
                 const infoFragment = document.createDocumentFragment()
        data.forecast.forecastday.forEach(daily =>{
            dailyForecast.innerHTML = ""
            const div = document.createElement("div")
            div.innerHTML = `
            <img src="${daily.day.condition.icon}"/>
            <h3>${daily.day.avgtemp_c}°C</h3>
            <strong>${daily.date}</strong>
            `
            infoFragment.appendChild(div)
        })
        dailyForecast.appendChild(infoFragment)
    }catch(err){
        console.error(err);
    }
}
renderWeatherData()

 form.addEventListener("submit", renderAllData)
function renderAllData(e){
        e?.preventDefault()
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityInput.value ? cityInput.value : "Tashkent"}&days=7&aqi=yes&alerts=yes`)
        .then(response => response.json())
        .then(data => {
        console.log(data)
        time.innerHTML = `${currentTime} : ${currenMinutes}`
        month.innerHTML = `${currentDate} ${renderMonth()}, ${renderDay()}`
        temperature.innerHTML = `${data.current.temp_c}°C`
        feelsLike.innerHTML = `Feels Like: ${data.current.feelslike_c}°C`
        sunriseTime.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
        sunsetTime.innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
        conditionImg.src = `${data.current.condition.icon}`
        conditionText.innerHTML = `${data.current.condition.text}`
        humidity.innerHTML = `${data.current.humidity} %`
        windSpeed.innerHTML = `${data.current.wind_kph}km/h`
        pressure.innerHTML = `${data.current.pressure_mb}hPa`
        uv.innerHTML = `${data.current.uv}`
        button.innerHTML = `
        <i class="bi bi-crosshair"></i>
        <a href="./pages/location.html?lat=${data.location.lat}&lon=${data.location.lon}&countryName=${cityInput.value}">City Location</a>
        `
        mainTitle.innerHTML = `${cityInput.value ? cityInput.value : "Tashkent"}`
        const infoFragment = document.createDocumentFragment()
        data.forecast.forecastday.forEach(daily =>{
            dailyForecast.innerHTML = ""
            const div = document.createElement("div")
            div.innerHTML = `
            <img src="${daily.day.condition.icon}"/>
            <h3>${daily.day.avgtemp_c}°C</h3>
            <strong>${daily.date}</strong>
            `
            infoFragment.appendChild(div)
        })
        dailyForecast.appendChild(infoFragment)
        })    
}