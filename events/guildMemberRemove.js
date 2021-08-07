// This event executes when a new member leaves a server. Let's say them!

module.exports = (client, member) => {
	// Load the guild's settings
	const settings = client.getSettings(member.guild)

	// If welcome is off, don't proceed (don't welcome the user)
	if (!settings.welcomeEnabled) return

	// Replace the placeholders in the welcome message with actual data
	const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user.tag)

	// Send the welcome message to the welcome channel
	// There's a place for more configs here.
	member.guild.channels.cache.get("869477201110773830").send(welcomeMessage).catch(console.error)
}
