// json
/*
let student = {
    name: "siva sankar",
    age: 20,
    city: "anantapur",
    marks: [90, 80, 70, 60]
};

//convert object to json string
let jsondata = JSON.stringify(student);
console.log("json data:", jsondata);

//convert json string to object
let parsedobj = JSON.parse(jsondata);
console.log("parsed object:", parsedobj);

//print the three books in json format
let books = [
    { title: "book1", author: "author1", year: 2001 },
    { title: "book2", author: "author2", year: 2002 },
    { title: "book3", author: "author3", year: 2003 }
];
console.log("books titles:", books.map(book => book.title));

//fetch sample json from api
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log("fetched json:", json))
    .catch(error => console.error('Error fetching JSON:', error));

//fetch all users an show in console + page
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Correctly chain the promises
    .then(users => {
        console.log(users); // Also log the users to the console
        let output = "<h3>Users:</h3><ul>";
        users.forEach(user => {
            output += `<li>${user.name} (${user.email})</li>`;
        });
        output += "</ul>";
        document.body.innerHTML += output;
    })
    .catch(error => console.error('Error fetching users:', error));
*/
//predefined city coordinates
/*
const cities = {
    "Bengaluru": { lat: 12.9716, lon: 77.5946 },
    "Hyderabad": { lat: 17.3850, lon: 78.4867 },
    "Anantapur": { lat: 14.6819, lon: 77.6006 },
    "Chennai": { lat: 13.0827, lon: 80.2707 }
};

//event listener for button click
document.getElementById('fetchWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (cities[city]) {
        const { lat, lon } = cities[city];
        const apiKey = 'ab123cdef456ghi789jkl012mno345pq'; // Replace with your actual OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const weatherInfo = `
                        <h3>Weather in ${data.name}</h3>
                        <p>Temperature: ${data.main.temp} °C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                    `;
                document.getElementById('weatherResult').innerHTML = weatherInfo;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    } else {
        alert('City not found. Please enter a valid city name.');
    }
});

//ajax fetch for a default location on page load
// Note: This uses a different API (Open-Meteo) that matches the expected data structure.
const defaultLat = 14.6819; // Anantapur Latitude
const defaultLon = 77.6006; // Anantapur Longitude
const defaultWeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${defaultLat}&longitude=${defaultLon}&current_weather=true`;

fetch(defaultWeatherUrl)
    .then(response => response.json())
    .then(data => {
        if (data.current_weather) {
            document.getElementById('ajaxResult').innerHTML = `
                <h3>Current Weather in Anantapur</h3>
                <p>Temperature: ${data.current_weather.temperature} °C</p>
                <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                <p>Time: ${new Date(data.current_weather.time).toLocaleTimeString()}</p>
            `;
        } else {
            document.getElementById('ajaxResult').innerHTML = `<p>No current weather data available.</p>`;
        }
    })
    .catch(error => {
        console.error('Error fetching default weather:', error);
        document.getElementById('ajaxResult').innerHTML = `<p>Error fetching weather data.</p>`;
    });
*/


//json

// Predefined city → coordinates
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};


// Event Listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "⚠️ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  // AJAX Fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "⚠️ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "⚠️ Error fetching weather.";
    });
});