window.onload = () => {
	const btn = document.getElementById("btn"),
		joke = document.getElementById("joke");

	const fetchJoke = async () => {
		try {
			const url = "https://icanhazdadjoke.com/";
			const response = await fetch(url, {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			});
			const data = await response.json();
			console.log(data);
			joke.innerHTML = ` "${data.joke}"`;
		} catch (error) {
			console.log(error);
		}
	};

	// Consumiendo el api meteorologica.
	const fetchWeather = async () => {
		const img = document.getElementById("img"),
			temp = document.getElementById("temp"),
			title = document.getElementById("title");

		const API_KEY = "33a600a56bb0a3b1cfc710f225d1ae6f";
		const city = "Barcelona";
		try {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
			const response = await fetch(url, {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			});

			const { name, weather, main } = await response.json();

			const mainTemp = (main.temp - 273).toFixed(2);
			const { description, icon } = weather[0];
			img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
			temp.innerHTML = `${mainTemp}<span>ºC</span>`;
			title.innerHTML = name;
			console.log(weather, main);
		} catch (error) {
			console.log(error);
		}
	};
	fetchWeather();
	btn.addEventListener("click", fetchJoke);
};
