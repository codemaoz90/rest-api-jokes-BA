window.onload = () => {
	const btn = document.getElementById("btn");
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
		} catch (error) {
			console.log(error);
		}
	};

	btn.addEventListener("click", fetchJoke);
};
