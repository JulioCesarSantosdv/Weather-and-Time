 document.getElementById("get-weather").addEventListener("click", function() {
            const locationInput = document.getElementById("location-input").value;

            // API key from an external weather service.
            const apiKey = "2e8ca2a438ff31e6f814c37b6e97e2a8";

            // Fetch weather data using the provided location and API key
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}`)
            
                .then(response => response.json())
                .then(data => {
                    const temperatureKelvin = data.main.temp;
                    const temperatureCelsius = temperatureKelvin - 273.15;
                    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

                    // Display temperature in Celsius, Fahrenheit, and Kelvin
                    const temperatureDiv = document.getElementById("temperature");
                    temperatureDiv.innerHTML = `
                        Temperature (Celsius): ${temperatureCelsius.toFixed(2)}&deg;C<br>
                        Temperature (Fahrenheit): ${temperatureFahrenheit.toFixed(2)}&deg;F<br>
                        Temperature (Kelvin): ${temperatureKelvin.toFixed(2)}K
                    `;

                    // Get the current time
                    const currentTime = new Date();
                    const timeDiv = document.getElementById("time");
                    timeDiv.textContent = `Current Time: ${currentTime.toLocaleTimeString()}`;
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    alert("Unable to fetch weather data. Please check your location and try again.");
                });
        });




