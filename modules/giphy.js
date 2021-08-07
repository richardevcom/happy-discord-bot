module.exports = (client) => {
	const fetch = require("node-fetch")

	client.fetchRandomGif = async (keywords) => {
		keywords = typeof Array.isArray === "undefined" ? keywords.join("+") : keywords

		const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${client.config.giphyKey}&tag=${keywords}`)
		const json = await response.json()

		return json.data
	}
}
