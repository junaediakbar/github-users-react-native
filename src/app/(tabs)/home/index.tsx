import UsersList from '@/components/UsersList'
import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigation'
import { getUsersFromApi } from '@/lib/api'
import { defaultStyles, utilsStyles } from '@/styles'
import { User } from '@/types/user'
import { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'

const HomeScreen = () => {
	const [filteredUsers, setFilteredUsers] = useState<User[]>()
	const [isLoading, setIsLoading] = useState(false)
	const search: string = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	async function fetchData() {
		try {
			const searchText = search || 'a'
			const res = await getUsersFromApi(searchText)
			return res.items
		} catch (e) {
			console.error('Error fetching data:', e)
			throw e
		}
	}

	useEffect(() => {
		const getData = setTimeout(() => {
			setIsLoading(true)
			fetchData().then((response: User[]) => {
				setFilteredUsers(response)
				setIsLoading(false)
			})
		}, 300)

		return () => clearTimeout(getData)
	}, [search])

	return (
		<View style={defaultStyles.container}>
			{isLoading ? (
				<ActivityIndicator style={utilsStyles.loadingIndicator} />
			) : (
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={{ paddingHorizontal: screenPadding.horizontal }}
				>
					<UsersList users={filteredUsers as User[]} scrollEnabled={false} />
				</ScrollView>
			)}
		</View>
	)
}

export default HomeScreen
