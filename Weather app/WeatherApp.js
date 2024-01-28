const apiKey = "5ee22efd475ae83d155d2ceec7945493";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".input_search input")
const searchBtn = document.querySelector(".input_search button")
const Weathericon = document.querySelector('.weather_icon_img')
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)
    if(response.status==404){
        document.querySelector('.error').style.display='block'
        document.querySelector('.weather').style.display='none'
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".weatherCondition").innerHTML=data.weather[0].main;
        if (data.weather[0].main == "Clouds") {
            Weathericon.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            Weathericon.src = "images/clear.png"
        } else if (data.weather[0].main == "Rain") {
            Weathericon.src = "images/rain2.png"
        } else if (data.weather[0].main == "Drizzle") {
            Weathericon.src = "images/drizzle"
        } else if (data.weather[0].main == "Mist") {
            Weathericon.src = "images/wind.png"
        } else if (data.weather[0].main == "Smoke") {
            Weathericon.src = "images/snow.png"
        } else if (data.weather[0].main == "Haze") {
            Weathericon.src = "images/rain2.png"
        }
        document.querySelector('.weather').style.display="block"
        document.querySelector('.error').style.display="none"

    }
   
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})



