// This event executes when a new guild (server) is joined.
// @richardev - somehow without async+await initial fetch, we can't get owner data on join 🤔
module.exports = async (client, guild) => {
	await guild.members.fetch(guild.ownerID) // Fetches owner

	const config = client.getSettings(guild)

	// Let's send sad goodbyes gif once use leaves.
	try {
		await client.fetchRandomGif("swag").then(async (data) => {
			await guild.channels.cache.get("869477201110773830").send(`Woop, woop! 🚨 Happy is in da house!`, {
				files: [data.image_original_url],
			})
		})
	} catch (e) {
		client.logger.error(`[CHANNEL GET] ${config.welcomeChannel} not found: ${e}`)
	}

	client.logger.cmd(`[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`)
}
