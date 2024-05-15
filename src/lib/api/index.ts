export async function getUsersFromApi(q: string) {
	let users
	try {
		const res = await fetch('https://api.github.com/search/users?q=' + q)
		users = res.json()
	} catch (error) {
		throw error
	}
	return users
}
export async function getDetailUserFromApi(username: string) {
	let user
	try {
		const res = await fetch('https://api.github.com/users/' + username)
		user = res.json()
	} catch (error) {
		throw error
	}
	return user
}
