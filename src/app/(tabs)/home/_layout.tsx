import { StackScreenNormal, StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const DetailsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Home',
					}}
				/>
				<Stack.Screen
					name="details"
					options={{
						...StackScreenNormal,
						headerTitle: 'Details',
					}}
				/>
			</Stack>
		</View>
	)
}

export default DetailsScreenLayout
